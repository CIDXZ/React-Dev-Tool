"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useInspectorStore } from "../store/useInspectorStore"

interface InspectorProps {
  children: ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) => React.ReactNode
}

const Inspector: React.FC<InspectorProps> = ({ children }) => {
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null)
  const { setSelectedElement, setSelectedComponent, setTailwindClasses } = useInspectorStore()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target && target !== hoveredElement && containerRef.current?.contains(target)) {
        setHoveredElement(target)
      }
    }

    const handleClick = (e: MouseEvent) => {
      e.preventDefault()
      const target = e.target as HTMLElement
      if (target && containerRef.current?.contains(target)) {
        setSelectedElement(target)
        setSelectedComponent(getReactFiberFromDOM(target))
        setTailwindClasses(target.className)
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("click", handleClick)
    }
  }, [hoveredElement, setSelectedElement, setSelectedComponent, setTailwindClasses])

  const getReactFiberFromDOM = (element: HTMLElement) => {
    // @ts-ignore
    return element[Object.keys(element).find((key) => key.startsWith("__reactFiber$"))]
  }

  return (
    <>
      {children({ containerRef })}
      {hoveredElement && containerRef.current?.contains(hoveredElement) && (
        <div className="fixed bottom-4 left-4 bg-white p-4 rounded shadow-lg z-50">
          <h3 className="text-lg font-semibold">Hovered Element:</h3>
          <p>Tag: {hoveredElement.tagName.toLowerCase()}</p>
          <p>Classes: {hoveredElement.className}</p>
        </div>
      )}
    </>
  )
}

export default Inspector

