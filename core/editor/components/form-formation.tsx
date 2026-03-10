"use client"
import { useEffect } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { useResumeStore } from "@/core/resume"
import type { ResumeFormation } from "@/core/resume"
import { AddButton, DeleteButton, Field, ItemCard, SectionBody, SectionTitle, inputCls } from "./ui"

type FormationFormData = { formations: ResumeFormation[] }

export function FormFormation() {
  const patchResume = useResumeStore(s => s.patchResume)
  const form = useForm<FormationFormData>({
    defaultValues: { formations: useResumeStore.getState().resume.formations },
    mode: "onChange",
  })
  const { register, control, watch } = form
  const { fields, append, remove } = useFieldArray({ control, name: "formations" })

  useEffect(() => {
    const { unsubscribe } = watch((values) => {
      patchResume({ formations: (values.formations ?? []) as ResumeFormation[] })
    })
    return unsubscribe
  }, [watch, patchResume])

  return (
    <>
      <SectionTitle title="Formation" />
      <SectionBody>
        <div className="flex flex-col gap-3">
          {fields.map((field, i) => (
            <ItemCard key={field.id}>
              <div className="flex justify-between items-start">
                <span className="text-xs font-medium text-gray-600">Formation {i + 1}</span>
                <DeleteButton onClick={() => remove(i)} />
              </div>
              <Field label="Année / Période">
                <input className={inputCls} {...register(`formations.${i}.date`)} />
              </Field>
              <Field label="Diplôme / Titre">
                <input className={inputCls} {...register(`formations.${i}.title`)} />
              </Field>
              <Field label="École">
                <input className={inputCls} {...register(`formations.${i}.school`)} />
              </Field>
            </ItemCard>
          ))}
          <AddButton
            label="Ajouter une formation"
            onClick={() => append({ date: "", title: "", school: "" })}
          />
        </div>
      </SectionBody>
    </>
  )
}
