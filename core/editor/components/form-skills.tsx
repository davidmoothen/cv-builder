"use client"
import { useEffect } from "react"
import { useForm, useFieldArray, Control, UseFormRegister } from "react-hook-form"
import { useResumeStore } from "@/core/resume"
import type { ResumeSkills } from "@/core/resume"
import { AddButton, DeleteButton, Field, ItemCard, SectionBody, SectionTitle, inputCls } from "./ui"

type SkillGroupFormData = { title: string; items: { value: string }[] }
type SkillsFormData = { skills: SkillGroupFormData[] }

function SkillItemsList({
  control,
  register,
  groupIndex,
}: {
  control: Control<SkillsFormData>
  register: UseFormRegister<SkillsFormData>
  groupIndex: number
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `skills.${groupIndex}.items`,
  })
  return (
    <Field label="Items">
      <div className="flex flex-col gap-1.5">
        {fields.map((field, j) => (
          <div key={field.id} className="flex gap-2 items-center">
            <input
              className={inputCls}
              {...register(`skills.${groupIndex}.items.${j}.value`)}
            />
            <DeleteButton onClick={() => remove(j)} />
          </div>
        ))}
        <AddButton label="Ajouter" onClick={() => append({ value: "" })} />
      </div>
    </Field>
  )
}

export function FormSkills() {
  const patchResume = useResumeStore(s => s.patchResume)
  const form = useForm<SkillsFormData>({
    defaultValues: {
      skills: useResumeStore.getState().resume.skills.map(s => ({
        title: s.title,
        items: s.items.map(v => ({ value: v })),
      })),
    },
    mode: "onChange",
  })
  const { register, control, watch } = form
  const { fields, append, remove } = useFieldArray({ control, name: "skills" })

  useEffect(() => {
    const { unsubscribe } = watch((values) => {
      const skills: ResumeSkills[] = (values.skills ?? []).map(g => ({
        title: g?.title ?? "",
        items: (g?.items ?? []).map(i => i?.value ?? "").filter(Boolean),
      }))
      patchResume({ skills })
    })
    return unsubscribe
  }, [watch, patchResume])

  return (
    <>
      <SectionTitle title="Compétences" />
      <SectionBody>
        <div className="flex flex-col gap-3">
          {fields.map((field, i) => (
            <ItemCard key={field.id}>
              <div className="flex justify-between items-start">
                <span className="text-xs font-medium text-gray-600">Groupe {i + 1}</span>
                <DeleteButton onClick={() => remove(i)} />
              </div>
              <Field label="Catégorie">
                <input className={inputCls} {...register(`skills.${i}.title`)} />
              </Field>
              <SkillItemsList control={control} register={register} groupIndex={i} />
            </ItemCard>
          ))}
          <AddButton
            label="Ajouter un groupe"
            onClick={() => append({ title: "", items: [] })}
          />
        </div>
      </SectionBody>
    </>
  )
}
