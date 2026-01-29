import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-event.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Elegant event table setting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60 dark:bg-background/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow text-center px-6 py-32">
        {/* Subtitle */}
        <p className="animate-fade-up opacity-0 stagger-1 text-xs md:text-sm uppercase tracking-[0.3em] text-gold mb-6">
          Diseño de Eventos Exclusivos
        </p>

        {/* Main Title */}
        <h1 className="animate-fade-up opacity-0 stagger-2 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-balance">
          "Los eventos son efimeros, las emociones perduran"
        </h1>

        {/* Description */}
        <div className="flex justify-center max-w-2xl mx-auto mb-12">
    <p className="animate-fade-up opacity-0 stagger-3 text-lg md:text-xl text-muted-foreground leading-relaxed whitespace-nowrap">
    Transformamos tus sueños en experiencias inolvidables.
    </p>
        </div>

        {/* CTAs */}
        <div className="animate-fade-up opacity-0 stagger-4 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="/contact">Solicitar Cotización</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="/services">Ver Servicios</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="/about" className="text-foreground/50 hover:text-foreground transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;