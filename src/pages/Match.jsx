import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import MoodOrb from '../components/three/MoodOrb';
import { mockProfiles } from '../data/mockProfiles';

const Match = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-bg-base pt-40 pb-24 px-8 overflow-hidden relative">
            <div className="absolute inset-0 bg-mesh-soft opacity-30 z-0 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <header className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block font-mono text-[9px] uppercase tracking-[0.5em] text-sage/60 py-2 border-b border-sage/10 mb-8"
                    >
                        Your Curated Connections
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-heading text-6xl mb-6 text-[#2d3748]"
                    >
                        Find Those Who Understand
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="font-ui text-text-muted text-sm max-w-lg leading-relaxed"
                    >
                        These people share similar experiences and temperaments. 
                        No images, no judgment, just conversation and shared perspectives.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {mockProfiles.map((profile, i) => (
                        <motion.div
                            key={profile.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 1 }}
                            whileHover={{ y: -8 }}
                            className="group relative p-10 rounded-[50px] bg-white border border-white/60 hover:border-sage/20 transition-all duration-700 cursor-pointer shadow-3xl shadow-indigo-100/20"
                        >
                            <div className="flex justify-between items-start mb-10">
                                <span className="font-mono text-[10px] tracking-[0.2em] text-sage font-bold uppercase py-2 px-4 bg-sage/5 rounded-xl">
                                    {profile.id}
                                </span>
                                <div className="w-20 h-20 pointer-events-none">
                                    <Canvas>
                                        <ambientLight intensity={1.5} />
                                        <MoodOrb color={i % 2 === 0 ? "#a3a6cc" : "#8caf9f"} />
                                    </Canvas>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-10">
                                {profile.traits.map(trait => (
                                    <span key={trait} className="px-4 py-2 bg-text-muted/5 border border-transparent rounded-full text-[9px] font-mono text-text-muted font-bold uppercase tracking-widest group-hover:bg-sage/5 group-hover:text-sage group-hover:border-sage/10 transition-all duration-500">
                                        {trait}
                                    </span>
                                ))}
                            </div>

                            <div className="mb-10 border-l-2 border-sage/10 pl-6 py-2">
                                <p className="font-ui text-[13px] text-text-muted italic leading-relaxed group-hover:text-[#2d3748] transition-colors line-clamp-2">
                                    "{profile.reason}"
                                </p>
                            </div>

                            <div className="flex items-center gap-3 mb-10 text-[10px] font-mono text-text-muted/40 tracking-[0.2em] uppercase font-bold">
                                <div className={`w-2 h-2 rounded-full ${profile.preference === 'Listener' ? 'bg-sage' : 'bg-lavender'} animate-pulse`} />
                                {profile.preference}
                            </div>

                            <button 
                                onClick={() => navigate(`/chat/${profile.id}`)}
                                className="w-full py-5 rounded-[28px] bg-bg-base border border-transparent font-ui font-bold text-sm text-[#2d3748] hover:bg-[#2d3748] hover:text-white transition-all duration-700 shadow-xl shadow-transparent hover:shadow-indigo-900/10"
                            >
                                Start Conversation
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Match;
