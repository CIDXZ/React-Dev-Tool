import Inspector from "../components/Inspector"
import ComponentTree from "../components/ComponentTree"
import TailwindEditor from "../components/TailwindEditor"
import VisualOverlay from "../components/VisualOverlay"
import DemoElements from "../components/DemoElements"

export default function Home() {
  return (
    <main className="flex h-screen">
      <Inspector>
        {({ containerRef }) => (
          <div ref={containerRef} className="w-1/2 p-4 border-r overflow-auto">
            <h2 className="text-2xl font-bold mb-4">Interactable Area</h2>
            <p className="mb-4">Hover over and click elements below to inspect and edit.</p>
            <DemoElements />
          </div>
        )}
      </Inspector>
      <div className="w-1/2 flex flex-col">
        <div className="h-1/2 p-4 border-b overflow-auto">
          <ComponentTree />
        </div>
        <div className="h-1/2 p-4 overflow-auto">
          <TailwindEditor />
        </div>
      </div>
      <VisualOverlay />
    </main>
  )
}

