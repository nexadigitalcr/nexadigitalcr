
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { SplineSceneBasic } from "@/components/ui/code.demo";

const Hero = () => {
  return (
    <div className="min-h-screen relative">
      {/* 3D Scene as background */}
      <div className="absolute inset-0 w-full h-full">
        <SplineSceneBasic />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-0">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Nexa Digital
            </h1>
            <p className="text-lg text-white/80 max-w-xl">
              El turismo está evolucionando. En Nexa Digital creamos soluciones con inteligencia artificial y diseño web personalizado para llevar tu negocio al siguiente nivel. ¿Tienes una idea y no sabes por dónde empezar? Te ayudamos a convertirla en realidad.
            </p>
            <Button className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Consulta Gratis
            </Button>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-white">5000+</div>
                <div className="text-white/60">Active users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">30.3k</div>
                <div className="text-white/60">Download</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">1200+</div>
                <div className="text-white/60">Reviews</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            {/* This div is just to maintain the grid layout */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
