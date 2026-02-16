import { motion } from 'framer-motion';
import { 
  Target, 
  Globe, 
  Lightbulb,
  ArrowUpRight 
} from 'lucide-react';
import { TiltCard } from '@/components/ui-custom/TiltCard';
import { SectionReveal, StaggerContainer, StaggerItem } from '@/components/ui-custom/SectionReveal';

const services = [
  {
    icon: Globe,
    title: 'Développement Web',
    description: 'Créez des sites web modernes, rapides et responsifs qui convertissent vos visiteurs en clients avec une expérience utilisateur exceptionnelle.',
    color: 'from-emerald-500 to-emerald-600',
    features: ['Sites sur mesure', 'Performance', 'Responsive design'],
  },
  {
    icon: Target,
    title: 'Optimisation SEO',
    description: 'Améliorez votre classement dans les moteurs de recherche et augmentez votre visibilité organique avec une stratégie SEO complète et éprouvée.',
    color: 'from-lime-500 to-lime-600',
    features: ['SEO technique', 'Contenu optimisé', 'Backlinks'],
  },
  {
    icon: Lightbulb,
    title: 'Marketing Digital',
    description: 'Développez votre audience et générez des leads qualifiés avec des stratégies marketing digitales ciblées et mesurables.',
    color: 'from-emerald-500 to-teal-500',
    features: ['Stratégie marketing', 'Publicités digitales', 'Analytics'],
  },
];

export function Services() {
  return (
    <section className="section-padding bg-gradient-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionReveal>
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              Nos Services
            </span>
          </SectionReveal>
          
          <SectionReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Solutions Web, SEO et <span className="gradient-text">Marketing Digital</span>
            </h2>
          </SectionReveal>
          
          <SectionReveal delay={0.2}>
            <p className="text-lg text-white/60">
              Augmentez votre visibilité en ligne et convertissez plus de clients 
              avec nos services de développement web, optimisation SEO et stratégie marketing digitale.
            </p>
          </SectionReveal>
        </div>

        {/* Services Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <TiltCard className="h-full" tiltAmount={8}>
                <div className="h-full p-6 sm:p-8 rounded-2xl bg-charcoal-900/50 border border-white/5 backdrop-blur-sm hover:border-emerald-500/30 transition-colors duration-300 group">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/60 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-white/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <motion.a
                    href="/services"
                    className="inline-flex items-center gap-2 text-emerald-400 font-medium text-sm group/link"
                    whileHover={{ x: 4 }}
                  >
                    En savoir plus
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </motion.a>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
