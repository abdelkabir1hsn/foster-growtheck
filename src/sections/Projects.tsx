import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { SectionReveal, StaggerContainer, StaggerItem } from '@/components/ui-custom/SectionReveal';

const projects = [
  {
    title: 'Luxe & Élégance',
    category: 'Branding & Site web',
    description: 'Refonte complète de l\'identité visuelle et du site e-commerce pour une marque de luxe.',
    gradient: 'from-purple-600 via-pink-500 to-rose-500',
    stats: { views: '2.5M', conversion: '+45%' },
  },
  {
    title: 'Tech Innovators',
    category: 'Stratégie digitale',
    description: 'Campagne de lancement produit avec stratégie multi-canaux pour une startup tech.',
    gradient: 'from-blue-600 via-cyan-500 to-teal-500',
    stats: { views: '1.8M', conversion: '+62%' },
  },
  {
    title: 'Green Energy Co',
    category: 'Production vidéo',
    description: 'Série de vidéos corporate et témoignages clients pour un leader de l\'énergie verte.',
    gradient: 'from-emerald-600 via-green-500 to-lime-500',
    stats: { views: '3.2M', conversion: '+38%' },
  },
  {
    title: 'Fashion Forward',
    category: 'Social media & Digital',
    description: 'Stratégie social media et campagne d\'influence pour une marque de mode émergente.',
    gradient: 'from-orange-500 via-red-500 to-pink-600',
    stats: { views: '5.1M', conversion: '+55%' },
  },
  {
    title: 'Finance Pro',
    category: 'Application web',
    description: 'Développement d\'une plateforme SaaS de gestion financière pour professionnels.',
    gradient: 'from-indigo-600 via-blue-600 to-cyan-600',
    stats: { views: '890K', conversion: '+71%' },
  },
  {
    title: 'Event Masters',
    category: 'Événementiel',
    description: 'Organisation d\'un sommet international avec 2000+ participants.',
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
    stats: { views: '500K', conversion: '+92%' },
  },
];

export function Projects() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-lime-500/5 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <SectionReveal>
              <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                Nos Réalisations
              </span>
            </SectionReveal>
            
            <SectionReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Projets qui <span className="gradient-text">inspirent</span>
              </h2>
            </SectionReveal>
            
            <SectionReveal delay={0.2}>
              <p className="text-lg text-white/60">
                Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs 
                avec des solutions créatives et performantes.
              </p>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.3}>
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium hover:bg-emerald-500/20 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Voir tous les projets
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </SectionReveal>
        </div>

        {/* Projects Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
                
                {/* Pattern Overlay */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium">
                      {project.category}
                    </span>
                    <motion.div
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>

                  {/* Bottom */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-y-0 transition-transform">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      <div className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm">
                        <span className="text-white font-semibold">{project.stats.views}</span>
                        <span className="text-white/60 text-xs ml-1">vues</span>
                      </div>
                      <div className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm">
                        <span className="text-white font-semibold">{project.stats.conversion}</span>
                        <span className="text-white/60 text-xs ml-1">conversion</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
