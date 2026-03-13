import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, Sparkles, Zap, Heart, Info, Globe, Lock } from 'lucide-react';
import ParticleField from '../components/three/ParticleField';

const Landing = () => {
  const navigate = useNavigate();
  const learnMoreRef = useRef(null);

  const scrollToSection = () => {
    learnMoreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen bg-bg-base font-body selection:bg-sage/20">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-mesh-soft opacity-[0.15]" />
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
          <ambientLight intensity={1.5} />
          <ParticleField />
        </Canvas>
      </div>

      {/* Bespoke Landing Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-white/10 backdrop-blur-3xl border-b border-white/20">
        <div className="font-heading text-2xl tracking-tighter text-[#2d3748]">Meetzy</div>
        <div className="flex gap-4 md:gap-6 items-center">
          <button 
            onClick={() => navigate('/login')}
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-[#2d3748] hover:text-sage transition-colors"
          >
            Sign In
          </button>
          <button 
            onClick={() => navigate('/signup')}
            className="px-8 py-3 bg-[#2d3748] text-white text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full hover:bg-black transition-all shadow-xl shadow-indigo-900/10"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-6 inline-block font-accent text-[10px] uppercase tracking-[0.5em] text-sage/60 py-2 border-b border-sage/10"
        >
            A Place of Empathy
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl md:text-8xl mb-6 tracking-tighter text-[#2d3748] text-glow-sage max-w-4xl"
        >
          Be Understood,<br />Not Judged
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="font-body text-md md:text-xl text-text-muted max-w-2xl mb-8 leading-relaxed italic"
        >
          A personality-safe connection platform focused on empathy, psychological compatibility, and shared experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="max-w-xl mb-16 bg-white/40 backdrop-blur-lg border border-white/60 p-8 rounded-[40px] shadow-3xl shadow-indigo-100/20"
        >
          <p className="font-body text-sm text-text-muted leading-relaxed">
            Our platform allows people with similar psychological experiences to connect anonymously without the pressure of appearance, popularity metrics, or social judgment. Conversations are based on understanding, empathy, and shared emotional experiences.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col md:flex-row gap-6"
        >
          <button 
            onClick={() => navigate('/signup')}
            className="px-14 py-5 bg-white text-[#2d3748] border border-white rounded-[32px] font-body font-bold hover:scale-105 transition-all duration-700 shadow-2xl shadow-indigo-100/30"
          >
            Create Account
          </button>
          <button 
            onClick={scrollToSection}
            className="px-14 py-5 bg-sage/5 text-sage border border-sage/10 rounded-[32px] font-body font-bold hover:bg-sage/10 transition-all duration-700"
          >
            Learn More
          </button>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section ref={learnMoreRef} className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-heading text-4xl md:text-5xl text-[#2d3748] mb-4">How Meetzy Works</h2>
            <div className="w-20 h-1 bg-sage/20 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Lock className="text-sage" />,
                title: "Anonymous Profiles",
                desc: "No profile pictures, no real names. Users interact through aliases and mood-based avatars."
              },
              {
                icon: <Sparkles className="text-lavender" />,
                title: "Psychological Matching",
                desc: "People are matched based on shared experiences, disorders, or complementary emotional traits."
              },
              {
                icon: <Zap className="text-sage" />,
                title: "Swipe-to-Connect",
                desc: "Users can swipe through profiles and start conversations when there is a mutual match."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/60 backdrop-blur-lg border border-white p-12 rounded-[50px] shadow-3xl shadow-indigo-100/10 hover:translate-y-[-8px] transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-[24px] bg-bg-base border border-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-heading text-2xl text-[#2d3748] mb-4 tracking-tight">{item.title}</h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Built This Section */}
      <section className="relative z-10 py-32 px-6 bg-sage/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-[#2d3748] mb-12">Why We Built This</h2>
          <div className="bg-white/40 border border-white/60 p-12 md:p-20 rounded-[60px] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Heart size={120} className="text-sage" />
            </div>
            <p className="font-body text-lg md:text-2xl text-[#2d3748] leading-relaxed relative z-10">
              “Social platforms often encourage judgment based on appearance, status, or popularity. Meetzy removes those pressures and creates a safe environment where people can communicate honestly and find others who truly understand their emotional experiences.”
            </p>
          </div>
        </div>
      </section>

      {/* Feasibility Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-heading text-4xl md:text-5xl text-[#2d3748] mb-4 tracking-tight">Why This Platform Works</h2>
            <div className="w-20 h-1 bg-sage/20 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Anonymous interaction reduces social pressure",
              "Shared experiences create stronger connections",
              "Mood-based avatars maintain privacy while expressing emotions"
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 p-8 border border-[#2d3748]/5 rounded-[32px] bg-white/20"
              >
                <div className="mt-1">
                  <Globe size={24} className="text-sage opacity-40" />
                </div>
                <span className="font-body text-md text-[#2d3748] font-medium leading-relaxed">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-20 px-6 border-t border-white/40 text-center">
        <div className="max-w-xl mx-auto">
          <p className="font-accent text-[10px] uppercase tracking-[0.5em] text-text-muted mb-8 font-bold">
            No profile pictures • No real names • No popularity metrics
          </p>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/60 border border-white rounded-full shadow-lg shadow-indigo-100/10">
            <Info size={14} className="text-sage" />
            <p className="font-body text-[10px] text-text-muted tracking-wide font-medium">
              This platform provides peer support and does not replace professional mental health care.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
