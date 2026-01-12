import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.services': { es: 'Servicios', en: 'Services' },
  'nav.about': { es: 'Nosotros', en: 'About' },
  'nav.faq': { es: 'FAQ', en: 'FAQ' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  'nav.quote': { es: 'Cotizar', en: 'Get Quote' },

  // Hero
  'hero.subtitle': { 
    es: 'Diseño & Creación de Eventos', 
    en: 'Event Design & Creation' 
  },
  'hero.title': { 
    es: 'Transformamos tus sueños en momentos inolvidables', 
    en: 'We transform your dreams into unforgettable moments' 
  },
  'hero.description': { 
    es: 'Creamos experiencias únicas y memorables para ti y tus seres queridos. Cada detalle cuenta, cada momento importa.', 
    en: 'We create unique and memorable experiences for you and your loved ones. Every detail counts, every moment matters.' 
  },
  'hero.cta': { es: 'Solicita tu Cotización', en: 'Request Your Quote' },
  'hero.cta.secondary': { es: 'Ver Servicios', en: 'View Services' },

  // Benefits
  'benefits.title': { es: '¿Por qué elegirnos?', en: 'Why Choose Us?' },
  'benefits.subtitle': { 
    es: 'Tu evento perfecto, sin estrés ni complicaciones', 
    en: 'Your perfect event, stress-free and hassle-free' 
  },
  'benefit1.title': { es: 'Diseño Personalizado', en: 'Custom Design' },
  'benefit1.desc': { 
    es: 'Cada evento es único. Creamos conceptos a tu medida que reflejan tu personalidad y estilo.', 
    en: 'Every event is unique. We create tailored concepts that reflect your personality and style.' 
  },
  'benefit2.title': { es: 'Coordinación Integral', en: 'Full Coordination' },
  'benefit2.desc': { 
    es: 'Nos encargamos de cada detalle, desde la planificación hasta la ejecución, para que tú solo disfrutes.', 
    en: 'We take care of every detail, from planning to execution, so you just enjoy.' 
  },
  'benefit3.title': { es: 'Experiencia Profesional', en: 'Professional Experience' },
  'benefit3.desc': { 
    es: 'Años de experiencia creando eventos exitosos nos respaldan. Tu tranquilidad es nuestra prioridad.', 
    en: 'Years of experience creating successful events back us up. Your peace of mind is our priority.' 
  },
  'benefit4.title': { es: 'Proveedores de Calidad', en: 'Quality Vendors' },
  'benefit4.desc': { 
    es: 'Trabajamos con los mejores proveedores de la región para garantizar la excelencia en cada servicio.', 
    en: 'We work with the best vendors in the region to ensure excellence in every service.' 
  },

  // Services
  'services.title': { es: 'Nuestros Servicios', en: 'Our Services' },
  'services.subtitle': { 
    es: 'Soluciones completas para cada tipo de celebración', 
    en: 'Complete solutions for every type of celebration' 
  },
  'service1.title': { es: 'Bodas', en: 'Weddings' },
  'service1.desc': { 
    es: 'Diseñamos la boda de tus sueños con atención a cada detalle.', 
    en: 'We design your dream wedding with attention to every detail.' 
  },
  'service2.title': { es: 'XV Años', en: 'Quinceañera' },
  'service2.desc': { 
    es: 'Celebraciones mágicas para un día tan especial.', 
    en: 'Magical celebrations for such a special day.' 
  },
  'service3.title': { es: 'Cumpleaños', en: 'Birthdays' },
  'service3.desc': { 
    es: 'Fiestas únicas para todas las edades y estilos.', 
    en: 'Unique parties for all ages and styles.' 
  },
  'service4.title': { es: 'Baby Showers', en: 'Baby Showers' },
  'service4.desc': { 
    es: 'Momentos tiernos para celebrar una nueva vida.', 
    en: 'Tender moments to celebrate a new life.' 
  },
  'service5.title': { es: 'Eventos Sociales', en: 'Social Events' },
  'service5.desc': { 
    es: 'Reuniones, aniversarios y celebraciones especiales.', 
    en: 'Gatherings, anniversaries, and special celebrations.' 
  },
  'service6.title': { es: 'Decoración Temática', en: 'Themed Decor' },
  'service6.desc': { 
    es: 'Ambientación creativa que transforma espacios.', 
    en: 'Creative ambiance that transforms spaces.' 
  },

  // FAQ
  'faq.title': { es: 'Preguntas Frecuentes', en: 'Frequently Asked Questions' },
  'faq.subtitle': { 
    es: 'Resolvemos tus dudas', 
    en: 'We answer your questions' 
  },
  'faq1.q': { 
    es: '¿Con cuánta anticipación debo contactarlos?', 
    en: 'How far in advance should I contact you?' 
  },
  'faq1.a': { 
    es: 'Recomendamos contactarnos con al menos 3 a 6 meses de anticipación para eventos grandes como bodas o XV años. Para eventos más pequeños, 1-2 meses es suficiente.', 
    en: 'We recommend contacting us at least 3 to 6 months in advance for large events like weddings or quinceañeras. For smaller events, 1-2 months is sufficient.' 
  },
  'faq2.q': { 
    es: '¿Ofrecen paquetes o es personalizado?', 
    en: 'Do you offer packages or is it customized?' 
  },
  'faq2.a': { 
    es: 'Ofrecemos ambas opciones. Tenemos paquetes base que pueden adaptarse a tus necesidades, o podemos crear un plan completamente personalizado según tu visión y presupuesto.', 
    en: 'We offer both options. We have base packages that can be adapted to your needs, or we can create a completely customized plan according to your vision and budget.' 
  },
  'faq3.q': { 
    es: '¿Trabajan en ubicaciones fuera de Pabellón de Arteaga?', 
    en: 'Do you work in locations outside of Pabellón de Arteaga?' 
  },
  'faq3.a': { 
    es: 'Sí, trabajamos en Pabellón de Arteaga y zonas cercanas. Contáctanos para verificar disponibilidad en tu ubicación.', 
    en: 'Yes, we work in Pabellón de Arteaga and nearby areas. Contact us to verify availability in your location.' 
  },
  'faq4.q': { 
    es: '¿Qué incluye el servicio de coordinación?', 
    en: 'What does the coordination service include?' 
  },
  'faq4.a': { 
    es: 'Incluye planificación completa, selección de proveedores, diseño de concepto, cronograma del evento, supervisión el día del evento y resolución de cualquier imprevisto.', 
    en: 'It includes complete planning, vendor selection, concept design, event timeline, day-of supervision, and resolution of any unforeseen issues.' 
  },
  'faq5.q': { 
    es: '¿Cómo es el proceso de cotización?', 
    en: 'What is the quote process like?' 
  },
  'faq5.a': { 
    es: 'Completa nuestro formulario de contacto y nos comunicaremos contigo en menos de 24 horas. Agendaremos una llamada o reunión para conocer tus necesidades y enviarte una propuesta personalizada.', 
    en: 'Complete our contact form and we will get in touch within 24 hours. We will schedule a call or meeting to understand your needs and send you a personalized proposal.' 
  },

  // Contact Form
  'contact.title': { es: 'Solicita tu Cotización', en: 'Request Your Quote' },
  'contact.subtitle': { 
    es: 'Cuéntanos sobre tu evento ideal y te contactaremos pronto', 
    en: 'Tell us about your ideal event and we will contact you soon' 
  },
  'contact.name': { es: 'Nombre completo', en: 'Full name' },
  'contact.email': { es: 'Correo electrónico', en: 'Email address' },
  'contact.phone': { es: 'Teléfono', en: 'Phone number' },
  'contact.message': { es: 'Cuéntanos sobre tu evento...', en: 'Tell us about your event...' },
  'contact.submit': { es: 'Enviar Solicitud', en: 'Submit Request' },
  'contact.sending': { es: 'Enviando...', en: 'Sending...' },
  'contact.success.title': { es: '¡Mensaje Enviado!', en: 'Message Sent!' },
  'contact.success.desc': { 
    es: 'Hemos recibido tu solicitud. Te contactaremos a la brevedad al correo proporcionado.', 
    en: 'We have received your request. We will contact you shortly at the provided email.' 
  },

  // Footer
  'footer.tagline': { 
    es: 'Creando momentos que perduran para siempre', 
    en: 'Creating moments that last forever' 
  },
  'footer.contact': { es: 'Contacto', en: 'Contact' },
  'footer.social': { es: 'Síguenos', en: 'Follow Us' },
  'footer.rights': { es: 'Todos los derechos reservados', en: 'All rights reserved' },
  'footer.location': { es: 'Pabellón de Arteaga, Aguascalientes', en: 'Pabellón de Arteaga, Aguascalientes' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
