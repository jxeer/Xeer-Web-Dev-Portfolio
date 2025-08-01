import { motion } from "framer-motion";

export default function ProjectsSection() {
  const companies = [
    { name: "SHOPIFY", accent: true },
    { name: "TECHCORP", accent: false },
    { name: "REACTLAB", accent: true },
    { name: "STARTUPX", accent: false }
  ];

  return (
    <section id="projects" className="section-full relative" style={{ backgroundColor: 'hsl(251, 91%, 20%)' }}>
      {/* Decorative geometric elements */}
      <div 
        className="absolute top-1/4 right-1/4 w-32 h-32 border opacity-30 rotate-45"
        style={{ borderColor: 'hsl(84, 81%, 44%)' }}
      />
      <div 
        className="absolute bottom-1/3 left-1/4 w-16 h-16 opacity-20 rounded-full animate-float"
        style={{ backgroundColor: 'hsl(84, 81%, 44%)' }}
      />
      
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: 'hsl(84, 81%, 44%)' }}>
            Over the years,
          </h2>
          <div className="space-y-6 text-white">
            <p className="text-lg leading-relaxed">
              I've built products for companies and businesses around 
              the globe ranging from marketing websites to complex 
              solutions and enterprise apps with focus on fast, elegant 
              and accessible user experiences.
            </p>
            
            <p className="text-lg leading-relaxed">
              Currently, I work as a Senior Full Stack Engineer 
              crafting thoughtful and inclusive experiences that adhere 
              to web standards for over 3 million users across the 
              world.
            </p>
            
            <p className="text-lg leading-relaxed">
              Before now, I was Principal Full Stack Engineer at TechCorp, 
              where I worked on a suite of tools and services tailored 
              towards automated business compliance for multi-channel 
              sellers globally.
            </p>
            
            <p className="text-lg leading-relaxed">
              Prior to TechCorp, I was Senior full stack engineering 
              consultant with ReactLab, building JavaScript 
              applications and interfaces for orgs and individuals.
            </p>
            
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
                  style={company.accent ? {} : { backgroundColor: 'hsla(84, 81%, 44%, 0.2)' }}
                >
                  {company.name}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Floating geometric elements */}
          <div 
            className="absolute top-0 right-0 w-8 h-8 opacity-60 animate-pulse-slow"
            style={{ backgroundColor: 'hsl(84, 81%, 44%)' }}
          />
          <div className="absolute bottom-0 left-0 w-6 h-6 border border-white opacity-40" />
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white opacity-30 rounded-full animate-float" />
        </motion.div>
      </div>
    </section>
  );
}
