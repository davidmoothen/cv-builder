"use client"
import { useEffect } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { useResumeStore } from "@/core/resume"
import { AddButton, DeleteButton, Field, ItemCard, SectionBody, SectionTitle, textareaCls, inputCls } from "./ui"

type BioFormData = {
  sentences: { value: string }[]
  skills: { value: string }[]
}

export function FormBio() {
  const patchResume = useResumeStore(s => s.patchResume)
  const form = useForm<BioFormData>({
    defaultValues: (() => {
      const bio = useResumeStore.getState().resume.bio
      return {
        sentences: bio.sentences.map(v => ({ value: v })),
        skills: bio.skills.map(v => ({ value: v })),
      }
    })(),
    mode: "onChange",
  })
  const { register, control, watch } = form
  const sentenceFields = useFieldArray({ control, name: "sentences" })
  const skillFields = useFieldArray({ control, name: "skills" })

  useEffect(() => {
    const { unsubscribe } = watch((values) => {
      const v = values as BioFormData
      patchResume({
        bio: {
          sentences: (v.sentences ?? []).map(s => s.value).filter(Boolean),
          skills: (v.skills ?? []).map(s => s.value).filter(Boolean),
        },
      })
    })
    return unsubscribe
  }, [watch, patchResume])

  return (
    <>
      <SectionTitle title="Bio" />
      <SectionBody>
        <Field label="Phrases">
          <div className="flex flex-col gap-2">
            {sentenceFields.fields.map((field, i) => (
              <ItemCard key={field.id}>
                <div className="flex gap-2 items-start">
                  <textarea
                    className={textareaCls}
                    rows={3}
                    {...register(`sentences.${i}.value`)}
                  />
                  <DeleteButton onClick={() => sentenceFields.remove(i)} />
                </div>
              </ItemCard>
            ))}
            <AddButton label="Ajouter une phrase" onClick={() => sentenceFields.append({ value: "" })} />
          </div>
        </Field>
        <Field label="Points clés (facultatif)">
          <div className="flex flex-col gap-2">
            {skillFields.fields.map((field, i) => (
              <div key={field.id} className="flex gap-2 items-center">
                <input className={inputCls} {...register(`skills.${i}.value`)} />
                <DeleteButton onClick={() => skillFields.remove(i)} />
              </div>
            ))}
            <AddButton label="Ajouter un point" onClick={() => skillFields.append({ value: "" })} />
          </div>
        </Field>
      </SectionBody>
    </>
  )
}
