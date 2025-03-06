
import { Button } from "@/components/ui/button";
import { MessageSquare, Sparkle } from "lucide-react";

const Download = () => {
  return <div className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <div className="mx-auto w-fit mb-6">
            <span className="inline-block px-4 py-1 rounded-full border border-purple-500/30 text-purple-400 text-sm font-medium">
              ✨ Transforma tu negocio turístico
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-white">¿Listo para llevar tu negocio al siguiente nivel?</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">El futuro del turismo está en tus manos. En Nexa Digital, hacemos que la innovación sea parte de tu éxito. Construyamos algo extraordinario juntos. </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90 flex items-center gap-2 shadow-lg shadow-purple-700/20">
              <MessageSquare className="w-5 h-5" />
              Contáctanos
            </Button>
            <Button className="px-8 py-6 text-lg glass-effect hover:bg-white/10 flex items-center gap-2 border border-purple-500/30">
              <Sparkle className="w-5 h-5 text-purple-400" />
              Asistente AI
            </Button>
          </div>
        </div>
      </div>
    </div>;
};

export default Download;
