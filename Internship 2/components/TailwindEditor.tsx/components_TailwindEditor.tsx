"use client"

import type React from "react"
import { useEffect } from "react"
import { useInspectorStore } from "../store/useInspectorStore"

const TailwindEditor: React.FC = () => {
  const {
    selectedElement,
    tailwindClasses,
    parsedTailwindProperties,
    setTailwindClasses,
    setParsedTailwindProperties,
    updateTailwindProperty,
  } = useInspectorStore()

  useEffect(() => {
    if (tailwindClasses) {
      const properties = tailwindClasses.split(" ").map((cls) => ({
        property: cls,
        value: cls,
        isOverridden: false,
      }))
      setParsedTailwindProperties(properties)
    }
  }, [tailwindClasses, setParsedTailwindProperties])

  const handlePropertyChange = (index: number, value: string) => {
    updateTailwindProperty(index, value)
  }

  const applyClasses = () => {
    if (selectedElement) {
      const newClasses = parsedTailwindProperties.map((prop) => prop.value).join(" ")
      selectedElement.className = newClasses
      setTailwindClasses(newClasses)
    }
  }

  return (
    <div className="h-full overflow-auto">
      <h2 className="text-2xl font-bold mb-4">Tailwind Editor</h2>
      <div className="space-y-2">
        {parsedTailwindProperties.map((prop, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="text"
              className="flex-grow p-2 border rounded"
              value={prop.value}
              onChange={(e) => handlePropertyChange(index, e.target.value)}
            />
            {prop.isOverridden && <span className="text-red-500 line-through">{prop.property}</span>}
          </div>
        ))}
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={applyClasses}>
        Apply Classes
      </button>
    </div>
  )
}

export default TailwindEditor

