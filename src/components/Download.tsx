
import { GradientButton } from "@/components/ui/gradient-button";

const Download = () => {
  return (
    <div className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Transforma tu Negocio Digital
        </h2>
        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
          Potencia tu empresa turística con soluciones digitales innovadoras y personalizadas
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GradientButton onClick={() => window.location.href = 'https://wa.me/50689731340'}>
            Contáctanos
          </GradientButton>
          <GradientButton variant="variant" onClick={() => window.open('https://calendly.com/nexadigital/30min', '_blank')}>
            Agendar Llamada
          </GradientButton>
        </div>
      </div>
    </div>
  );
};

export default Download;
