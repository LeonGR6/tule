import { Star, Clock, Palette } from 'lucide-react';

const ServicesIntro = () => {
  const features = [
    {
      icon: Palette,
      title: 'Diseño Personalizado',
      description: 'Creamos conceptos únicos que reflejan tu estilo y personalidad.',
    },
    {
      icon: Clock,
      title: 'Coordinación Integral',
      description: 'Gestionamos cada parte de tu evento de principio a fin.',
    },
    {
      icon: Star,
      title: 'Atención al Detalle',
      description: 'Cuidamos cada detalle como si fuera nuestro.',
    },
  ];

  return (
    <section className="section-padding bg-cream dark:bg-secondary/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-gold mb-4">
              Nuestro Enfoque
            </p>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Eventos creados con pasión.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8 text-justify">
              En Tulé, entendemos que cada celebración es única. Por eso, 
              nos dedicamos a escuchar tus ideas y transformarlas en eventos unicos 
              que superan todas las expectativas.
            </p>

            <p className="text-muted-foreground leading-relaxed text-justify">
              Desde la conceptualización hasta el último detalle, 
              nuestro equipo de expertos trabaja contigo para asegurar que tu evento 
              sea exactamente como lo imaginaste.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-5 p-6 bg-background rounded-sm hover-lift"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-gold/30">
                  <feature.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesIntro;
