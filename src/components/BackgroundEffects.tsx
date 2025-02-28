
import { useEffect, useState, useRef } from 'react';

interface Meteor {
  id: number;
  delay: number;
  left: number;
  opacity: number;
  size: number;
  speed: number;
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

interface FallingStar {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  trail: number;
}

interface Nebula {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
}

const BackgroundEffects = () => {
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  const [stars, setStars] = useState<Star[]>([]);
  const [fallingStars, setFallingStars] = useState<FallingStar[]>([]);
  const [nebulae, setNebulae] = useState<Nebula[]>([]);
  const animationFrameRef = useRef<number>();
  
  // Generate a gradient color for nebulae
  const generateNebulaColor = () => {
    const purpleHues = [
      'rgba(126, 105, 171, 0.1)',
      'rgba(155, 135, 245, 0.15)',
      'rgba(175, 155, 255, 0.1)',
      'rgba(145, 125, 225, 0.12)',
    ];
    
    return purpleHues[Math.floor(Math.random() * purpleHues.length)];
  };

  // Create all background elements
  useEffect(() => {
    // Create meteors with varied sizes and speeds
    const meteorCount = 20;
    const newMeteors = Array.from({ length: meteorCount }, (_, i) => ({
      id: i,
      delay: Math.random() * 15,
      left: Math.random() * window.innerWidth,
      opacity: 0.6 + Math.random() * 0.4,
      size: 1 + Math.random() * 3,
      speed: 3 + Math.random() * 7
    }));
    setMeteors(newMeteors);

    // Create background stars with more variety
    const starCount = 150;
    const newStars = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 0.5 + Math.random() * 2.5,
      delay: Math.random() * 8,
      duration: 2 + Math.random() * 8,
      opacity: 0.1 + Math.random() * 0.9,
    }));
    setStars(newStars);

    // Create nebulae (gas clouds) for depth
    const nebulaCount = 6;
    const newNebulae = Array.from({ length: nebulaCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 50 + Math.random() * 200,
      color: generateNebulaColor(),
      opacity: 0.1 + Math.random() * 0.3,
    }));
    setNebulae(newNebulae);

    // Create falling stars with trails
    const createFallingStars = () => {
      const count = 1 + Math.floor(Math.random() * 3);
      return Array.from({ length: count }, (_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 100,
        size: 1 + Math.random() * 3,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 5,
        trail: 20 + Math.random() * 40
      }));
    };

    const interval = setInterval(() => {
      setFallingStars(prev => [...prev.slice(-30), ...createFallingStars()]);
    }, 1500);

    // Initial set of falling stars
    setFallingStars(createFallingStars());

    return () => {
      clearInterval(interval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-dark-purple via-[#201b32] to-[#151220] opacity-95"></div>
      
      {/* Nebulae (gas clouds) */}
      {nebulae.map(nebula => (
        <div
          key={nebula.id}
          className="absolute rounded-full blur-3xl"
          style={{
            left: `${nebula.x}%`,
            top: `${nebula.y}%`,
            width: `${nebula.size}px`,
            height: `${nebula.size}px`,
            background: nebula.color,
            opacity: nebula.opacity,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxYTFhMWEiIGZpbGwtb3BhY2l0eT0iMC4wNCIgPjxwYXRoIGQ9Ik0zNiAxOGMxLjIyOCAwIDIuNDQyLjE5NCAzLjYxMy41ODFhOC45NjcgOC45NjcgMCAwMTMuMDMgMS41NzUgOC45NjcgOC45NjcgMCAwMTIuMDMgMi40MTIgOC45OCA4Ljk4IDAgMDEuNzQ2IDEuNzQzYy4xNjUuNTI2LjI5IDEuMDcuMzMgMS42MjJsLjAyNS41ODRjLjAwMyAxLjAxLS4xNjYgMi4wMS0uNDk1IDIuOTYtLjMzLjk1MS0uODIgMS44Mi0xLjQ0MyAyLjU3NmE4Ljk2OCA4Ljk2OCAwIDAxLTIuNDEyIDIuMDNjLS45NDQuNTU4LTEuOTgyLjk1LTMuMDc1IDEuMTZMMzggMzVhMTEgMTEgMCAxMTAtMTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-8"></div>
      
      {/* Stars */}
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            '--size': `${star.size}px`,
            '--duration': `${star.duration}s`,
            '--delay': `${star.delay}s`,
            '--opacity': star.opacity,
          } as React.CSSProperties}
        />
      ))}
      
      {/* Meteors with enhanced styles */}
      {meteors.map(meteor => (
        <div
          key={meteor.id}
          className="absolute h-px transform rotate-[215deg] rounded-[9999px] bg-gradient-to-r from-portfolio-light-purple to-portfolio-soft-purple shadow-[0_0_3px_rgba(155,135,245,0.6)]"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
            width: `${30 + meteor.size * 30}px`,
            opacity: meteor.opacity,
            animation: `meteor ${meteor.speed}s linear infinite ${meteor.delay}s`,
          }}
        >
          <div className="absolute top-1/2 -ml-[50px] h-[1px] w-[50px] -translate-y-1/2 transform bg-gradient-to-r from-[#ffffff00] to-portfolio-light-purple"></div>
        </div>
      ))}
      
      {/* Falling stars with enhanced trails */}
      {fallingStars.map(star => (
        <div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.left}%`,
            top: '-5vh',
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `star-fall ${star.duration}s linear infinite ${star.delay}s`,
          }}
        >
          <div 
            className="w-full h-full rounded-full bg-white shadow-[0_0_10px_2px_rgba(155,135,245,0.8)]"
          />
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1px] rounded-full bg-gradient-to-b from-white to-transparent"
            style={{
              height: `${star.trail}px`,
              opacity: 0.4,
            }}
          />
        </div>
      ))}
      
      {/* Pulsating glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-portfolio-purple/5 via-transparent to-portfolio-purple/5 animate-pulse opacity-30"></div>
    </div>
  );
};

export default BackgroundEffects;
