import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import { SectionReveal } from '@/components/ui-custom/SectionReveal';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Veuillez entrer une adresse email valide');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Message envoyé avec succès !');

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contact@fostergrowthec.com', href: 'mailto:contact@fostergrowthec.com' },
    { icon: Phone, label: 'Téléphone', value: '+212 6 58 06 04 60', href: 'tel:+212658060460' },
    { icon: MapPin, label: 'Adresse', value: 'casablanca, maroc', href: '#' },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0f0f10]" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#5b9c00]/[0.06] to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionReveal>
            <span className="inline-block px-4 py-2 rounded-full bg-[#5b9c00]/10 border border-[#5b9c00]/20 text-[#5b9c00] text-sm font-medium mb-6">
              Contact
            </span>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Parlons de votre <span className="gradient-text">projet</span>
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="text-lg text-white/60">
              Prêt à démarrer votre transformation digitale ? Contactez-nous et discutons de vos
              objectifs.
            </p>
          </SectionReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Contact Info */}
          <SectionReveal delay={0.3}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Nos coordonnées</h3>
              <p className="text-white/60 mb-8">
                Nous sommes à votre écoute pour répondre à toutes vos questions et vous accompagner
                dans vos projets.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#333333]/20 border border-white/5 hover:border-[#5b9c00]/30 transition-colors group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#5b9c00]/10 flex items-center justify-center group-hover:bg-[#5b9c00]/20 transition-colors">
                      <item.icon className="w-5 h-5 text-[#5b9c00]" />
                    </div>
                    <div>
                      <div className="text-white/50 text-sm">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability */}
              <div className="mt-8 p-4 rounded-xl bg-[#5b9c00]/10 border border-[#5b9c00]/20">
                <div className="flex items-center gap-2 text-[#5b9c00] mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#5b9c00] animate-pulse" />
                  <span className="font-medium">Disponible maintenant</span>
                </div>
                <p className="text-white/60 text-sm">Nous répondons généralement sous 24h ouvrées.</p>
              </div>
            </div>
          </SectionReveal>

          {/* Contact Form */}
          <SectionReveal delay={0.4}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 hover:border-[#5b9c00]/30 transition-colors duration-300">
              <h3 className="text-xl font-bold text-white mb-6">Envoyez-nous un message</h3>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nom"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#5b9c00]/50 focus:ring-2 focus:ring-[#5b9c00]/20 transition-all"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                    Adresse email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@exemple.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#5b9c00]/50 focus:ring-2 focus:ring-[#5b9c00]/20 transition-all"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Parlez-nous de votre projet..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#5b9c00]/50 focus:ring-2 focus:ring-[#5b9c00]/20 transition-all resize-none"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    isSubmitted
                      ? 'bg-[#5b9c00] text-white'
                      : 'bg-gradient-to-r from-[#5b9c00] to-[#406b00] text-white hover:shadow-glow'
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
                  whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Message envoyé !
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}