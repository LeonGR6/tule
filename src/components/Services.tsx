import { useLanguage } from '@/contexts/LanguageContext';
import serviceWedding from '@/assets/service-wedding.jpg';
import serviceQuince from '@/assets/service-quince.jpg';
import serviceBirthday from '@/assets/service-birthday.jpg';
import serviceBabyshower from '@/assets/service-babyshower.jpg';
import serviceSocial from '@/assets/service-social.jpg';
import serviceThemed from '@/assets/service-themed.jpg';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      image: serviceWedding,
      title: t('service1.title'),
      description: t('service1.desc'),
    },
    {
      image: serviceQuince,
      title: t('service2.title'),
      description: t('service2.desc'),
    },
    {
      image: serviceBirthday,
      title: t('service3.title'),
      description: t('service3.desc'),
    },
    {
      image: serviceBabyshower,
      title: t('service4.title'),
      description: t('service4.desc'),
    },
    {
      image: serviceSocial,
      title: t('service5.title'),
      description: t('service5.desc'),
    },
    {
      image: serviceThemed,
      title: t('service6.title'),
      description: t('service6.desc'),
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden aspect-[4/5] cursor-pointer"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
