import { Sparkles, Users, Award, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Benefits = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Sparkles,
      title: t('benefit1.title'),
      description: t('benefit1.desc'),
    },
    {
      icon: Users,
      title: t('benefit2.title'),
      description: t('benefit2.desc'),
    },
    {
      icon: Award,
      title: t('benefit3.title'),
      description: t('benefit3.desc'),
    },
    {
      icon: Heart,
      title: t('benefit4.title'),
      description: t('benefit4.desc'),
    },
  ];

  return (
    <section id="about" className="section-padding bg-cream dark:bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            {t('benefits.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('benefits.subtitle')}
          </p>
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
