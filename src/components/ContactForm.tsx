import { useState } from 'react';
import { Send, CheckCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const contactSchema = z.object({
    name: z.string().trim().min(1, 'El nombre es requerido').max(100, 'El nombre es muy largo'),
    email: z.string().trim().email('Correo electrónico inválido').max(255, 'El correo es muy largo'),
    phone: z.string().trim().min(1, 'El teléfono es requerido').max(20, 'El teléfono es muy largo'),
    message: z.string().trim().min(1, 'El mensaje es requerido').max(1000, 'El mensaje es muy largo'),
  });

  const WHATSAPP_NUMBER = '5214494673626';
  const INSTAGRAM_USER = 'tule.eventdesigners';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }
    return true;
  };

  const handleEmailSubmit = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      const subject = encodeURIComponent(`Nueva Cotización de ${formData.name}`);
      const body = encodeURIComponent(
        `Nombre: ${formData.name}\nCorreo: ${formData.email}\nTeléfono: ${formData.phone}\n\nMensaje:\n${formData.message}`
      );
      
      window.location.href = `mailto:tule.eventdesigners@gmail.com?subject=${subject}&body=${body}`;
      
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

  const handleWhatsAppSubmit = () => {
    if (!validateForm()) return;
    
    const message = encodeURIComponent(
      `¡Hola! Me gustaría solicitar una cotización.\n\n` +
      `*Nombre:* ${formData.name}\n` +
      `*Correo:* ${formData.email}\n` +
      `*Teléfono:* ${formData.phone}\n\n` +
      `*Mensaje:*\n${formData.message}`
    );
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    
    toast({
      title: 'Abriendo WhatsApp',
      description: 'Te redirigimos a WhatsApp para enviar tu mensaje.',
    });
  };

  const handleInstagramSubmit = () => {
    if (!validateForm()) return;
    
    // Copy message to clipboard
    const message = 
      `¡Hola! Me gustaría solicitar una cotización.\n\n` +
      `Nombre: ${formData.name}\n` +
      `Correo: ${formData.email}\n` +
      `Teléfono: ${formData.phone}\n\n` +
      `Mensaje:\n${formData.message}`;
    
    navigator.clipboard.writeText(message).then(() => {
      toast({
        title: 'Mensaje copiado',
        description: 'Pega el mensaje en el chat de Instagram.',
      });
    });
    
    window.open(`https://instagram.com/${INSTAGRAM_USER}`, '_blank');
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
              onClick={() => {
                setIsSuccess(false);
                setFormData({ name: '', email: '', phone: '', message: '' });
              }}
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
            Cuéntanos sobre tu evento y elige cómo quieres comunicarte con nosotros
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <Input
                name="name"
                type="text"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleInputChange}
                className={`h-14 border-border/50 focus:border-gold bg-transparent font-body ${errors.name ? 'border-destructive' : ''}`}
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <Input
                name="phone"
                type="tel"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleInputChange}
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
              value={formData.email}
              onChange={handleInputChange}
              className={`h-14 border-border/50 focus:border-gold bg-transparent font-body ${errors.email ? 'border-destructive' : ''}`}
            />
            {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <Textarea
              name="message"
              placeholder="Cuéntanos sobre tu evento..."
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              className={`border-border/50 focus:border-gold bg-transparent resize-none font-body ${errors.message ? 'border-destructive' : ''}`}
            />
            {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
          </div>
          
          {/* Send Options */}
          <div className="space-y-4">
            <p className="text-center text-sm text-muted-foreground">
              Elige cómo enviar tu mensaje:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                type="button"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
                onClick={handleEmailSubmit}
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Correo
                  </>
                )}
              </Button>
              
              <Button
                type="button"
                variant="heroOutline"
                size="lg"
                className="w-full text-green-600 border-green-600 hover:bg-green-600 hover:text-white dark:text-green-500 dark:border-green-500 dark:hover:bg-green-600 dark:hover:text-white"
                onClick={handleWhatsAppSubmit}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
