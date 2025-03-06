
import { Facebook, Twitter, Linkedin, MapPin, Mail, Phone, Github } from "lucide-react";

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
              <div className="gradient-button w-10 h-10 flex items-center justify-center rounded-full hover-lift">
                <Twitter className="w-5 h-5 text-white" />
              </div>
              <div className="gradient-button w-10 h-10 flex items-center justify-center rounded-full hover-lift">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div className="gradient-button-variant w-10 h-10 flex items-center justify-center rounded-full hover-lift">
                <Github className="w-5 h-5 text-white" />
              </div>
              <div className="gradient-button-variant w-10 h-10 flex items-center justify-center rounded-full hover-lift">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-purple-400 transition-colors">Términos</a></li>
              <li><a href="#" className="text-white/60 hover:text-purple-400 transition-colors">Privacidad</a></li>
              <li><a href="#" className="text-white/60 hover:text-purple-400 transition-colors">Cookies</a></li>
            </ul>
          </div>
          
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold text-white">Contáctanos</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/60 justify-center md:justify-start hover:text-purple-400 transition-colors group">
                <div className="gradient-button-variant w-6 h-6 flex items-center justify-center rounded-full">
                  <MapPin className="w-3 h-3 text-white" />
                </div>
                <span>San José, Costa Rica</span>
              </li>
              <li className="flex items-center gap-2 text-white/60 justify-center md:justify-start group">
                <div className="gradient-button w-6 h-6 flex items-center justify-center rounded-full">
                  <Mail className="w-3 h-3 text-white" />
                </div>
                <a href="mailto:info@nexadigitalcr.com" className="hover:text-purple-400 transition-colors">info@nexadigitalcr.com</a>
              </li>
              <li className="flex items-center gap-2 text-white/60 justify-center md:justify-start group">
                <div className="gradient-button w-6 h-6 flex items-center justify-center rounded-full">
                  <Phone className="w-3 h-3 text-white" />
                </div>
                <a href="tel:+50687823154" className="hover:text-purple-400 transition-colors">+506 8782-3154</a>
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
