"use client"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useResumeStore } from "@/core/resume"
import { Field, SectionBody, SectionTitle, inputCls } from "./ui"

type IdentityFormData = {
  firstname: string
  lastname: string
  title: string
  phone: string
  email: string
  location: string
  website: string
  avatar: string
}

export function FormIdentity() {
  const patchResume = useResumeStore(s => s.patchResume)
  const { register, watch } = useForm<IdentityFormData>({
    defaultValues: (() => {
      const r = useResumeStore.getState().resume
      return {
        firstname: r.contact.firstname,
        lastname: r.contact.lastname,
        title: r.title,
        phone: r.contact.phone,
        email: r.contact.email,
        location: r.contact.location,
        website: r.contact.website,
        avatar: r.contact.avatar ?? "",
      }
    })(),
    mode: "onChange",
  })

  useEffect(() => {
    const { unsubscribe } = watch((values) => {
      const v = values as IdentityFormData
      const current = useResumeStore.getState().resume
      patchResume({
        title: v.title,
        contact: {
          ...current.contact,
          firstname: v.firstname,
          lastname: v.lastname,
          phone: v.phone,
          email: v.email,
          location: v.location,
          website: v.website,
          avatar: v.avatar,
        },
      })
    })
    return unsubscribe
  }, [watch, patchResume])

  return (
    <>
      <SectionTitle title="Identité" />
      <SectionBody>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Prénom">
            <input className={inputCls} {...register("firstname")} />
          </Field>
          <Field label="Nom">
            <input className={inputCls} {...register("lastname")} />
          </Field>
        </div>
        <Field label="Titre du CV">
          <input className={inputCls} {...register("title")} />
        </Field>
        <Field label="Téléphone">
          <input className={inputCls} {...register("phone")} />
        </Field>
        <Field label="Email">
          <input className={inputCls} type="email" {...register("email")} />
        </Field>
        <Field label="Localisation">
          <input className={inputCls} {...register("location")} />
        </Field>
        <Field label="Site web">
          <input className={inputCls} {...register("website")} />
        </Field>
        <Field label="Photo de profil (URL)">
          <input className={inputCls} placeholder="https://..." {...register("avatar")} />
        </Field>
      </SectionBody>
    </>
  )
}
