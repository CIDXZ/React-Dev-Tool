"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useInspectorStore } from "../store/useInspectorStore"

const VisualOverlay: React.FC = () => {
  const { selectedElement } = useInspectorStore()
  const [overlay, setOverlay] = useState<{ top: number; left: number; width: number; height: number }>()

  useEffect(() => {
    if (selectedElement) {
      const rect = selectedElement.getBoundingClientRect()
      setOverlay({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height,
      })
    } else {
      setOverlay(undefined)
    }
  }, [selectedElement])

  if (!overlay) return null

  return (
    <div
      style={{
        position: "absolute",
        top: overlay.top,
        left: overlay.left,
        width: overlay.width,
        height: overlay.height,
        border: "2px solid #3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  )
}

export default VisualOverlay

