"use client"
import { useEffect } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { useResumeStore } from "@/core/resume"
import { AddButton, DeleteButton, SectionBody, SectionTitle, inputCls } from "./ui"

type FactsFormData = { facts: { value: string }[] }

export function FormFacts() {
  const patchResume = useResumeStore(s => s.patchResume)
  const { register, control, watch } = useForm<FactsFormData>({
    defaultValues: {
      facts: (useResumeStore.getState().resume.facts ?? []).map(v => ({ value: v })),
    },
    mode: "onChange",
  })
  const { fields, append, remove } = useFieldArray({ control, name: "facts" })

  useEffect(() => {
    const { unsubscribe } = watch((values) => {
      const facts = (values.facts ?? []).map(f => f?.value ?? "").filter(Boolean)
      patchResume({ facts })
    })
    return unsubscribe
  }, [watch, patchResume])

  return (
    <>
      <SectionTitle title="Hauts-faits" />
      <SectionBody>
        <div className="flex flex-col gap-1.5">
          {fields.map((field, i) => (
            <div key={field.id} className="flex gap-2 items-center">
              <input
                className={inputCls}
                placeholder="Ex : 3 ans d'expérience en React"
                {...register(`facts.${i}.value`)}
              />
              <DeleteButton onClick={() => remove(i)} />
            </div>
          ))}
          <AddButton label="Ajouter" onClick={() => append({ value: "" })} />
        </div>
      </SectionBody>
    </>
  )
}
