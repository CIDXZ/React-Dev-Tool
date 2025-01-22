"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const DemoElements: React.FC = () => {
  const [switchChecked, setSwitchChecked] = useState(false)
  const [sliderValue, setSliderValue] = useState(50)

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Demo Elements</h2>

      <div className="space-y-2">
        <Label htmlFor="demo-input">Input Field</Label>
        <Input id="demo-input" placeholder="Type something..." className="w-full" />
      </div>

      <div className="flex items-center space-x-2">
        <Switch id="demo-switch" checked={switchChecked} onCheckedChange={setSwitchChecked} />
        <Label htmlFor="demo-switch">Toggle Switch</Label>
      </div>

      <div className="space-y-2">
        <Label htmlFor="demo-slider">Slider: {sliderValue}</Label>
        <Slider
          id="demo-slider"
          min={0}
          max={100}
          step={1}
          value={[sliderValue]}
          onValueChange={(value) => setSliderValue(value[0])}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="demo-select">Select Option</Label>
        <Select>
          <SelectTrigger id="demo-select">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-x-2">
        <Button variant="default">Default Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
      </div>

      <div className="p-4 bg-blue-100 rounded-md">
        <p className="text-blue-800 font-medium">This is a nested element with different background color.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-green-100 rounded-md">
          <p className="text-green-800">Grid Item 1</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded-md">
          <p className="text-yellow-800">Grid Item 2</p>
        </div>
      </div>
    </div>
  )
}

export default DemoElements

