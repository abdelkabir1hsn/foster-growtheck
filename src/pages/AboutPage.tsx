import { motion } from 'framer-motion';
import { Award, Users, Heart, Zap, Target, Sparkles } from 'lucide-react';
import { Counter } from '@/components/ui-custom/Counter';
import { SectionReveal, StaggerContainer, StaggerItem } from '@/components/ui-custom/SectionReveal';
import { AnimatedButton } from '@/components/ui-custom/AnimatedButton';

const stats = [
  { value: 250, suffix: '+', label: 'Projets réalisés' },
  { value: 120, suffix: '+', label: 'Clients satisfaits' },
  { value: 8, suffix: '+', label: 'Années d\'expérience' },
  { value: 25, suffix: '', label: 'Experts dans l\'équipe' },
];

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'Nous mettons tout notre cœur dans chaque projet, avec une véritable passion pour l\'excellence digitale marocaine.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Nous restons constamment à la pointe des tendances et technologies pour offrir les meilleures solutions digitales.',
  },
  {
    icon: Target,
    title: 'Résultats',
    description: 'Nous nous concentrons sur des résultats mesurables et un retour sur investissement tangible pour nos clients.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Nous croyons en un partenariat étroit avec nos clients, basé sur la transparence et la communication.',
  },
];

const milestones = [
  // { year: '2016', title: 'Création', description: 'Fondation de Digital Growth Morocco à Casablanca' },
  { year: '2018', title: 'Croissance', description: 'Expansion de l\'équipe et ouverture à Rabat' },
  { year: '2020', title: 'Excellence', description: 'Reconnaissance comme agence partenaire Google Maroc' },
  { year: '2022', title: 'Innovation', description: 'Lancement de services IA et data analytics' },
  { year: '2024', title: 'Leadership', description: 'Partenaire technologique des plus grandes marques marocaines' },
];

export function AboutPage() {
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
                À Propos
              </span>
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Votre partenaire digital <span className="gradient-text">marocain</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-white/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Depuis 2018, nous accompagnons les entreprises marocaines dans leur 
              transformation digitale avec expertise, innovation et résultats concrets.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 relative">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center p-6 rounded-2xl bg-charcoal-900/50 border border-white/5">
                  <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/60">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Notre <span className="gradient-text">histoire</span>
                </h2>
                <div className="space-y-4 text-white/60 leading-relaxed">
                  <p>
                    Digital Growth Morocco est née d'une vision simple : aider les entreprises 
                    marocaines à réaliser leur potentiel grâce au digital. Fondée en 2018 à 
                    Casablanca, notre agence a rapidement gagné la confiance de clients ambitieux 
                    grâce à notre approche innovante et notre engagement envers l'excellence.
                  </p>
                  <p>
                    Au fil des années, nous avons construit une équipe d'experts passionnés marocains, 
                    chacun apportant son expertise unique dans des domaines variés : stratégie, 
                    design, développement web et mobile, marketing digital, et consulting.
                  </p>
                  <p>
                    Aujourd'hui, avec plus de 250 projets réalisés et une présence dans les 
                    principales villes du Maroc, nous continuons d'accompagner nos clients dans 
                    leur croissance, en restant fidèles à nos valeurs d'innovation, de transparence 
                    et de résultats mesurables.
                  </p>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 via-lime-500/20 to-emerald-500/20 flex items-center justify-center">
                    <img
                      src="/logo.png"
                      alt="Digital Growth Morocco"
                      className="w-1/2 h-auto opacity-80"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-emerald-500/30 rounded-2xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-500/20 rounded-xl" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding relative bg-gradient-section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionReveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Nos <span className="gradient-text">valeurs</span>
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="text-lg text-white/60">
                Ces principes guident chacune de nos actions et décisions.
              </p>
            </SectionReveal>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  className="p-6 rounded-2xl bg-charcoal-900/50 border border-white/5 h-full"
                  whileHover={{ y: -4, borderColor: 'rgba(16, 185, 129, 0.3)' }}
                >
                  <value.icon className="w-10 h-10 text-emerald-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionReveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Notre <span className="gradient-text">parcours</span>
              </h2>
            </SectionReveal>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Line */}
              <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-lime-500 to-emerald-500 lg:-translate-x-1/2" />
              
              {/* Milestones */}
              <StaggerContainer className="space-y-12" staggerDelay={0.15}>
                {milestones.map((milestone, index) => (
                  <StaggerItem key={milestone.year}>
                    <div className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`flex-1 ml-12 lg:ml-0 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                        <div className="glass rounded-xl p-6 inline-block">
                          <span className="text-emerald-400 font-bold text-lg">{milestone.year}</span>
                          <h3 className="text-xl font-bold text-white mt-1">{milestone.title}</h3>
                          <p className="text-white/60 mt-2">{milestone.description}</p>
                        </div>
                      </div>
                      
                      {/* Dot */}
                      <div className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-charcoal-950 lg:-translate-x-1/2" />
                      
                      {/* Spacer for alternating layout */}
                      <div className="hidden lg:block flex-1" />
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="section-padding relative bg-gradient-section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionReveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Notre <span className="gradient-text">équipe</span>
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="text-lg text-white/60">
                Des experts marocains passionnés dédiés à votre succès.
              </p>
            </SectionReveal>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div
                  className="group"
                  whileHover={{ y: -8 }}
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-emerald-400 text-sm mb-2">{member.role}</p>
                  <p className="text-white/50 text-sm">{member.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="glass rounded-3xl p-12 text-center">
            <Award className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Rejoignez nos clients satisfaits
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Vous souhaitez transformer votre présence digitale ou faire partie de notre équipe ? 
              Nous serions ravis de vous rencontrer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton variant="primary" href="/contact">
                Nous contacter
              </AnimatedButton>
              <AnimatedButton variant="secondary" href="#">
                Voir nos offres d'emploi
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
