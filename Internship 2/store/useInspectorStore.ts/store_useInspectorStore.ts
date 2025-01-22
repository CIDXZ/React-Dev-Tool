import { create } from "zustand"

type TailwindProperty = {
  property: string
  value: string
  isOverridden: boolean
}

type InspectorState = {
  selectedElement: HTMLElement | null
  selectedComponent: any
  tailwindClasses: string
  parsedTailwindProperties: TailwindProperty[]
  setSelectedElement: (element: HTMLElement | null) => void
  setSelectedComponent: (component: any) => void
  setTailwindClasses: (classes: string) => void
  setParsedTailwindProperties: (properties: TailwindProperty[]) => void
  updateTailwindProperty: (index: number, value: string) => void
}

export const useInspectorStore = create<InspectorState>((set) => ({
  selectedElement: null,
  selectedComponent: null,
  tailwindClasses: "",
  parsedTailwindProperties: [],
  setSelectedElement: (element) => set({ selectedElement: element }),
  setSelectedComponent: (component) => set({ selectedComponent: component }),
  setTailwindClasses: (classes) => set({ tailwindClasses: classes }),
  setParsedTailwindProperties: (properties) => set({ parsedTailwindProperties: properties }),
  updateTailwindProperty: (index, value) =>
    set((state) => {
      const updatedProperties = [...state.parsedTailwindProperties]
      updatedProperties[index] = { ...updatedProperties[index], value }
      return { parsedTailwindProperties: updatedProperties }
    }),
}))

