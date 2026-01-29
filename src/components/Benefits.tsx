import { Sparkles, Users, Award, Heart } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: 'Diseño Único',
      description: 'Cada evento es una obra de arte personalizada.',
    },
    {
      icon: Users,
      title: 'Experiencia',
      description: 'Más de 10 años creando eventos memorables en Aguascalientes.',
    },
    {
      icon: Award,
      title: 'Calidad Premium',
      description: 'Trabajamos con los mejores proveedores para garantizar excelencia.',
    },
    {
      icon: Heart,
      title: 'Dedicación Total',
      description: 'Tu evento es nuestra prioridad, cuidamos cada detalle.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-cream dark:bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            ¿Por Qué Elegirnos?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-background hover-lift rounded-sm"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-gold/30 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-500">
                <benefit.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl font-medium mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;