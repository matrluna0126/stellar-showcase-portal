
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen w-screen bg-portfolio-dark-purple flex flex-col items-center justify-center p-5 text-center relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              '--size': `${1 + Math.random() * 2}px`,
              '--duration': `${3 + Math.random() * 7}s`,
              '--delay': `${Math.random() * 5}s`,
              '--opacity': 0.1 + Math.random() * 0.9,
            } as React.CSSProperties}
          />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-2xl"
      >
        <h1 className="text-9xl font-bold text-portfolio-light-purple mb-6">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Page Not Found</h2>
        <p className="text-white/70 mb-10 text-lg">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-lg bg-portfolio-light-purple hover:bg-portfolio-purple text-white font-medium transition-all duration-300 shadow-lg hover:shadow-portfolio-light-purple/30"
        >
          Return Home
        </Link>
      </motion.div>
      
      {/* Meteor effect */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="meteor"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
            '--delay': `${Math.random() * 5}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default NotFound;
