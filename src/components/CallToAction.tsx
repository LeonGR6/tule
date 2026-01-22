import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-20 bg-cream dark:bg-secondary/30">
      <div className="container-narrow text-center">
        <Sparkles className="w-8 h-8 text-gold mx-auto mb-4" />
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-light mb-4">
          ¿Listo para crear el evento de tus sueños?
        </h3>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          
        </p>
        <br></br>
        
        <Button variant="hero" size="lg" asChild>
          <a href="/contact">Solicitar Cotización</a>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
