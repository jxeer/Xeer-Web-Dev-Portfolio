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
          radial-gradient(circle, rgba(200, 200, 200, 0.25) 1px, transparent 1px),
          linear-gradient(to bottom, #1E1E1E 0%, #2A2A2A 100%)
        `,
        backgroundSize: '30px 30px, 100% 100%',
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
      
      {/* Zig-zag decorative elements */}
      <div className="absolute top-20 left-16 opacity-30">
        <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
          <path 
            d="M5 5 L15 5 L15 15 L25 15 L25 25 L35 25 L35 35 L45 35" 
            stroke="rgba(200, 200, 200, 0.6)" 
            strokeWidth="2" 
            fill="none"
          />
        </svg>
      </div>
      
      <div className="absolute bottom-32 right-20 opacity-25">
        <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
          <path 
            d="M10 10 L20 10 L20 20 L30 20 L30 30 L40 30 L40 40 L50 40 L50 50 L60 50" 
            stroke="#A259FF" 
            strokeWidth="2" 
            fill="none"
          />
        </svg>
      </div>
      
      <div className="absolute top-1/3 left-1/2 opacity-20">
        <svg width="50" height="30" viewBox="0 0 50 30" fill="none">
          <path 
            d="M5 25 L15 25 L15 15 L25 15 L25 5 L35 5" 
            stroke="rgba(200, 200, 200, 0.5)" 
            strokeWidth="2" 
            fill="none"
          />
        </svg>
      </div>
      
      <div className="absolute bottom-16 left-32 opacity-30">
        <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
          <path 
            d="M5 5 L10 5 L10 10 L15 10 L15 15 L20 15 L20 20 L25 20" 
            stroke="#A259FF" 
            strokeWidth="1.5" 
            fill="none"
          />
        </svg>
      </div>

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