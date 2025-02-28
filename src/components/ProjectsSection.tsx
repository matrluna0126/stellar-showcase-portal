
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    title: 'DeFi Trading Platform',
    category: 'Blockchain',
    description: 'A decentralized exchange platform with advanced trading features, liquidity pools, and yield farming capabilities.',
    technologies: ['Solidity', 'React', 'Web3.js', 'Ethereum'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'NFT Marketplace',
    category: 'Blockchain',
    description: 'A full-featured NFT marketplace allowing users to mint, buy, sell, and trade digital collectibles with royalty support.',
    technologies: ['Solidity', 'Next.js', 'IPFS', 'ERC-721'],
    image: 'bitcoin.PNG',
  },
  {
    title: 'Fantasy RPG Adventure',
    category: 'Game Development',
    description: 'An immersive open-world RPG with advanced AI systems, dynamic quests, and a rich narrative experience.',
    technologies: ['Unity 3D', 'C#', 'Blender', 'Shader Graph'],
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Multiplayer Strategy Game',
    category: 'Game Development',
    description: 'A real-time strategy game with multiplayer support, matchmaking, and complex AI opponents.',
    technologies: ['Unreal Engine', 'C++', 'Photon', 'AWS GameLift'],
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'AR Educational App',
    category: 'Game Development',
    description: 'An augmented reality application for interactive learning, bringing educational content to life.',
    technologies: ['Unity AR', 'ARKit', 'ARCore', 'C#'],
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXVnbWVudGVkJTIwcmVhbGl0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Front-End',
    description: 'A modern e-commerce platform with advanced filtering, cart management, and payment integration.',
    technologies: ['Next.js', 'Redux', 'Stripe', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Digital Portfolio',
    category: 'Front-End',
    description: 'An interactive portfolio website with 3D elements, animations, and responsive design.',
    technologies: ['React', 'Three.js', 'Framer Motion', 'GSAP'],
    image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Blockchain Social Platform',
    category: 'Blockchain',
    description: 'A decentralized social media platform with content ownership, monetization, and governance.',
    technologies: ['Solidity', 'React', 'IPFS', 'The Graph'],
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Analytics Dashboard',
    category: 'Front-End',
    description: 'A comprehensive analytics dashboard with real-time data visualization and reporting features.',
    technologies: ['React', 'D3.js', 'GraphQL', 'Material UI'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFzaGJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = filter ? projects.filter(project => project.category === filter) : projects;

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
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
            My Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-3xl mx-auto text-white/70 mb-8"
          >
            Explore a selection of my best work across blockchain, game development, and front-end projects.
            Each project represents a unique challenge and innovative solution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === null
                  ? 'bg-portfolio-light-purple text-white'
                  : 'bg-portfolio-purple/20 text-white/70 hover:bg-portfolio-purple/30'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('Blockchain')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'Blockchain'
                  ? 'bg-portfolio-light-purple text-white'
                  : 'bg-portfolio-purple/20 text-white/70 hover:bg-portfolio-purple/30'
              }`}
            >
              Blockchain
            </button>
            <button
              onClick={() => setFilter('Game Development')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'Game Development'
                  ? 'bg-portfolio-light-purple text-white'
                  : 'bg-portfolio-purple/20 text-white/70 hover:bg-portfolio-purple/30'
              }`}
            >
              Game Development
            </button>
            <button
              onClick={() => setFilter('Front-End')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'Front-End'
                  ? 'bg-portfolio-light-purple text-white'
                  : 'bg-portfolio-purple/20 text-white/70 hover:bg-portfolio-purple/30'
              }`}
            >
              Front-End
            </button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={cardRef}
      className="project-card group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.03,
        rotateY: 5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark-purple to-transparent opacity-70"></div>
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-portfolio-light-purple/90 rounded-full text-xs font-medium text-white">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-portfolio-light-purple transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-white/70 mb-4 text-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, idx: number) => (
            <span
              key={idx}
              className="px-2 py-1 bg-portfolio-purple/20 rounded-full text-xs text-portfolio-soft-purple"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="pt-2 border-t border-portfolio-purple/20">
          <a
            href="#"
            className="text-portfolio-light-purple hover:text-white text-sm font-medium inline-flex items-center gap-1 transition-colors duration-300"
          >
            View Project Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
