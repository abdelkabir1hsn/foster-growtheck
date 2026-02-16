import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { SectionReveal } from '@/components/ui-custom/SectionReveal';

const testimonials = [
  {
    id: 1,
    name: 'Fatima Bennani',
    role: 'Directrice',
    company: 'Riad Marrakech Luxury',
    image: 'F',
    content: 'Foster Growthec a transformé notre présence digitale à Marrakech. Leur expertise en marketing digital local a augmenté nos réservations de 50% en 6 mois.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Karim Alaoui',
    role: 'Gérant',
    company: 'Tech Hub Casablanca',
    image: 'K',
    content: 'Une équipe marocaine qui comprend le marché local. Leur stratégie digitale adaptée aux clients marocains a doublé notre clientèle.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Zahra Rachidi',
    role: 'Fondatrice',
    company: 'Cosmétiques Naturels Fès',
    image: 'Z',
    content: 'Foster Growthec a développé notre présence sur les réseaux sociaux marocains. Nos produits sont maintenant reconnus dans tout le Maroc.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Mohammed Fassi',
    role: 'PDG',
    company: 'Import-Export Tanger',
    image: 'M',
    content: 'Leur plateforme e-commerce adaptée au marché marocain a transformé notre business. Excellente compréhension des clients locaux.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Nadia Berrada',
    role: 'Responsable Marketing',
    company: 'Resort Agadir',
    image: 'N',
    content: 'Foster Growthec a géré notre campagne digitale avec professionnalisme. Résultats exceptionnels et équipe réactive aux besoins marocains.',
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      return newIndex;
    });
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-section">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionReveal>
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              Témoignages
            </span>
          </SectionReveal>
          
          <SectionReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ce que disent nos <span className="gradient-text">clients</span>
            </h2>
          </SectionReveal>
          
          <SectionReveal delay={0.2}>
            <p className="text-lg text-white/60">
              Découvrez les retours d'expérience de nos clients qui nous font confiance 
              pour leur croissance digitale.
            </p>
          </SectionReveal>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <Quote className="absolute -top-6 -left-4 w-16 h-16 text-emerald-500/20" />

            {/* Slider Content */}
            <div className="relative h-[400px] sm:h-[350px] overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0"
                >
                  <div className="glass rounded-3xl p-8 sm:p-12 h-full flex flex-col justify-center">
                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-lime-500 text-lime-500" />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-8">
                      "{currentTestimonial.content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500/30"
                      />
                      <div>
                        <div className="font-semibold text-white">
                          {currentTestimonial.name}
                        </div>
                        <div className="text-white/60 text-sm">
                          {currentTestimonial.role}, {currentTestimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-emerald-500'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-3">
                <motion.button
                  onClick={() => paginate(-1)}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={() => paginate(1)}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
