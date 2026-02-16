import { motion } from 'framer-motion';
import { 
  Target, 
  Globe, 
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { TiltCard } from '@/components/ui-custom/TiltCard';
import { SectionReveal, StaggerContainer, StaggerItem } from '@/components/ui-custom/SectionReveal';
import { AnimatedButton } from '@/components/ui-custom/AnimatedButton';

const services = [
  {
    icon: Target,
    title: 'Stratégie digitale',
    description: 'Définissons ensemble votre feuille de route digitale pour atteindre vos objectifs de croissance avec des actions mesurables et impactantes.',
    color: 'from-emerald-500 to-emerald-600',
    features: [
      'Audit digital complet',
      'Analyse concurrentielle',
      'Définition des objectifs',
      'Plan d\'action détaillé',
      'KPIs & Analytics',
      'Reporting régulier',
    ],
    price: '',
  },
 
  {
    icon: Globe,
    title: 'Digital',
    description: 'Développez votre présence en ligne avec des sites web, applications et expériences digitales de haute qualité.',
    color: 'from-emerald-500 to-teal-500',
    features: [
      'Sites web sur mesure',
      'Applications mobiles',
      'E-commerce',
      'Web apps',
      'SEO & Performance',
      'Maintenance',
    ],
    price: '',
  },
 
 
  {
    icon: Lightbulb,
    title: 'Consulting',
    description: 'Bénéficiez de l\'expertise de nos consultants pour optimiser vos processus et accélérer votre croissance.',
    color: 'from-blue-500 to-indigo-500',
    features: [
      'Conseil stratégique',
      'Formation équipe',
      'Accompagnement',
      'Workshops',
      'Audit & Recommandations',
      'Suivi & Optimisation',
    ],
    price: '',
  },
];

const processSteps = [
  { number: '01', title: 'Consultation gratuite', description: 'Discutons de vos besoins et objectifs' },
  { number: '02', title: 'Proposition sur mesure', description: 'Recevez une offre adaptée à votre budget' },
  { number: '03', title: 'Lancement du projet', description: 'Commençons à travailler ensemble' },
];

export function ServicesPage() {
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
                Nos Services
              </span>
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Des solutions <span className="gradient-text">complètes</span> pour votre succès
            </motion.h1>
            
            <motion.p
              className="text-xl text-white/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              De la stratégie à l'exécution, nous vous accompagnons à chaque étape 
              de votre transformation digitale.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding relative">
        <div className="container-custom">
          <StaggerContainer className="grid lg:grid-cols-2 gap-8" staggerDelay={0.15}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <TiltCard className="h-full" tiltAmount={5}>
                  <div className="h-full p-8 rounded-2xl bg-charcoal-900/50 border border-white/5 hover:border-emerald-500/30 transition-colors">
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <span className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium">
                          {service.price}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-white/60 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="grid grid-cols-2 gap-2 mb-8">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-white/50">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="mt-auto">
                        <AnimatedButton
                          variant="primary"
                          href="/contact"
                          icon={<ArrowRight size={18} />}
                        >
                          Demander un devis
                        </AnimatedButton>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding relative bg-gradient-section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionReveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Comment ça <span className="gradient-text">marche</span> ?
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="text-lg text-white/60">
                Un processus simple et transparent pour démarrer votre projet.
              </p>
            </SectionReveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {processSteps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/60">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="glass rounded-3xl p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Prêt à démarrer ?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Contactez-nous pour une consultation gratuite et découvrez comment 
              nous pouvons vous aider à atteindre vos objectifs.
            </p>
            <AnimatedButton
              variant="primary"
              size="lg"
              href="/contact"
              icon={<ArrowRight size={20} />}
            >
              Prendre rendez-vous
            </AnimatedButton>
          </div>
        </div>
      </section>
    </div>
  );
}
