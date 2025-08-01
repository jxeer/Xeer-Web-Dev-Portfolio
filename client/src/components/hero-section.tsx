import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="hero-split-bg section-full relative overflow-hidden">
      {/* Left Side - Dark Grey */}
      <div className="absolute inset-0 w-1/2 left-0">
        {/* Decorative curved line */}
        <div className="absolute bottom-1/4 left-8 w-32 h-32 border-l-2 border-b-2 border-white opacity-20 rounded-bl-full" />
        {/* Decorative stairs pattern */}
        <div className="absolute bottom-1/3 right-8">
          <div className="flex flex-col space-y-1">
            <div className="w-4 h-1 bg-white opacity-30" />
            <div className="w-6 h-1 bg-white opacity-30 ml-2" />
            <div className="w-8 h-1 bg-white opacity-30 ml-4" />
          </div>
        </div>
      </div>

      {/* Right Side - Light Purple */}
      <div className="absolute inset-0 w-1/2 right-0">
        {/* Dot pattern */}
        <div className="absolute top-1/4 left-8 dot-pattern w-24 h-24" />
        {/* Step pattern */}
        <div className="absolute bottom-1/3 right-8">
          <div className="flex flex-col space-y-1">
            <div className="w-2 h-1 bg-gray-600 opacity-40" />
            <div className="w-4 h-1 bg-gray-600 opacity-40 ml-1" />
            <div className="w-6 h-1 bg-gray-600 opacity-40 ml-2" />
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-1/2 right-16 flex flex-col space-y-2">
          <div className="w-2 h-2 bg-gray-600 opacity-60" />
          <div className="w-1 h-1 bg-gray-600 opacity-40 rounded-full" />
          <div className="w-2 h-2 bg-gray-600 opacity-60" />
          <div className="w-1 h-1 bg-gray-600 opacity-40 rounded-full" />
        </div>
        <div className="absolute bottom-1/4 right-12 w-4 h-4 border border-gray-600 opacity-40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex">
        {/* Left Content */}
        <div className="w-1/2 flex items-center px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-lg"
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
        </div>
        
        {/* Right Content - Profile Image */}
        <div className="w-1/2 flex items-center justify-center px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=350" 
                alt="Julian Xeer - Full Stack Developer" 
                className="w-72 h-80 object-cover rounded-lg shadow-2xl relative z-10" 
              />
              {/* Frame border */}
              <div className="absolute -inset-4 border-2 border-gray-700 rounded-lg opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
