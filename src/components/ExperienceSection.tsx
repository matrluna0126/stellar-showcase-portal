
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    period: '2022 - 2025',
    role: 'Lead Blockchain Developer',
    company: 'DeFi Innovations',
    description: 'Led the development of multiple DeFi protocols and NFT platforms. Implemented smart contracts, advanced tokenomics, and cross-chain interoperability solutions.',
    achievements: [
      'Launched a DEX with $10M+ TVL within the first month',
      'Built a cross-chain bridge supporting 5 major blockchains',
      'Implemented EIP-4337 account abstraction for improved UX'
    ],
    side: 'right'
  },
  {
    period: '2021 - 2022',
    role: 'Senior Game Developer',
    company: 'Virtual Realms Studios',
    description: 'Developed AAA-quality game mechanics and systems for a multiplayer online role-playing game. Created advanced AI systems and optimized performance.',
    achievements: [
      'Implemented a procedural world generation system',
      'Optimized rendering pipeline, improving FPS by 40%',
      'Designed a dynamic quest system with 100+ unique scenarios'
    ],
    side: 'left'
  },
  {
    period: '2020 - 2021',
    role: 'Front-End Development Lead',
    company: 'TechSphere Solutions',
    description: 'Led a team of front-end developers building complex web applications. Implemented modern UI/UX patterns and ensured responsive design across all platforms.',
    achievements: [
      'Reduced load time by 60% through code splitting and lazy loading',
      'Implemented micro-frontend architecture for improved scalability',
      'Introduced component-driven development with Storybook'
    ],
    side: 'right'
  },
  {
    period: '2019 - 2020',
    role: 'Full-Stack Developer',
    company: 'DataFlow Systems',
    description: 'Developed full-stack applications with focus on data visualization and analytics. Created responsive dashboards and real-time monitoring systems.',
    achievements: [
      'Built real-time analytics dashboard for financial data',
      'Implemented WebSocket-based live updates system',
      'Developed REST API serving 1M+ requests daily'
    ],
    side: 'left'
  }
];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="experience" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-portfolio-purple/20 border border-portfolio-purple/30 text-portfolio-light-purple text-sm font-medium"
          >
            My Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-3xl mx-auto text-white/70"
          >
            My professional journey showcases a diverse range of experiences across blockchain,
            game development, and front-end technologies, delivering innovative solutions for complex challenges.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-portfolio-purple/30 hidden md:block"></div>

          <div className="space-y-12 relative">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ experience, index }: { experience: any; index: number }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`md:flex ${experience.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <div className="md:w-1/2"></div>
      
      {/* Timeline node */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-portfolio-light-purple rounded-full border-4 border-portfolio-dark-purple w-6 h-6 z-10"></div>
      
      <div className="md:w-1/2 timeline-card md:mx-12"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div
          whileHover={{
            rotateX: experience.side === 'left' ? -5 : 5,
            rotateY: experience.side === 'left' ? 5 : -5,
            transition: { duration: 0.2 }
          }}
          className="p-6"
        >
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-portfolio-purple/20 border border-portfolio-purple/30 text-portfolio-light-purple text-sm font-medium">
            {experience.period}
          </span>
          <h3 className="text-xl font-bold text-white mb-1">{experience.role}</h3>
          <h4 className="text-portfolio-light-purple mb-4">{experience.company}</h4>
          <p className="text-white/70 mb-4">
            {experience.description}
          </p>
          <ul className="space-y-2">
            {experience.achievements.map((achievement: string, idx: number) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-portfolio-light-purple flex-shrink-0 mt-1">•</span>
                <span className="text-white/70 text-sm">{achievement}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperienceSection;
