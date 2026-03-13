import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) {
            setIsHovering(true);
        } else {
            setIsHovering(false);
        }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div 
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] border border-[#2d3748]/10 hidden md:block"
      animate={{ 
        x: mousePos.x - 16, 
        y: mousePos.y - 16,
        scale: isHovering ? 2 : 1,
        backgroundColor: isHovering ? 'rgba(139, 175, 159, 0.1)' : 'rgba(45, 55, 72, 0.05)',
        borderColor: isHovering ? 'rgba(139, 175, 159, 0.3)' : 'rgba(45, 55, 72, 0.1)'
      }}
      transition={{ 
        type: 'spring', 
        damping: 30, 
        stiffness: 250, 
        mass: 0.5,
        scale: { duration: 0.5 }
      }}
    />
  );
};

export default CustomCursor;
