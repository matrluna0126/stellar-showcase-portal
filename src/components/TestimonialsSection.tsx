
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    name: 'Emily Johnson',
    role: 'CTO at BlockFusion',
    testimonial: 'Working with this blockchain developer was a game-changer for our DeFi platform. Their technical skills and attention to detail resulted in a secure, efficient protocol that exceeded our expectations. They have a deep understanding of blockchain architecture and smart contract development that's truly impressive.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'David Chen',
    role: 'Game Director at Immersive Adventures',
    testimonial: 'The game development expertise brought to our project was exceptional. From complex gameplay mechanics to optimization for different platforms, they delivered on every front. Their ability to solve technical challenges while maintaining creative vision makes them an invaluable asset to any game development team.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sarah Williams',
    role: 'Product Manager at TechInnovate',
    testimonial: 'I've worked with many front-end developers, but few have the combination of technical skill and design sensibility that this developer brings. They transformed our user interface with beautiful, responsive designs that dramatically improved our conversion rates. The attention to animation details and performance optimization was outstanding.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Founder at CryptoVentures',
    testimonial: 'When we needed a blockchain expert to audit and improve our smart contracts, this developer delivered beyond our expectations. Their deep knowledge of security best practices and ability to optimize gas usage saved us from potential vulnerabilities while reducing costs. I highly recommend their services for any serious blockchain project.',
    image: 'https://randomuser.me/api/portraits/men/15.jpg',
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 relative">
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
            What People Say
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-3xl mx-auto text-white/70"
          >
            Don't just take my word for it - hear what clients and collaborators have to say about working with me.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-portfolio-dark-purple/80 backdrop-blur-md rounded-xl border border-portfolio-purple/20 p-6 shadow-lg overflow-hidden"
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      whileHover={{
        scale: 1.02,
        rotateX: 10,
        rotateY: 10,
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-portfolio-light-purple">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
          <p className="text-portfolio-light-purple text-sm">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="relative">
        <svg
          className="absolute top-0 left-0 w-10 h-10 text-portfolio-purple/20 transform -translate-x-4 -translate-y-4"
          fill="currentColor"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="relative text-white/80 italic">
          {testimonial.testimonial}
        </p>
      </div>
      
      <div className="mt-4 pt-4 border-t border-portfolio-purple/20 flex justify-end">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-portfolio-light-purple"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialsSection;
