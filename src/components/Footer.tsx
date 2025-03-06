
import { Facebook, Twitter, Linkedin, MapPin, Mail, Phone, Github } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">Nexa Digital</h3>
            <p className="text-white/60">
              Transformamos el turismo con inteligencia artificial y diseño digital para crear experiencias innovadoras.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Términos</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
          
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold text-white">Contáctanos</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/60 justify-center md:justify-start">
                <MapPin className="w-4 h-4" />
                <span>San José, Costa Rica</span>
              </li>
              <li className="flex items-center gap-2 text-white/60 justify-center md:justify-start">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@nexadigitalcr.com" className="hover:text-white transition-colors">info@nexadigitalcr.com</a>
              </li>
              <li className="flex items-center gap-2 text-white/60 justify-center md:justify-start">
                <Phone className="w-4 h-4" />
                <a href="tel:+50687823154" className="hover:text-white transition-colors">+506 8782-3154</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/60">
            © 2024 Nexa Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
