
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { SplineSceneBasic } from "@/components/ui/code.demo";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-0 bg-black/[0.96]">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Nexa Digital
          </h1>
          <p className="text-lg text-white/80 max-w-xl">
            El turismo está evolucionando. En Nexa Digital creamos soluciones con inteligencia artificial y diseño web personalizado para llevar tu negocio al siguiente nivel. ¿Tienes una idea y no sabes por dónde empezar? Te ayudamos a convertirla en realidad.
          </p>
          <Button className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90 flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download Application
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
        <div className="relative">
          <SplineSceneBasic />
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
