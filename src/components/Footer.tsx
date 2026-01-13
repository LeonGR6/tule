import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="font-display text-3xl font-semibold tracking-wide">
                TULE
              </span>
              <span className="block text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mt-1">
                Event Designers
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Transformamos tus sueños en experiencias inolvidables. Cada detalle cuenta.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-6 text-gold">
              Contacto
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:tule.eventdesigners@gmail.com"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                tule.eventdesigners@gmail.com
              </a>
              <a
                href="tel:+524491234567"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                +52 449 123 4567
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Aguascalientes, México</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-6 text-gold">
              Redes Sociales
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} TULE Event Designers. Todos los derechos reservados.
          </p>
          <p className="text-xs text-primary-foreground/50">
            Diseñado con ♥ en México
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;