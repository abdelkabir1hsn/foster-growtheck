import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'sonner';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLenis } from '@/hooks/useLenis';

// Sections
import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
// import { Projects } from '@/sections/Projects';
import { Process } from '@/sections/Process';
import { About } from '@/sections/About';
import { Testimonials } from '@/sections/Testimonials';
import { Contact } from '@/sections/Contact';

// Pages
import { ServicesPage } from '@/pages/ServicesPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';

// Page transition wrapper
function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Home Page Component
function HomePage() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <Services />
        {/* <Projects /> */}
        <Process />
        <About />
        <Testimonials />
        <Contact />
      </main>
    </PageTransition>
  );
}

// Services Page Wrapper
function ServicesPageWrapper() {
  return (
    <PageTransition>
      <ServicesPage />
    </PageTransition>
  );
}

// About Page Wrapper
function AboutPageWrapper() {
  return (
    <PageTransition>
      <AboutPage />
    </PageTransition>
  );
}

// Contact Page Wrapper
function ContactPageWrapper() {
  return (
    <PageTransition>
      <ContactPage />
    </PageTransition>
  );
}

// App Content with Lenis
function AppContent() {
  useLenis();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-charcoal-950">
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPageWrapper />} />
          <Route path="/about" element={<AboutPageWrapper />} />
          <Route path="/contact" element={<ContactPageWrapper />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: {
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
          },
        }}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
