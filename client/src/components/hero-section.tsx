import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="gradient-bg section-full relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 dot-pattern w-32 h-32 opacity-30" />
      <div 
        className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 opacity-50" 
        style={{ borderColor: 'hsl(84, 81%, 44%)' }}
      />
      <div 
        className="absolute top-1/2 right-16 w-8 h-8 rounded-full opacity-60 animate-pulse-slow"
        style={{ backgroundColor: 'hsl(84, 81%, 44%)' }}
      />

      {/* Main Content */}
      <div className="hero-content max-w-6xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1"
        >
          <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight mb-6">
            Full Stack<br />
            <span style={{ color: 'hsl(84, 81%, 44%)' }}>Developer.</span>
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 max-w-md">
            I like to craft scalable web applications with 
            great user experiences and robust backends.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-sm text-white">
            <div>
              <div className="font-semibold">Highly skilled at full-stack</div>
              <div className="opacity-80">development, modern frameworks & cloud deployment.</div>
            </div>
            <div>
              <div className="font-semibold">Proven experience building</div>
              <div className="opacity-80">successful products for clients across several industries.</div>
            </div>
          </div>
        </motion.div>
        
        {/* Profile Image with decorative frame */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative ml-0 md:ml-16 mt-8 md:mt-0 hidden md:block"
        >
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
            alt="Julian Xeer - Full Stack Developer" 
            className="w-80 h-80 object-cover rounded-lg shadow-2xl" 
          />
          <div 
            className="absolute -top-4 -right-4 w-16 h-16 border-2"
            style={{ borderColor: 'hsl(84, 81%, 44%)' }}
          />
          <div 
            className="absolute -bottom-4 -left-4 w-8 h-8"
            style={{ backgroundColor: 'hsl(84, 81%, 44%)' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
