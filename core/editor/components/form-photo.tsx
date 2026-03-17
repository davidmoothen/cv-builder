"use client"
import { useCallback, useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { useResumeStore } from "@/core/resume"
import { Field, SectionBody, SectionTitle, inputCls } from "./ui"

const MAX_FILE_SIZE_KB = 500
const MAX_DIMENSION = 400
const JPEG_QUALITY = 0.85
const LS_MAX_KB = 5 * 1024

function getLocalStorageUsedKB(): number {
  try {
    let total = 0
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key) total += (localStorage.getItem(key)?.length ?? 0)
    }
    return Math.round(total / 1024)
  } catch {
    return 0
  }
}

function resizeAndConvertToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      const ratio = Math.min(MAX_DIMENSION / img.width, MAX_DIMENSION / img.height, 1)
      const w = Math.round(img.width * ratio)
      const h = Math.round(img.height * ratio)
      const canvas = document.createElement("canvas")
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext("2d")!
      ctx.drawImage(img, 0, 0, w, h)
      resolve(canvas.toDataURL("image/jpeg", JPEG_QUALITY))
    }
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("Impossible de charger l'image")) }
    img.src = url
  })
}

type PhotoFormData = {
  photoUrl: string
}

const TABS = [
  { id: "url" as const, label: "URL directe" },
  { id: "upload" as const, label: "Uploader un fichier" },
]

export function FormPhoto() {
  const patchResume = useResumeStore(s => s.patchResume)
  const photoBase64 = useResumeStore(s => s.resume.contact.photoBase64)
  const photoMode = useResumeStore(s => s.photoMode)
  const setPhotoMode = useResumeStore(s => s.setPhotoMode)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [lsUsedKB, setLsUsedKB] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setLsUsedKB(getLocalStorageUsedKB())
  }, [photoBase64])

  const { register, watch } = useForm<PhotoFormData>({
    defaultValues: (() => {
      const r = useResumeStore.getState().resume
      return {
        photoUrl: r.contact.photoUrl ?? "",
      }
    })(),
    mode: "onChange",
  })

  useEffect(() => {
    const { unsubscribe } = watch((values) => {
      const v = values as PhotoFormData
      const current = useResumeStore.getState().resume
      patchResume({
        contact: {
          ...current.contact,
          photoUrl: v.photoUrl,
        },
      })
      setLsUsedKB(getLocalStorageUsedKB())
    })
    return unsubscribe
  }, [watch, patchResume])

  const handleFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploadError(null)
    if (file.size > MAX_FILE_SIZE_KB * 1024) {
      setUploadError(`Image trop lourde (max ${MAX_FILE_SIZE_KB}KB). Compressez-la avant de l'uploader.`)
      e.target.value = ""
      return
    }
    try {
      const base64 = await resizeAndConvertToBase64(file)
      const current = useResumeStore.getState().resume
      patchResume({ contact: { ...current.contact, photoBase64: base64 } })
      setLsUsedKB(getLocalStorageUsedKB())
    } catch {
      setUploadError("Erreur lors du traitement de l'image.")
    }
    e.target.value = ""
  }, [patchResume])

  const handleRemovePhoto = useCallback(() => {
    const current = useResumeStore.getState().resume
    patchResume({ contact: { ...current.contact, photoBase64: undefined } })
    setLsUsedKB(getLocalStorageUsedKB())
  }, [patchResume])

  const photoUrlValue = watch("photoUrl")
  const lsPercent = Math.min(Math.round((lsUsedKB / LS_MAX_KB) * 100), 100)

  return (
    <>
      <SectionTitle title="Photo de profil" />
      <SectionBody>
        {/* Tabs */}
        <div className="flex border border-gray-200 rounded-lg overflow-hidden text-xs font-medium">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setPhotoMode(tab.id)}
              className={`flex-1 py-2 px-3 transition-colors ${
                photoMode === tab.id
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-500 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab: URL directe */}
        {photoMode === "url" && (
          <Field label="URL directe">
            <input className={inputCls} placeholder="https://..." {...register("photoUrl")} />
            {photoUrlValue?.includes("drive.google.com") && (
              <p className="text-xs text-orange-500 mt-1">
                Lien Google Drive détecté — ce format n&apos;est pas compatible.
              </p>
            )}
            <p className="text-xs text-gray-400 mt-1">
              Les liens Google Drive ne sont pas supportés. Utilisez une URL directe vers une image (ex&nbsp;: Imgur, GitHub, ou tout lien se terminant par .jpg, .png, .webp)
            </p>
          </Field>
        )}

        {/* Tab: Upload */}
        {photoMode === "upload" && (
          <Field label="Fichier">
            {photoBase64 ? (
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photoBase64} alt="Aperçu" className="w-12 h-12 rounded-full object-cover border border-gray-200" />
                <button
                  type="button"
                  onClick={handleRemovePhoto}
                  className="text-xs text-red-400 hover:text-red-300 underline"
                >
                  Supprimer
                </button>
              </div>
            ) : (
              <>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border border-dashed border-gray-300 rounded-md px-3 py-3 text-sm text-gray-500 hover:border-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors text-center cursor-pointer"
                >
                  Choisir une image…
                </button>
                {uploadError && (
                  <p className="text-xs text-red-500 mt-1">{uploadError}</p>
                )}
              </>
            )}
          </Field>
        )}
      </SectionBody>
    </>
  )
}
