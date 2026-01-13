import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactSchema = z.object({
    name: z.string().trim().min(1, 'El nombre es requerido').max(100, 'El nombre es muy largo'),
    email: z.string().trim().email('Correo electrónico inválido').max(255, 'El correo es muy largo'),
    phone: z.string().trim().min(1, 'El teléfono es requerido').max(20, 'El teléfono es muy largo'),
    message: z.string().trim().min(1, 'El mensaje es requerido').max(1000, 'El mensaje es muy largo'),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

    // Validate form data
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Nueva Cotización de ${data.name}`);
      const body = encodeURIComponent(
        `Nombre: ${data.name}\nCorreo: ${data.email}\nTeléfono: ${data.phone}\n\nMensaje:\n${data.message}`
      );
      
      // Open email client
      window.location.href = `mailto:tule.eventdesigners@gmail.com?subject=${subject}&body=${body}`;
      
      // Show success state
      setIsSuccess(true);
      toast({
        title: '¡Mensaje Enviado!',
        description: 'Te contactaremos pronto para discutir los detalles de tu evento.',
      });
    } catch {
      toast({
        title: 'Error',
        description: 'Hubo un problema al enviar el formulario.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="contact" className="section-padding">
        <div className="container-narrow">
          <div className="text-center py-16 bg-cream dark:bg-secondary/30 rounded-sm">
            <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
            <h3 className="font-display text-3xl mb-4">¡Mensaje Enviado!</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Te contactaremos pronto para discutir los detalles de tu evento.
            </p>
            <Button
              variant="heroOutline"
              size="lg"
              className="mt-8"
              onClick={() => setIsSuccess(false)}
            >
              Enviar otro mensaje
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            Contáctanos
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Cuéntanos sobre tu evento y te ayudaremos a hacerlo realidad
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <Input
                name="name"
                type="text"
                placeholder="Tu nombre"
                className={`h-14 border-border/50 focus:border-gold bg-transparent font-body ${errors.name ? 'border-destructive' : ''}`}
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <Input
                name="phone"
                type="tel"
                placeholder="Teléfono"
                className={`h-14 border-border/50 focus:border-gold bg-transparent font-body ${errors.phone ? 'border-destructive' : ''}`}
              />
              {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>
          
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              className={`h-14 border-border/50 focus:border-gold bg-transparent font-body ${errors.email ? 'border-destructive' : ''}`}
            />
            {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <Textarea
              name="message"
              placeholder="Cuéntanos sobre tu evento..."
              rows={5}
              className={`border-border/50 focus:border-gold bg-transparent resize-none font-body ${errors.message ? 'border-destructive' : ''}`}
            />
            {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
          </div>
          
          <Button
            type="submit"
            variant="hero"
            size="xl"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              'Enviando...'
            ) : (
              <>
                Enviar Mensaje
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;