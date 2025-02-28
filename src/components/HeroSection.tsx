
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-portfolio-purple/20 border border-portfolio-purple/30 text-portfolio-light-purple text-sm font-medium"
          >
            Blockchain & Game Development Expert
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-portfolio-soft-purple"
          >
            Turning Ideas Into<br />
            Digital Reality
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-3xl text-lg text-white/80 mb-10 leading-relaxed"
          >
            <p>
              I'm a passionate blockchain engineer, game developer, and front-end expert with a proven track record of 
              delivering cutting-edge solutions. Specializing in decentralized applications, immersive gaming experiences, 
              and responsive web interfaces, I combine technical expertise with creative problem-solving to build innovative
              digital products that stand out in today's competitive market.
            </p>
            <p className="mt-4">
              With expertise in multiple blockchain platforms, game engines, and modern front-end frameworks, I create
              seamless experiences that merge technical excellence with captivating design. My mission is to leverage
              emerging technologies to build the next generation of digital experiences that are not only functional but also
              delightful to use.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-portfolio-light-purple hover:bg-portfolio-purple text-white font-medium transition-all duration-300 shadow-lg hover:shadow-portfolio-light-purple/30"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg bg-transparent hover:bg-white/10 text-white border border-portfolio-purple/50 hover:border-portfolio-light-purple font-medium transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center">
              <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-1.5 h-1.5 bg-white rounded-full mt-2"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
