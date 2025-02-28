
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(26, 31, 44, 0)', 'rgba(26, 31, 44, 0.8)']
  );
  
  const headerBorder = useTransform(
    scrollY,
    [0, 100],
    ['rgba(126, 105, 171, 0)', 'rgba(126, 105, 171, 0.2)']
  );
  
  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', to: 'hero' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Experience', to: 'experience' },
    { label: 'Testimonials', to: 'testimonials' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between"
      style={{
        backgroundColor: headerBg,
        borderBottom: `1px solid`,
        borderColor: headerBorder,
        backdropFilter: headerBlur,
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-portfolio-purple rounded-lg flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white font-bold text-xl"
          >
            S
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-bold text-xl text-white"
        >
          SYJ-Portfolio
        </motion.div>
      </div>

      <nav className="hidden md:flex items-center space-x-1">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.to}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
          >
            <ScrollLink
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="nav-link cursor-pointer"
              activeClass="active"
            >
              {item.label}
            </ScrollLink>
          </motion.div>
        ))}
      </nav>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="md:hidden relative w-10 h-10 flex items-center justify-center"
      >
        <button className="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </motion.div>
    </motion.header>
  );
};

export default Header;
