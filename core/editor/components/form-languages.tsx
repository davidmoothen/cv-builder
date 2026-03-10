"use client"
import { useEffect } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { useResumeStore } from "@/core/resume"
import type { ResumeLanguages } from "@/core/resume"
import { AddButton, DeleteButton, Field, ItemCard, SectionBody, SectionTitle, inputCls } from "./ui"

type LanguagesFormData = { languages: ResumeLanguages[] }

export function FormLanguages() {
  const patchResume = useResumeStore(s => s.patchResume)
  const form = useForm<LanguagesFormData>({
    defaultValues: { languages: useResumeStore.getState().resume.languages },
    mode: "onChange",
  })
  const { register, control, watch } = form
  const { fields, append, remove } = useFieldArray({ control, name: "languages" })

  useEffect(() => {
    const { unsubscribe } = watch((values) => {
      patchResume({ languages: (values.languages ?? []) as ResumeLanguages[] })
    })
    return unsubscribe
  }, [watch, patchResume])

  return (
    <>
      <SectionTitle title="Langues" />
      <SectionBody>
        <div className="flex flex-col gap-2">
          {fields.map((field, i) => (
            <ItemCard key={field.id}>
              <div className="grid grid-cols-2 gap-2">
                <Field label="Langue">
                  <input className={inputCls} {...register(`languages.${i}.language`)} />
                </Field>
                <Field label="Niveau">
                  <input className={inputCls} placeholder="natif, courant…" {...register(`languages.${i}.level`)} />
                </Field>
              </div>
              <div className="flex justify-end">
                <DeleteButton onClick={() => remove(i)} />
              </div>
            </ItemCard>
          ))}
          <AddButton
            label="Ajouter une langue"
            onClick={() => append({ language: "", level: "" })}
          />
        </div>
      </SectionBody>
    </>
  )
}
