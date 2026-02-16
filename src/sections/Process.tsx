import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react';
import { SectionReveal } from '@/components/ui-custom/SectionReveal';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Découverte & Audit',
    description: 'Nous analysons votre présence digitale actuelle, vos besoins en développement web et vos objectifs marketing pour définir une stratégie adaptée.',
    details: ['Audit digital', 'Étude du marché', 'Analyse concurrentielle'],
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Stratégie Digital',
    description: 'Nous créons une stratégie complète intégrant développement web et marketing digital pour maximiser votre visibilité et conversions.',
    details: ['Design UX/UI', 'Plan SEO', 'Stratégie contenu'],
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Développement & Lancement',
    description: 'Notre équipe développe votre site web performant et met en place les campagnes marketing pour un lancement réussi.',
    details: ['Code moderne', 'Marketing automation', 'Intégration analytics'],
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Suivi & Optimisation',
    description: 'Nous suivons les performances de votre site et campagnes, en optimisant continuellement pour améliorer votre ROI digital.',
    details: ['Reporting mensuel', 'A/B Testing', 'Growth hacking'],
  },
];

function ProcessStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        {/* Left side - Number & Icon */}
        <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:w-48 shrink-0">
          {/* Number */}
          <motion.div
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <step.icon className="w-8 h-8 text-white" />
          </motion.div>
          
          {/* Step number */}
          <span className="text-5xl font-bold text-white/10 lg:text-right">
            {step.number}
          </span>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 pb-12 lg:pb-20">
          <div className="glass rounded-2xl p-6 sm:p-8 hover:border-emerald-500/30 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">
              {step.title}
            </h3>
            <p className="text-white/60 mb-6 leading-relaxed">
              {step.description}
            </p>
            
            {/* Details */}
            <div className="flex flex-wrap gap-2">
              {step.details.map((detail) => (
                <span
                  key={detail}
                  className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium"
                >
                  {detail}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Connecting line */}
      {index < steps.length - 1 && (
        <motion.div
          className="absolute left-8 lg:left-24 top-20 lg:top-24 w-0.5 h-full bg-gradient-to-b from-emerald-500/50 to-transparent"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
          style={{ originY: 0 }}
        />
      )}
    </motion.div>
  );
}

export function Process() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-section">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionReveal>
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              Notre Processus
            </span>
          </SectionReveal>
          
          <SectionReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Une méthodologie <span className="gradient-text">éprouvée</span>
            </h2>
          </SectionReveal>
          
          <SectionReveal delay={0.2}>
            <p className="text-lg text-white/60">
              Notre processus en 4 étapes garantit des résultats mesurables et 
              une collaboration transparente à chaque phase du projet.
            </p>
          </SectionReveal>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
