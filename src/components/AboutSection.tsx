import { Target, Eye, Heart } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Nuestra Misión',
      description:
        'Crear eventos únicos e inolvidables que superen las expectativas de nuestros clientes, cuidando cada detalle con profesionalismo y dedicación.',
    },
    {
      icon: Eye,
      title: 'Nuestra Visión',
      description:
        'Ser la empresa líder en diseño de eventos en Aguascalientes, reconocida por nuestra creatividad, excelencia y compromiso con la satisfacción del cliente.',
    },
    {
      icon: Heart,
      title: 'Nuestros Valores',
      description:
        'Pasión por lo que hacemos, honestidad en cada paso, creatividad sin límites y compromiso total con la felicidad de nuestros clientes.',
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
            Tule Event Designers
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Somos un equipo apasionado de diseñadores y coordinadores de eventos 
            con más de una década de experiencia creando celebraciones memorables 
            en Aguascalientes y sus alrededores.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Nuestro nombre "Tule" representa la elegancia natural y la tradición mexicana, 
            valores que infundimos en cada proyecto. Creemos que cada evento merece ser 
            una obra de arte personalizada, un reflejo auténtico de quienes lo celebran.
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
