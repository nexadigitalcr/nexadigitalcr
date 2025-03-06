
import { Card } from "@/components/ui/card";
import { MessageSquare, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [{
    quote: "Nexa Digital nos ayudó a conectar con nuestros clientes de manera innovadora. Su experiencia en IA y desarrollo digital nos permitió modernizar nuestras operaciones y mejorar la experiencia de nuestros viajeros.",
    author: "Jose Mendez",
    role: "DMC Passport Adventure",
    url: "https://dmcpassportadventure.com/"
  }, {
    quote: "Gracias a Nexa Digital, logramos expandir nuestra visibilidad en el sector del turismo inclusivo. Su enfoque en estrategias digitales y tecnología nos ha permitido llegar a más personas y hacer del turismo una experiencia accesible para todos.",
    author: "Travel Advisor Costa Rica",
    role: "Turismo Inclusivo",
    url: "https://traveladvisor.com/"
  }, {
    quote: "La transformación digital que Nexa Digital nos brindó ha sido clave para nuestra empresa. Desde el diseño web hasta la automatización con IA, han llevado nuestro servicio a un nuevo nivel.",
    author: "Alonso Rodriguez",
    role: "Bravo Rent A Car",
    url: "https://bravorentacarcr.com/"
  }];

  return <div className="py-20 px-4 relative overflow-hidden">
    <div className="max-w-7xl mx-auto relative z-10">
      <h2 className="text-4xl font-bold text-white text-center mb-4">¿Qué dicen Nuestros Clientes?</h2>
      <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto">Empresas turísticas que han transformado su presencia digital con nuestras soluciones</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => <Card key={index} className="p-6 hover-lift glass-effect">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <p className="text-white/80 mb-4 italic">{testimonial.quote}</p>
          <div className="text-white font-semibold">{testimonial.author}</div>
          <div className="text-white/60 text-sm mb-4">{testimonial.role}</div>
          <a 
            href={testimonial.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
          >
            Visita el sitio <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Card>)}
      </div>
    </div>
  </div>;
};

export default Testimonials;
