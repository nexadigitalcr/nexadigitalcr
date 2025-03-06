
'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <div className="w-full h-full relative">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      />
      <div className="relative z-0 w-full h-full">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full scale-125"
        />
      </div>
    </div>
  )
}
