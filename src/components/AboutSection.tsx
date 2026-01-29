import { Target, Eye, Heart } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Misión',
      description:
        'Servicios personalizados y de calidad. Brindar tranquilidad y confianza en cada etapa del proceso.',
    },
    {
      icon: Eye,
      title: 'Visión',
      description:
        'Consolidarnos como una marca que transforma, crea y convierte cada celebración en momentos únicos.',
    },
    {
      icon: Heart,
      title: 'Valores',
      description:
        'Pasión por lo que hacemos, honestidad, creatividad sin límites y compromiso total con nuestros clientes.',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Who We Are */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-gold mb-4">
            Quiénes Somos
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Tulé Event Designers
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Somos una empresa especializada en la organización de eventos.
            Nuestro equipo está conformado por personas capacitadas, comprometidas,
            que trabajan con pasión en los detalles.

          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
           Cada proyecto es una oportunidad para superar nuestras
           expectativas, transformar ideas en experiencias memorables
           y recuerdos que se quedan para siempre.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-8 bg-cream dark:bg-secondary/30 rounded-sm"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-gold/30">
                <value.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-medium mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
