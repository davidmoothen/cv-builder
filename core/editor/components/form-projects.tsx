"use client"
import { useEffect, useState } from "react"
import { useForm, useFieldArray, Control, UseFormRegister } from "react-hook-form"
import { ChevronDownIcon, Trash2Icon } from "lucide-react"
import { useResumeStore } from "@/core/resume"
import type { ResumeProject } from "@/core/resume"
import { AddButton, DeleteButton, Field, SectionBody, SectionTitle, inputCls, textareaCls } from "./ui"

type StringItem = { value: string }

type ProjectFormData = {
  name: string
  status: string
  description: string
  stack: StringItem[]
  achievements: StringItem[]
}

type ProjectsFormData = { projects: ProjectFormData[] }

function toProjectForm(p: ResumeProject): ProjectFormData {
  return {
    name: p.name,
    status: p.status,
    description: p.description,
    stack: p.stack.map(v => ({ value: v })),
    achievements: p.achievements.map(v => ({ value: v })),
  }
}

function fromProjectForm(f: ProjectFormData): ResumeProject {
  return {
    name: f.name,
    status: f.status,
    description: f.description,
    stack: (f.stack ?? []).map(i => i.value).filter(Boolean),
    achievements: (f.achievements ?? []).map(i => i.value).filter(Boolean),
  }
}

function StringItemsList({
  control, register, name, label, placeholder,
}: {
  control: Control<ProjectsFormData>
  register: UseFormRegister<ProjectsFormData>
  name: `projects.${number}.stack` | `projects.${number}.achievements`
  label: string
  placeholder?: string
}) {
  const { fields, append, remove } = useFieldArray({ control, name })
  return (
    <Field label={label}>
      <div className="flex flex-col gap-1.5">
        {fields.map((field, j) => (
          <div key={field.id} className="flex gap-2 items-center">
            <input
              className={inputCls}
              placeholder={placeholder}
              {...(register as any)(`${name}.${j}.value`)}
            />
            <DeleteButton onClick={() => remove(j)} />
          </div>
        ))}
        <AddButton label="Ajouter" onClick={() => (append as any)({ value: "" })} />
      </div>
    </Field>
  )
}

function ProjectItem({
  control, register, index, onRemove,
}: {
  control: Control<ProjectsFormData>
  register: UseFormRegister<ProjectsFormData>
  index: number
  onRemove: () => void
}) {
  const [open, setOpen] = useState(index === 0)
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-3 py-2.5 bg-white hover:bg-gray-50 text-left"
      >
        <span className="text-xs font-semibold text-gray-700">Projet {index + 1}</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onRemove() }}
            className="flex-shrink-0 text-gray-300 hover:text-red-400 transition-colors p-0.5"
            aria-label="Supprimer"
          >
            <Trash2Icon className="w-3.5 h-3.5" />
          </button>
          <ChevronDownIcon className={`w-3.5 h-3.5 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
        </div>
      </button>
      {open && (
        <div className="px-3 pb-4 flex flex-col gap-3 border-t border-gray-100 pt-3">
          <Field label="Nom">
            <input className={inputCls} {...register(`projects.${index}.name`)} />
          </Field>
          <Field label="Statut">
            <input className={inputCls} placeholder="Projet personnel · En cours" {...register(`projects.${index}.status`)} />
          </Field>
          <Field label="Description">
            <textarea className={textareaCls} rows={2} {...register(`projects.${index}.description`)} />
          </Field>
          <StringItemsList
            control={control} register={register}
            name={`projects.${index}.stack`} label="Stack (technologies)" placeholder="Next.js"
          />
          <StringItemsList
            control={control} register={register}
            name={`projects.${index}.achievements`} label="Réalisations"
          />
        </div>
      )}
    </div>
  )
}

export function FormProjects() {
  const patchResume = useResumeStore(s => s.patchResume)
  const form = useForm<ProjectsFormData>({
    defaultValues: {
      projects: (useResumeStore.getState().resume.projects ?? []).map(toProjectForm),
    },
    mode: "onChange",
  })
  const { register, control, watch } = form
  const { fields, append, remove } = useFieldArray({ control, name: "projects" })

  useEffect(() => {
    const { unsubscribe } = watch((values) => {
      patchResume({ projects: (values.projects ?? []).map(p => fromProjectForm(p as ProjectFormData)) })
    })
    return unsubscribe
  }, [watch, patchResume])

  return (
    <>
      <SectionTitle title="Projets" />
      <SectionBody>
        <div className="flex flex-col gap-3">
          {fields.map((field, i) => (
            <ProjectItem
              key={field.id}
              control={control}
              register={register}
              index={i}
              onRemove={() => remove(i)}
            />
          ))}
          <AddButton
            label="Ajouter un projet"
            onClick={() => append({ name: "", status: "", description: "", stack: [], achievements: [] })}
          />
        </div>
      </SectionBody>
    </>
  )
}
