
import { useEffect, useState } from 'react';

interface Meteor {
  id: number;
  delay: number;
  left: number;
  opacity: number;
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
}

const BackgroundEffects = () => {
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  const [stars, setStars] = useState<Star[]>([]);
  const [fallingStars, setFallingStars] = useState<FallingStar[]>([]);

  // Create meteors
  useEffect(() => {
    const meteorCount = 15;
    const newMeteors = Array.from({ length: meteorCount }, (_, i) => ({
      id: i,
      delay: Math.random() * 10,
      left: Math.random() * window.innerWidth,
      opacity: 0.7 + Math.random() * 0.3,
    }));
    setMeteors(newMeteors);

    // Create background stars
    const starCount = 100;
    const newStars = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 7,
      opacity: 0.1 + Math.random() * 0.9,
    }));
    setStars(newStars);

    // Create falling stars
    const createFallingStars = () => {
      const count = 1 + Math.floor(Math.random() * 3);
      return Array.from({ length: count }, (_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 100,
        size: 1 + Math.random() * 3,
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 6,
      }));
    };

    const interval = setInterval(() => {
      setFallingStars(prev => [...prev.slice(-30), ...createFallingStars()]);
    }, 1000);

    // Initial set of falling stars
    setFallingStars(createFallingStars());

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-portfolio opacity-70"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxYTFhMWEiIGZpbGwtb3BhY2l0eT0iMC4wNCIgPjxwYXRoIGQ9Ik0zNiAxOGMxLjIyOCAwIDIuNDQyLjE5NCAzLjYxMy41ODFhOC45NjcgOC45NjcgMCAwMTMuMDMgMS41NzUgOC45NjcgOC45NjcgMCAwMTIuMDMgMi40MTIgOC45OCA4Ljk4IDAgMDEuNzQ2IDEuNzQzYy4xNjUuNTI2LjI5IDEuMDcuMzMgMS42MjJsLjAyNS41ODRjLjAwMyAxLjAxLS4xNjYgMi4wMS0uNDk1IDIuOTYtLjMzLjk1MS0uODIgMS44Mi0xLjQ0MyAyLjU3NmE4Ljk2OCA4Ljk2OCAwIDAxLTIuNDEyIDIuMDNjLS45NDQuNTU4LTEuOTgyLjk1LTMuMDc1IDEuMTZMMzggMzVhMTEgMTEgMCAxMTAtMTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
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
      
      {/* Meteors */}
      {meteors.map(meteor => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
            '--delay': `${meteor.delay}s`,
            '--opacity': meteor.opacity,
          } as React.CSSProperties}
        />
      ))}
      
      {/* Falling stars */}
      {fallingStars.map(star => (
        <div
          key={star.id}
          className="falling-star"
          style={{
            '--left': `${star.left}%`,
            '--size': `${star.size}px`,
            '--delay': `${star.delay}s`,
            '--duration': `${star.duration}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default BackgroundEffects;
