import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle2, Loader2, MessageSquare, Calendar, Sparkles } from 'lucide-react';
import { SectionReveal } from '@/components/ui-custom/SectionReveal';
import { toast } from 'sonner';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Veuillez remplir tous les champs obligatoires');
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
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'contact@fostergrowthec.ma', 
      href: 'mailto:contact@fostergrowthec.ma',
      description: 'Réponse sous 24h'
    },
    { 
      icon: Phone, 
      label: 'Téléphone', 
      value: '+212 6 58 06 04 60', 
      href: 'tel:+212658060460',
      description: 'Lun-Ven, 9h-18h'
    },
    { 
      icon: MapPin, 
      label: 'Adresse', 
      value: '456 Boulevard de la Corniche, 20000 Casablanca', 
      href: '#',
      description: 'Visite sur rendez-vous'
    },
    { 
      icon: Clock, 
      label: 'Horaires', 
      value: 'Lun-Ven: 9h - 18h', 
      href: '#',
      description: 'Support 24/7 pour les clients'
    },
  ];

  const subjects = [
    'Demande de devis',
    'Information sur les services',
    'Partenariat',
    'Carrières',
    'Autre',
  ];

  return (
    <div className="min-h-screen bg-charcoal-950">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Contact
              </span>
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Parlons de votre <span className="gradient-text">projet</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-white/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Prêt à démarrer votre transformation digitale ? Nous sommes là pour vous accompagner.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-12 relative">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="p-6 rounded-2xl bg-charcoal-900/50 border border-white/5 hover:border-emerald-500/30 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="text-white/50 text-sm mb-1">{item.label}</div>
                <div className="text-white font-medium mb-1">{item.value}</div>
                <div className="text-white/40 text-xs">{item.description}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Left - Info */}
            <div className="lg:col-span-2">
              <SectionReveal>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Pourquoi nous contacter ?
                </h2>
              </SectionReveal>
              
              <SectionReveal delay={0.1}>
                <p className="text-white/60 mb-8">
                  Que vous ayez un projet précis en tête ou simplement envie d'échanger 
                  sur vos objectifs digitaux, notre équipe est à votre écoute.
                </p>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Consultation gratuite</h4>
                      <p className="text-white/50 text-sm">30 minutes pour discuter de vos besoins</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Réponse rapide</h4>
                      <p className="text-white/50 text-sm">Nous répondons sous 24h ouvrées</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              {/* Availability */}
              <SectionReveal delay={0.3}>
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="flex items-center gap-2 text-emerald-400 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-medium">Disponible maintenant</span>
                  </div>
                  <p className="text-white/60 text-sm">
                    Notre équipe est disponible pour répondre à vos questions.
                  </p>
                </div>
              </SectionReveal>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <SectionReveal delay={0.2}>
                <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                        Nom complet <span className="text-emerald-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="name"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                        disabled={isSubmitting || isSubmitted}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                        Adresse email <span className="text-emerald-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@exemple.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                        disabled={isSubmitting || isSubmitted}
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-white/80 text-sm font-medium mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Votre entreprise"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                        disabled={isSubmitting || isSubmitted}
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-white/80 text-sm font-medium mb-2">
                        Sujet
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all appearance-none cursor-pointer"
                        disabled={isSubmitting || isSubmitted}
                      >
                        <option value="" className="bg-charcoal-900">Sélectionnez un sujet</option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject} className="bg-charcoal-900">
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mt-6">
                    <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                      Votre message <span className="text-emerald-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Parlez-nous de votre projet..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>

                  {/* Submit */}
                  <div className="mt-6">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                        isSubmitted
                          ? 'bg-green-500 text-white'
                          : 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:shadow-glow'
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

                  <p className="text-white/40 text-sm text-center mt-4">
                    En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
                  </p>
                </form>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
