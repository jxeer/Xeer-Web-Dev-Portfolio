import { motion } from "framer-motion";
import profileImage from "@assets/selfie-icon_1754085792865.jpg";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="section-full relative overflow-hidden"
      style={{
        backgroundColor: '#1E1E1E',
        backgroundImage: `
          radial-gradient(circle, rgba(128, 128, 128, 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, #1E1E1E 0%, #2A2A2A 100%)
        `,
        backgroundSize: '25px 25px, 100% 100%',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-20">
        <div className="dot-pattern w-full h-full" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-white opacity-20 rounded-lg" />
      <div className="absolute top-1/2 right-16 w-8 h-8 bg-white opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-12 w-4 h-4 border border-white opacity-30" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-white text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Full Stack<br />
              <span style={{ color: 'var(--accent-purple)' }}>Developer.</span>
            </h1>
            <p className="text-white text-lg mb-12 opacity-90">
              I like to craft scalable web applications with 
              great user experiences and robust backends.
            </p>
            
            {/* Skill blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-white">
              <div>
                <div className="font-semibold mb-1">Highly skilled at full-stack</div>
                <div className="opacity-80 text-xs">development, modern frameworks & UI Engineering.</div>
              </div>
              <div>
                <div className="font-semibold mb-1">Proven experience building</div>
                <div className="opacity-80 text-xs">successful products for clients across several countries.</div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img 
                src={profileImage}
                alt="Julian Xeer - Full Stack Developer" 
                className="w-72 h-80 object-cover rounded-lg shadow-2xl relative z-10" 
              />
              {/* Decorative frame elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-white opacity-30" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-white opacity-40" />
              <div 
                className="absolute top-1/2 -right-8 w-4 h-4 opacity-60"
                style={{ backgroundColor: 'var(--accent-purple)' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}