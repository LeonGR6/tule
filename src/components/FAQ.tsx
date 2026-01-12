import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    { question: t('faq1.q'), answer: t('faq1.a') },
    { question: t('faq2.q'), answer: t('faq2.a') },
    { question: t('faq3.q'), answer: t('faq3.a') },
    { question: t('faq4.q'), answer: t('faq4.a') },
    { question: t('faq5.q'), answer: t('faq5.a') },
  ];

  return (
    <section id="faq" className="section-padding bg-cream dark:bg-secondary/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('faq.subtitle')}
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
