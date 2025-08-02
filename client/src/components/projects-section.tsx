// Projects Section Component - Dark background section showcasing work experience
import { motion } from "framer-motion";

export default function ProjectsSection() {
  // Company/project data - You can edit these names and add/remove companies
  const companies = [
    { name: "SHOPIFY", accent: true },    // accent: true = uses special styling
    { name: "TECHCORP", accent: false },  // accent: false = uses default styling
    { name: "REACTLAB", accent: true },
    { name: "STARTUPX", accent: false }
  ];

  return (
    <section 
      id="projects" 
      className="section-full relative"
      style={{
        // Same dark gradient background as Hero and Footer sections
        backgroundColor: '#1E1E1E',
        backgroundImage: `
          radial-gradient(circle, rgba(200, 200, 200, 0.25) 1px, transparent 1px),
          linear-gradient(to bottom, #1E1E1E 0%, #2A2A2A 100%)
        `,
        backgroundSize: '30px 30px, 100% 100%', // Dot spacing and gradient coverage
        minHeight: '100vh',
        width: '100%'
      }}
    >
      {/* Decorative geometric elements for visual interest */}
      {/* Rotated square border - top right */}
      <div 
        className="absolute top-1/4 right-1/4 w-32 h-32 border opacity-30 rotate-45"
        style={{ borderColor: 'var(--accent-purple)' }}
      />
      {/* Floating purple circle - bottom left, has gentle floating animation */}
      <div 
        className="absolute bottom-1/3 left-1/4 w-16 h-16 opacity-20 rounded-full animate-float"
        style={{ backgroundColor: 'var(--accent-purple)' }}
      />
      
      {/* Main content container - Two column layout */}
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column - Work Experience Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}  // Slides in from left
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section heading in purple accent color */}
          <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: 'var(--accent-purple)' }}>
            Over the years,
          </h2>
          
          {/* Work experience descriptions - You can edit these to match your actual experience */}
          <div className="space-y-6 text-white">
            {/* General overview */}
            <p className="text-lg leading-relaxed">
              I've built products for companies and businesses around 
              the globe ranging from marketing websites to complex 
              solutions and enterprise apps with focus on fast, elegant 
              and accessible user experiences.
            </p>
            
            {/* Current role - Edit this to reflect your actual current position */}
            <p className="text-lg leading-relaxed">
              Currently, I work as a Senior Full Stack Engineer 
              crafting thoughtful and inclusive experiences that adhere 
              to web standards for over 3 million users across the 
              world.
            </p>
            
            {/* Previous role at TechCorp - Replace with your actual experience */}
            <p className="text-lg leading-relaxed">
              Before now, I was Principal Full Stack Engineer at TechCorp, 
              where I worked on a suite of tools and services tailored 
              towards automated business compliance for multi-channel 
              sellers globally.
            </p>
            
            {/* ReactLab consultant role - Replace with your actual experience */}
            <p className="text-lg leading-relaxed">
              Prior to TechCorp, I was Senior full stack engineering 
              consultant with ReactLab, building JavaScript 
              applications and interfaces for orgs and individuals.
            </p>
            
            {/* StartupX leadership role - Replace with your actual experience */}
            <p className="text-lg leading-relaxed">
              I once also led the development team at StartupX, an e-
              learning startup through building multiple React 
              applications into a single robust learning platform.
            </p>
          </div>
        </motion.div>
        
        {/* Floating project logos/elements */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-8 items-center justify-center">
              {companies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className={`font-bold text-xl px-4 py-2 rounded ${
                    company.accent 
                      ? 'text-white bg-white bg-opacity-10' 
                      : 'text-white bg-opacity-20'
                  }`}
                  style={company.accent ? {} : { backgroundColor: 'hsla(162, 100%, 50%, 0.2)' }}
                >
                  {company.name}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Floating geometric elements */}
          <div 
            className="absolute top-0 right-0 w-8 h-8 opacity-60 animate-pulse-slow"
            style={{ backgroundColor: 'var(--accent-purple)' }}
          />
          <div className="absolute bottom-0 left-0 w-6 h-6 border border-white opacity-40" />
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white opacity-30 rounded-full animate-float" />
        </motion.div>
      </div>
    </section>
  );
}
