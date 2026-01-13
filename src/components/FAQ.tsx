import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: '¿Con cuánta anticipación debo reservar?',
      answer: 'Recomendamos reservar con al menos 3-6 meses de anticipación para eventos grandes como bodas y XV años. Para eventos más pequeños, 1-2 meses suelen ser suficientes.',
    },
    {
      question: '¿Qué incluye el servicio de diseño de eventos?',
      answer: 'Incluye consulta inicial, diseño conceptual, coordinación de proveedores, montaje y desmontaje, supervisión el día del evento y todo lo necesario para que tu celebración sea perfecta.',
    },
    {
      question: '¿Trabajan solo en Aguascalientes?',
      answer: 'Principalmente trabajamos en Aguascalientes y zonas cercanas, pero también realizamos eventos en otros estados. Contáctanos para más información.',
    },
    {
      question: '¿Ofrecen paquetes personalizados?',
      answer: 'Sí, todos nuestros servicios son personalizados según tus necesidades y presupuesto. Cada evento es único y merece un enfoque personalizado.',
    },
    {
      question: '¿Cómo puedo solicitar una cotización?',
      answer: 'Puedes contactarnos a través del formulario en nuestra página, por correo electrónico o WhatsApp. Te responderemos en menos de 24 horas.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-cream dark:bg-secondary/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Resolvemos tus dudas más comunes
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border/50 px-6 data-[state=open]:border-gold/30"
            >
              <AccordionTrigger className="font-display text-lg text-left py-6 hover:no-underline hover:text-gold transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;