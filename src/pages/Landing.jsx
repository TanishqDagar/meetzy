import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ParticleField from '../components/three/ParticleField';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden bg-bg-base font-body">
      {/* Soft Background Blobs & Particles */}
      <div className="absolute inset-0 bg-mesh-soft opacity-30 z-0 pointer-events-none" />
      
      {/* Three.js Background Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
          <ambientLight intensity={1.5} />
          <ParticleField />
        </Canvas>
      </div>

      {/* Subtle Floating Elements */}
      <div className="absolute top-[15%] left-[15%] w-64 h-64 bg-sage/5 blur-[120px] rounded-full animate-float opacity-40 mix-blend-multiply" />
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-lavender/5 blur-[140px] rounded-full animate-float opacity-30 mix-blend-multiply delay-1000" />

      {/* 1. Minimal Navigation Bar */}
      <nav className="relative z-50 px-10 py-8 flex justify-between items-center bg-transparent">
        <div className="font-heading text-2xl tracking-tighter text-[#2d3748] cursor-pointer">
          Meetzy
        </div>
        <div className="flex gap-8 items-center">
          <button 
            onClick={() => navigate('/login')}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted hover:text-text-main transition-colors"
          >
            Sign In
          </button>
          <button 
            onClick={() => navigate('/signup')}
            className="px-6 py-3 bg-white/40 backdrop-blur-md border border-white/60 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-[#2d3748] hover:bg-white/80 transition-all shadow-sm"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* 2. Focused Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-100px)] text-center px-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="mb-6 inline-block font-accent text-[9px] uppercase tracking-[0.5em] text-sage/60 py-2"
        >
            A Place of Empathy
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-6xl md:text-8xl mb-8 tracking-tighter text-[#2d3748] text-glow-sage leading-tight"
        >
          Be Understood,<br />Not Judged
        </motion.h1>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.5, duration: 1.2 }}
           className="space-y-4 mb-14"
        >
          <p className="font-body text-md md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            A safe space where people connect through shared emotional experiences instead of appearance, popularity, or identity.
          </p>
          <p className="font-accent text-[10px] uppercase tracking-[0.4em] text-sage font-bold">
            Anonymous conversations. Real understanding.
          </p>
        </motion.div>

        {/* 3. Primary Call To Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <button 
            onClick={() => navigate('/signup')}
            className="group relative px-16 py-6 bg-white text-[#2d3748] rounded-full font-body font-bold text-sm tracking-wide shadow-2xl shadow-indigo-100/40 hover:scale-105 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-sage/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Get Started</span>
          </button>
        </motion.div>
      </main>

      {/* Footer Minimal Mark */}
      <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none">
          <p className="font-accent text-[8px] uppercase tracking-[0.6em] text-text-muted/20">
              Privacy First · Empathy Always
          </p>
      </div>
    </div>
  );
};

export default Landing;
