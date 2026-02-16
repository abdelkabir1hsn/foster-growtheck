import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  services: [
    { name: 'Stratégie digitale', href: '/services' },
    { name: 'Branding', href: '/services' },
    { name: 'Digital', href: '/services' },
    { name: 'Production audiovisuelle', href: '/services' },
    { name: 'Événementiel', href: '/services' },
    { name: 'Consulting', href: '/services' },
  ],
  company: [
    { name: 'À propos', href: '/about' },
    { name: 'Notre équipe', href: '/about' },
    { name: 'Carrières', href: '#' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Mentions légales', href: '#' },
    { name: 'Politique de confidentialité', href: '#' },
    { name: 'CGV', href: '#' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export function Footer() {
  return (
    <footer className="relative bg-charcoal-950 border-t border-white/5">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Foster Growthec"
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-white">
                Foster <span className="gradient-text">Growthec</span>
              </span>
            </Link>
            <p className="text-white/60 mb-6 max-w-sm">
              Nous accompagnons les entreprises dans leur transformation digitale 
              avec des solutions innovantes et sur mesure.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:contact@fostergrowthec.com" 
                className="flex items-center gap-3 text-white/60 hover:text-emerald-400 transition-colors"
              >
                <Mail size={18} />
                <span>contact@fostergrowthec.com</span>
              </a>
              <a 
                href="tel:+33123456789" 
                className="flex items-center gap-3 text-white/60 hover:text-emerald-400 transition-colors"
              >
                <Phone size={18} />
                <span>+33 1 23 45 67 89</span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin size={18} />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6">Légal</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <h3 className="text-white font-semibold mb-4">Suivez-nous</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Foster Growthec. Tous droits réservés.
          </p>
          
          <motion.a
            href="#"
            className="flex items-center gap-2 text-white/40 hover:text-emerald-400 transition-colors text-sm"
            whileHover={{ x: 4 }}
          >
            <span>Retour en haut</span>
            <ArrowUpRight size={16} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
