import { motion } from 'framer-motion';
import { Award, Users, Briefcase, Globe, CheckCircle2 } from 'lucide-react';
import { Counter } from '@/components/ui-custom/Counter';
import { SectionReveal, StaggerContainer, StaggerItem } from '@/components/ui-custom/SectionReveal';

const stats = [
  { value: 50, suffix: '+', label: 'Clients servis', icon: Users },
  { value: 98, suffix: '%', label: 'Satisfaction client', icon: Award },
  { value: 24, suffix: '/7', label: 'Support disponible', icon: Briefcase },
  { value: 20, suffix: '+', label: 'Pays couverts', icon: Globe },
];

const values = [
  { title: 'Fiabilité', description: 'Un service de qualité constant et une expertise reconnue.' },
  { title: 'Réactivité', description: 'Une équipe toujours disponible pour vous aider rapidement.' },
  { title: 'Personnalisation', description: 'Des solutions adaptées à vos besoins spécifiques.' },
  { title: 'Intégrité', description: 'Une relation transparente et honnête avec nos clients.' },
];

const certifications = ['ISO 9001 Certifié', 'Sécurité Garantie', 'Support Premium', 'Garantie Satisfait'];

export function About() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0f0f10]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#5b9c00]/[0.06] to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Stats Row */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20" staggerDelay={0.1}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div
                className="text-center p-6 rounded-2xl bg-[#333333]/20 border border-white/5"
                whileHover={{ y: -4, borderColor: 'rgba(91, 156, 0, 0.3)' }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="w-8 h-8 text-[#5b9c00] mx-auto mb-4" />
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <SectionReveal>
              <span className="inline-block px-4 py-2 rounded-full bg-[#5b9c00]/10 border border-[#5b9c00]/20 text-[#5b9c00] text-sm font-medium mb-6">
                À Propos de Nous
              </span>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Votre <span className="gradient-text">solution de confiance</span>
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-lg text-white/60 mb-6 leading-relaxed">
                Nous offrons un service de qualité supérieure adapté à vos besoins. Notre équipe
                d&apos;experts s&apos;engage à vous fournir les meilleures solutions pour la
                croissance et le succès de votre activité.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <p className="text-white/60 mb-8 leading-relaxed">
                Avec plus de 50 clients satisfaits à travers le monde, nous mettons notre expertise
                au service de votre réussite, 24h/24 et 7j/7.
              </p>
            </SectionReveal>

            {/* Certifications */}
            <SectionReveal delay={0.4}>
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4">Nos Engagements</h4>
                <div className="flex flex-wrap gap-3">
                  {certifications.map((cert) => (
                    <span
                      key={cert}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#5b9c00]/10 text-[#5b9c00] text-sm font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>

            {/* CTA */}
            <SectionReveal delay={0.5}>
              <motion.a
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#5b9c00] to-[#406b00] text-white font-semibold hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Découvrir notre service
              </motion.a>
            </SectionReveal>
          </div>

          {/* Right - Values Grid */}
          <div>
            <SectionReveal delay={0.2}>
              <h3 className="text-xl font-bold text-white mb-6">Nos Valeurs</h3>
            </SectionReveal>

            <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1} delayChildren={0.3}>
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <motion.div
                    className="p-6 rounded-2xl bg-[#333333]/20 border border-white/5 h-full"
                    whileHover={{
                      y: -4,
                      borderColor: 'rgba(91, 156, 0, 0.3)',
                      backgroundColor: 'rgba(91, 156, 0, 0.06)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}