// Hero Section Component - Main landing section with animated decorative elements
import { motion } from "framer-motion";
import profileImage from "@assets/selfie-icon_1754085792865.jpg";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="section-full relative overflow-hidden"
      style={{
        // Dark gradient background from dark grey to slightly lighter grey
        backgroundColor: '#1E1E1E',
        backgroundImage: `
          radial-gradient(circle, rgba(200, 200, 200, 0.25) 1px, transparent 1px),
          linear-gradient(to bottom, #1E1E1E 0%, #2A2A2A 100%)
        `,
        // First value is dot spacing, second is gradient coverage
        backgroundSize: '30px 30px, 100% 100%',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      {/* Static Decorative Elements - Basic geometric shapes for visual interest */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-20">
        <div className="dot-pattern w-full h-full" />
      </div>
      {/* Rounded rectangle border - positioned bottom-left */}
      <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-white opacity-20 rounded-lg" />
      {/* Pulsing solid square - this one pulses in sync with other animated elements */}
      <div className="absolute top-1/2 right-16 w-8 h-8 bg-white opacity-20 animate-pulse-slow" />
      {/* Small border square - static decoration */}
      <div className="absolute bottom-1/4 right-12 w-4 h-4 border border-white opacity-30" />
      
      {/* Zig-zag decorative elements - Stair-step line patterns with synchronized pulsing */}
      {/* All these elements pulse from opacity 20% to higher opacity in 3-second cycles */}
      
      {/* Top-left zig-zag - light grey color */}
      <div className="absolute top-20 left-16 animate-pulse-slow opacity-20">
        <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
          <path 
            d="M5 5 L20 5 L20 20 L35 20 L35 35 L50 35 L50 50 L65 50" 
            stroke="rgba(200, 200, 200, 0.8)" 
            strokeWidth="3" 
            fill="none"
          />
        </svg>
      </div>
      
      {/* Bottom-right zig-zag - purple accent color */}
      <div className="absolute bottom-32 right-20 animate-pulse-slow opacity-20">
        <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
          <path 
            d="M10 10 L25 10 L25 25 L40 25 L40 40 L55 40 L55 55 L70 55" 
            stroke="#A259FF" 
            strokeWidth="3" 
            fill="none"
          />
        </svg>
      </div>
      
      <div className="absolute top-1/3 left-1/2 animate-pulse-slow opacity-20">
        <svg width="70" height="40" viewBox="0 0 70 40" fill="none">
          <path 
            d="M5 35 L20 35 L20 20 L35 20 L35 5 L50 5" 
            stroke="rgba(200, 200, 200, 0.7)" 
            strokeWidth="3" 
            fill="none"
          />
        </svg>
      </div>
      
      <div className="absolute bottom-16 left-32 animate-pulse-slow opacity-20">
        <svg width="60" height="35" viewBox="0 0 60 35" fill="none">
          <path 
            d="M5 5 L15 5 L15 15 L25 15 L25 25 L35 25 L35 35 L45 35" 
            stroke="#A259FF" 
            strokeWidth="2.5" 
            fill="none"
          />
        </svg>
      </div>
      
      <div className="absolute top-16 right-1/3 animate-pulse-slow opacity-20">
        <svg width="65" height="30" viewBox="0 0 65 30" fill="none">
          <path 
            d="M10 25 L20 25 L20 15 L30 15 L30 5 L40 5 L40 15 L50 15" 
            stroke="rgba(200, 200, 200, 0.6)" 
            strokeWidth="2.5" 
            fill="none"
          />
        </svg>
      </div>
      
      <div className="absolute bottom-40 left-16 animate-pulse-slow opacity-20">
        <svg width="55" height="25" viewBox="0 0 55 25" fill="none">
          <path 
            d="M5 20 L12 20 L12 12 L20 12 L20 4 L28 4 L28 12 L36 12" 
            stroke="#A259FF" 
            strokeWidth="2" 
            fill="none"
          />
        </svg>
      </div>
      
      {/* Circle decorative elements - Varied sizes from tiny (2x2) to large (14x14) */}
      {/* All circles pulse in sync with the zig-zag elements and grey box */}
      
      {/* Large purple circle - top right */}
      <div className="absolute top-32 right-32 w-12 h-12 rounded-full animate-pulse-slow opacity-20" style={{ backgroundColor: '#A259FF' }} />
      
      {/* Tiny grey circle - bottom right area */}
      <div className="absolute bottom-24 right-1/3 w-2 h-2 rounded-full animate-pulse-slow opacity-20" style={{ backgroundColor: 'rgba(200, 200, 200, 0.8)' }} />
      
      {/* Medium purple circle - left side middle */}
      <div className="absolute top-1/2 left-20 w-8 h-8 rounded-full animate-pulse-slow opacity-20" style={{ backgroundColor: '#A259FF' }} />
      
      {/* Small purple circle - top left area */}
      <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full animate-pulse-slow opacity-20" style={{ backgroundColor: '#A259FF' }} />
      
      {/* Tiny purple circle - bottom right */}
      <div className="absolute top-3/4 right-24 w-2 h-2 rounded-full animate-pulse-slow opacity-20" style={{ backgroundColor: '#A259FF' }} />
      
      {/* Medium grey circle - top left */}
      <div className="absolute top-40 left-24 w-6 h-6 rounded-full animate-pulse-slow opacity-20" style={{ backgroundColor: 'rgba(200, 200, 200, 0.8)' }} />
      
      {/* Large purple circle - bottom center */}
      <div className="absolute bottom-12 right-1/2 w-14 h-14 rounded-full animate-pulse-slow opacity-20" style={{ backgroundColor: '#A259FF' }} />
      
      {/* Small grey circle - top right */}
      <div className="absolute top-20 right-20 w-4 h-4 rounded-full animate-pulse-slow opacity-20" style={{ backgroundColor: 'rgba(200, 200, 200, 0.9)' }} />

      {/* Main Content - Two-column layout with text and profile image */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}  // Slides in from left
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main heading - "Full Stack" in white, "Developer." in purple */}
            <h1 className="text-white text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Full Stack<br />
              <span style={{ color: 'var(--accent-purple)' }}>Developer.</span>
            </h1>
            {/* Tagline/description */}
            <p className="text-white text-lg mb-12 opacity-90">
              I like to craft scalable web applications with 
              great user experiences and robust backends.
            </p>
            
            {/* Skill highlight blocks - Two column grid showing key strengths */}
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