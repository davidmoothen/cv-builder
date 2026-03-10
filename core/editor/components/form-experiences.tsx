"use client"
import { useEffect, useState } from "react"
import { useForm, useFieldArray, Control, UseFormRegister } from "react-hook-form"
import { ChevronDownIcon, Trash2Icon } from "lucide-react"
import { useResumeStore } from "@/core/resume"
import type { ResumeExperience, ResumeClient } from "@/core/resume"
import { AddButton, DeleteButton, Field, ItemCard, SectionBody, SectionTitle, inputCls, textareaCls } from "./ui"

// ---------- Form data types ----------

type StringItem = { value: string }

type ClientFormData = {
  name: string
  date: string
  description: string
  links: StringItem[]
  achievements: { title: string; items: StringItem[] }
}

type ExperienceFormData = {
  job: string
  company: string
  date: string
  current: boolean
  description: string
  link: string
  achievements: { title: string; items: StringItem[] }
  clients: ClientFormData[]
}

type ExperiencesFormData = { experiences: ExperienceFormData[] }

// ---------- Converters ----------

function toExperienceForm(exp: ResumeExperience): ExperienceFormData {
  return {
    job: exp.job,
    company: exp.company,
    date: exp.date,
    current: exp.current,
    description: exp.description,
    link: exp.link ?? "",
    achievements: {
      title: exp.achievements.title,
      items: exp.achievements.items.map(v => ({ value: v })),
    },
    clients: (exp.clients ?? []).map(c => ({
      name: c.name,
      date: c.date,
      description: c.description,
      links: (c.links ?? []).map(v => ({ value: v })),
      achievements: {
        title: c.achievements.title,
        items: c.achievements.items.map(v => ({ value: v })),
      },
    })),
  }
}

function fromExperienceForm(f: ExperienceFormData): ResumeExperience {
  return {
    job: f.job,
    company: f.company,
    date: f.date,
    current: f.current,
    description: f.description,
    ...(f.link ? { link: f.link } : {}),
    achievements: {
      title: f.achievements?.title ?? "",
      items: (f.achievements?.items ?? []).map(i => i.value).filter(Boolean),
    },
    clients: (f.clients ?? []).map(c => ({
      name: c.name,
      date: c.date,
      description: c.description,
      links: (c.links ?? []).map(l => l.value).filter(Boolean),
      achievements: {
        title: c.achievements?.title ?? "",
        items: (c.achievements?.items ?? []).map(i => i.value).filter(Boolean),
      },
    })),
  }
}

// ---------- StringItems sub-component ----------

function StringItemsList({
  control,
  register,
  name,
  label,
  placeholder,
}: {
  control: Control<ExperiencesFormData>
  register: UseFormRegister<ExperiencesFormData>
  name: `experiences.${number}.achievements.items` | `experiences.${number}.clients.${number}.achievements.items` | `experiences.${number}.clients.${number}.links`
  label: string
  placeholder?: string
}) {
  const { fields, append, remove } = useFieldArray({ control, name: name as any })
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

// ---------- ClientItem sub-component ----------

function ClientItem({
  control,
  register,
  expIndex,
  clientIndex,
  onRemove,
}: {
  control: Control<ExperiencesFormData>
  register: UseFormRegister<ExperiencesFormData>
  expIndex: number
  clientIndex: number
  onRemove: () => void
}) {
  const [open, setOpen] = useState(false)
  const basePath = `experiences.${expIndex}.clients.${clientIndex}` as const

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-3 py-2 bg-white hover:bg-gray-50 text-left"
      >
        <span className="text-xs font-medium text-gray-600">Client {clientIndex + 1}</span>
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
        <div className="px-3 pb-3 flex flex-col gap-3 border-t border-gray-100">
          <div className="grid grid-cols-2 gap-2 mt-3">
            <Field label="Nom">
              <input className={inputCls} {...register(`${basePath}.name` as any)} />
            </Field>
            <Field label="Période">
              <input className={inputCls} {...register(`${basePath}.date` as any)} />
            </Field>
          </div>
          <Field label="Description">
            <textarea className={textareaCls} rows={2} {...register(`${basePath}.description` as any)} />
          </Field>
          <StringItemsList
            control={control}
            register={register}
            name={`experiences.${expIndex}.clients.${clientIndex}.links`}
            label="Liens"
            placeholder="site.fr"
          />
          <StringItemsList
            control={control}
            register={register}
            name={`experiences.${expIndex}.clients.${clientIndex}.achievements.items`}
            label="Réalisations"
          />
        </div>
      )}
    </div>
  )
}

// ---------- ExperienceItem sub-component ----------

function ExperienceItem({
  control,
  register,
  index,
  onRemove,
}: {
  control: Control<ExperiencesFormData>
  register: UseFormRegister<ExperiencesFormData>
  index: number
  onRemove: () => void
}) {
  const [open, setOpen] = useState(index === 0)
  const { fields: clientFields, append: appendClient, remove: removeClient } = useFieldArray({
    control,
    name: `experiences.${index}.clients`,
  })

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-3 py-2.5 bg-white hover:bg-gray-50 text-left"
      >
        <span className="text-xs font-semibold text-gray-700">Expérience {index + 1}</span>
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
          <div className="grid grid-cols-2 gap-2">
            <Field label="Poste">
              <input className={inputCls} {...register(`experiences.${index}.job`)} />
            </Field>
            <Field label="Entreprise">
              <input className={inputCls} {...register(`experiences.${index}.company`)} />
            </Field>
          </div>
          <Field label="Période">
            <input className={inputCls} {...register(`experiences.${index}.date`)} />
          </Field>
          <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
            <input type="checkbox" className="rounded" {...register(`experiences.${index}.current`)} />
            Poste actuel
          </label>
          <Field label="Description">
            <textarea className={textareaCls} rows={2} {...register(`experiences.${index}.description`)} />
          </Field>
          <StringItemsList
            control={control}
            register={register}
            name={`experiences.${index}.achievements.items`}
            label="Réalisations"
          />
          <Field label="Clients">
            <div className="flex flex-col gap-2">
              {clientFields.map((field, ci) => (
                <ClientItem
                  key={field.id}
                  control={control}
                  register={register}
                  expIndex={index}
                  clientIndex={ci}
                  onRemove={() => removeClient(ci)}
                />
              ))}
              <AddButton
                label="Ajouter un client"
                onClick={() => appendClient({
                  name: "", date: "", description: "", links: [],
                  achievements: { title: "Réalisations", items: [] },
                })}
              />
            </div>
          </Field>
        </div>
      )}
    </div>
  )
}

// ---------- Main form ----------

export function FormExperiences() {
  const patchResume = useResumeStore(s => s.patchResume)
  const form = useForm<ExperiencesFormData>({
    defaultValues: {
      experiences: useResumeStore.getState().resume.experiences.map(toExperienceForm),
    },
    mode: "onChange",
  })
  const { register, control, watch } = form
  const { fields, append, remove } = useFieldArray({ control, name: "experiences" })

  useEffect(() => {
    const { unsubscribe } = watch((values) => {
      const experiences = (values.experiences ?? []).map(e => fromExperienceForm(e as ExperienceFormData))
      patchResume({ experiences })
    })
    return unsubscribe
  }, [watch, patchResume])

  return (
    <>
      <SectionTitle title="Expériences" />
      <SectionBody>
        <div className="flex flex-col gap-3">
          {fields.map((field, i) => (
            <ExperienceItem
              key={field.id}
              control={control}
              register={register}
              index={i}
              onRemove={() => remove(i)}
            />
          ))}
          <AddButton
            label="Ajouter une expérience"
            onClick={() => append({
              job: "", company: "", date: "", current: false, description: "", link: "",
              achievements: { title: "Réalisations", items: [] },
              clients: [],
            })}
          />
        </div>
      </SectionBody>
    </>
  )
}
