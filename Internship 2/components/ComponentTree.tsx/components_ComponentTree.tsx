"use client"

import type React from "react"
import { useInspectorStore } from "../store/useInspectorStore"

const ComponentTree: React.FC = () => {
  const { selectedComponent } = useInspectorStore()

  const renderComponentTree = (component: any) => {
    if (!component) return null

    return (
      <div className="ml-4">
        <div className="font-semibold">{component.type?.name || component.type}</div>
        {component.props && Object.keys(component.props).length > 0 && (
          <div className="ml-4">
            {Object.entries(component.props).map(([key, value]) => (
              <div key={key}>
                <span className="font-medium">{key}: </span>
                {typeof value === "object" ? JSON.stringify(value) : String(value)}
              </div>
            ))}
          </div>
        )}
        {component.props?.children && (
          <div className="ml-4">
            {Array.isArray(component.props.children)
              ? component.props.children.map((child: any, index: number) => (
                  <div key={index}>{renderComponentTree(child)}</div>
                ))
              : renderComponentTree(component.props.children)}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="h-full overflow-auto">
      <h2 className="text-2xl font-bold mb-4">Component Tree</h2>
      {selectedComponent ? renderComponentTree(selectedComponent) : <p>No component selected</p>}
    </div>
  )
}

export default ComponentTree

