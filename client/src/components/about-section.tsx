// About Section Component - White background section showcasing skills and approach
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="section-full relative" 
      style={{ 
        backgroundColor: '#FFFFFF', // White background (alternating with dark sections)
        minHeight: '100vh',
        width: '100%'
      }}
    >
      {/* Decorative dot patterns - Subtle background elements */}
      <div className="absolute top-1/4 left-1/4 dot-pattern w-24 h-24 opacity-20" />
      <div className="absolute bottom-1/3 right-1/4 dot-pattern w-32 h-32 opacity-20" />
      
      {/* Main content container - Two column layout for skills */}
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column - Design Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}  // Slides up from below
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}  // Animation triggers only once when scrolled into view
        >
          {/* Design section heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: 'var(--dark-grey)' }}>
            Design
          </h2>
          
          {/* Design philosophy and approach */}
          <p className="text-gray-800 text-lg leading-relaxed mb-8">
            I'm probably not the typical developer positioned behind an Illustrator 
            artboard adjusting pixels, but I design. Immersed in stylesheets, 
            tweaking font sizes and contemplating layouts is where you'll find 
            me (:-). I'm committed to creating fluid user experiences while 
            staying fashionable.
          </p>
          
          {/* Pagination dots - Visual indicator (currently shows first item active) */}
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--dark-grey)' }} />
            <div className="w-2 h-2 bg-gray-400 rounded-full" />
            <div className="w-2 h-2 bg-gray-400 rounded-full" />
            <div className="w-2 h-2 bg-gray-400 rounded-full" />
            <div className="w-2 h-2 bg-gray-400 rounded-full" />
          </div>
        </motion.div>
        
        {/* Right Column - Engineering Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}  // Slides up from below
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}  // Slight delay for staggered animation
          viewport={{ once: true }}
        >
          {/* Engineering section heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: 'var(--dark-grey)' }}>
            Engineering
          </h2>
          
          {/* Engineering philosophy and technical approach */}
          <p className="text-gray-800 text-lg leading-relaxed">
            In building full-stack applications, I'm equipped with just the right 
            tools, and can absolutely function independently of them to deliver 
            fast, resilient solutions optimized for scale — performance and 
            scalability are priorities on my radar.
          </p>
        </motion.div>
      </div>

      {/* Side decorative elements - Vertical stack of circles */}
      <div className="absolute right-8 top-1/2 flex flex-col space-y-2">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--dark-grey)' }} />
        <div className="w-1 h-1 bg-gray-500 rounded-full" />
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--dark-grey)' }} />
        <div className="w-1 h-1 bg-gray-500 rounded-full" />
      </div>
    </section>
  );
}
