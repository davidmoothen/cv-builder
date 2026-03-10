"use client"
import Link from "next/link"
import { useTracking } from "@/core/hooks/useTracking"

interface CtaButtonProps {
  children: React.ReactNode
  className?: string
}

export function CtaButton({ children, className }: CtaButtonProps) {
  const { track } = useTracking()
  return (
    <Link
      href="/editor"
      className={className}
      onClick={() => track("editor-opened")}
    >
      {children}
    </Link>
  )
}
