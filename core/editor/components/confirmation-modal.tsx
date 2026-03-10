"use client"
import { AlertTriangleIcon } from "lucide-react"

interface ConfirmationModalProps {
  isOpen: boolean
  onCancel: () => void
  onConfirm: () => void
  message?: string
}

export function ConfirmationModal({ isOpen, onCancel, onConfirm, message }: ConfirmationModalProps) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onCancel} />
      {/* Dialog */}
      <div className="relative bg-white rounded-xl shadow-xl p-6 max-w-sm w-full">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
            <AlertTriangleIcon className="w-4 h-4 text-orange-500" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">Modifications non sauvegardées</h3>
            <p className="text-sm text-gray-500">
              {message ?? "Vos modifications seront perdues. Continuer ?"}
            </p>
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-4 py-2 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Continuer
          </button>
        </div>
      </div>
    </div>
  )
}
