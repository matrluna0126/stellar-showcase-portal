
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-portfolio-purple/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="w-10 h-10 bg-portfolio-purple rounded-lg flex items-center justify-center overflow-hidden">
                <div className="text-white font-bold text-xl">S</div>
              </div>
              <div className="font-bold text-xl text-white">SYJ-Portfolio</div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/70 mb-6 max-w-md"
            >
              A blockchain and game development expert with a passion for creating innovative digital experiences that push the boundaries of technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-4"
            >
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-portfolio-purple/20 flex items-center justify-center text-portfolio-light-purple hover:bg-portfolio-light-purple hover:text-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-portfolio-purple/20 flex items-center justify-center text-portfolio-light-purple hover:bg-portfolio-light-purple hover:text-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-portfolio-purple/20 flex items-center justify-center text-portfolio-light-purple hover:bg-portfolio-light-purple hover:text-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-portfolio-purple/20 flex items-center justify-center text-portfolio-light-purple hover:bg-portfolio-light-purple hover:text-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-portfolio-purple/20 flex items-center justify-center text-portfolio-light-purple hover:bg-portfolio-light-purple hover:text-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </motion.div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-white/70 hover:text-portfolio-light-purple transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#skills" className="text-white/70 hover:text-portfolio-light-purple transition-colors duration-300">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-white/70 hover:text-portfolio-light-purple transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#experience" className="text-white/70 hover:text-portfolio-light-purple transition-colors duration-300">Experience</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-portfolio-light-purple transition-colors duration-300">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-portfolio-light-purple transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-portfolio-light-purple transition-colors duration-300">Blockchain Development</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-portfolio-light-purple transition-colors duration-300">Game Development</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-portfolio-light-purple transition-colors duration-300">Front-End Development</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-portfolio-light-purple transition-colors duration-300">UI/UX Design</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-portfolio-light-purple transition-colors duration-300">Smart Contract Audits</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-portfolio-purple/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} SYJ-Portfolio. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Designed and built with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
