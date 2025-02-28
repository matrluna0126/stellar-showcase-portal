
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackgroundEffects from '../components/BackgroundEffects';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-[300vh]">
      {isLoading ? (
        <div className="fixed inset-0 bg-portfolio-dark-purple flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-portfolio-purple to-portfolio-light-purple rounded-lg flex items-center justify-center mb-4">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-white font-bold text-4xl"
              >
                S
              </motion.span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-portfolio-light-purple mt-4 rounded-full"
            />
          </motion.div>
        </div>
      ) : (
        <>
          {/* Background Effects */}
          <BackgroundEffects />
          
          {/* Header */}
          <Header />
          
          {/* Main Content */}
          <div>
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
          </div>
        </>
      )}
    </main>
  );
};

export default Index;
