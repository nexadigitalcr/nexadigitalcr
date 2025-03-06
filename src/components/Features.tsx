
import { Card } from "@/components/ui/card";
import { Zap, Palette, Rocket } from "lucide-react";

const Features = () => {
  const features = [{
    icon: <Zap className="w-6 h-6 text-purple-400" />,
    title: "Nexus AI Solutions",
    description: "Soluciones con Inteligencia Artificial avanzada para revolucionar tu negocio"
  }, {
    icon: <Palette className="w-6 h-6 text-pink-400" />,
    title: "Diseño Web",
    description: "Diseño Web Personalizado que transformara tu presencia digital"
  }, {
    icon: <Rocket className="w-6 h-6 text-blue-400" />,
    title: "Emprendedores Turísticos",
    description: "¿Tienes una idea y no sabes por dónde empezar? Te ayudamos a convertirla en realidad."
  }];

  return <div className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-bold text-white text-6xl">Nuestros Servicios</h2>
            <p className="text-xl text-white/60">Fusionamos Inteligencia Artificial y nuestra experiencia en turismo para desarrollar soluciones innovadoras</p>
          </div>
          <div className="grid gap-6">
            {features.map((feature, index) => <Card key={index} className="p-6 hover-lift glass-effect flex items-start gap-4 group transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-black/80 flex items-center justify-center group-hover:scale-110 transition-all">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              </Card>)}
          </div>
        </div>
      </div>
    </div>;
};

export default Features;
