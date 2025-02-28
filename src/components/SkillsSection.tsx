
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  {
    category: 'Blockchain',
    items: ['Ethereum', 'Solidity', 'Smart Contracts', 'Web3.js', 'Truffle', 'Hardhat', 'NFTs', 'DeFi'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-portfolio-light-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
        <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
        <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
      </svg>
    ),
  },
  {
    category: 'Game Development',
    items: ['Unity 3D', 'Unreal Engine', 'C#', 'C++', 'Game Design', 'AR/VR', 'Mobile Gaming', 'Multiplayer'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-portfolio-light-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3z" />
        <circle cx="10" cy="12" r="2" />
        <path d="M17 12h.01" />
        <path d="M21 12h.01" />
      </svg>
    ),
  },
  {
    category: 'Front-End Development',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Framer Motion', 'Redux', 'Responsive Design'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-portfolio-light-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h16" />
        <path d="M4 6h8" />
        <path d="M4 18h12" />
      </svg>
    ),
  },
  {
    category: 'Backend & Infrastructure',
    items: ['Node.js', 'Express', 'MongoDB', 'AWS', 'Firebase', 'GraphQL', 'CI/CD', 'Docker'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-portfolio-light-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3L2 12h5v8h10v-8h5L12 3z" />
      </svg>
    ),
  },
];

const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      className="skill-card group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-portfolio-purple/10">
          {skill.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-portfolio-light-purple transition-colors duration-300">
            {skill.category}
          </h3>
          <div className="flex flex-wrap gap-2 mt-3">
            {skill.items.map((item: string, idx: number) => (
              <span
                key={idx}
                className="px-3 py-1 bg-portfolio-purple/20 rounded-full text-sm text-portfolio-soft-purple border border-portfolio-purple/30"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative">
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
            My Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Skills & Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-3xl mx-auto text-white/70"
          >
            With a diverse skill set spanning blockchain, game development, and front-end technologies,
            I create innovative digital experiences that push the boundaries of what's possible.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
