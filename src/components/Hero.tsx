import { MessageSquare, Sparkles } from "lucide-react";
import { SplineSceneBasic } from "@/components/ui/code.demo";
import { GradientButton } from "@/components/ui/gradient-button";
const Hero = () => {
  return <div className="min-h-screen relative">
      {/* 3D Scene as background */}
      <div className="absolute inset-0 w-full h-full">
        <SplineSceneBasic />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-0">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 mx-0 px-0 py-[75px]">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Nexa Digital
            </h1>
            <p className="text-lg text-white/80 max-w-xl">
              El turismo está evolucionando. En Nexa Digital creamos soluciones con inteligencia artificial y diseño web personalizado para llevar tu negocio al siguiente nivel. ¿Tienes una idea y no sabes por dónde empezar? Te ayudamos a convertirla en realidad.
            </p>
            <div className="flex gap-4 flex-wrap">
              <GradientButton className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Consulta Gratis
              </GradientButton>
              <GradientButton variant="variant" className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Asistente AI
              </GradientButton>
            </div>
            
            <div className="flex justify-center pt-10">
              <div className="animate-float w-24 h-24 transition-all duration-500 hover:scale-110">
                
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            {/* This div is just to maintain the grid layout */}
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;