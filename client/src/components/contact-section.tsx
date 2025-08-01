import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="section-full relative" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-12 rounded-lg shadow-lg border-l-4"
          style={{ borderLeftColor: '#A259FF' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--dark-grey)' }}>
            I build &<br />
            design stuff
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Open source<br />
            projects, web apps<br />
            and experimentals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 px-8 py-3 font-medium transition-all duration-300 hover:text-white"
            style={{ 
              borderColor: 'var(--dark-grey)',
              color: 'var(--dark-grey)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--dark-grey)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--dark-grey)';
            }}
          >
            SEE MY WORK →
          </motion.button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white p-12 rounded-lg shadow-lg border-l-4"
          style={{ borderLeftColor: 'var(--accent-purple)' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--dark-grey)' }}>
            I write,<br />
            sometimes
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            About design,<br />
            full stack dev,<br />
            learning and life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 px-8 py-3 font-medium transition-all duration-300 hover:text-white"
            style={{ 
              borderColor: 'var(--dark-grey)',
              color: 'var(--dark-grey)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--dark-grey)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--dark-grey)';
            }}
          >
            READ MY ARTICLES →
          </motion.button>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-8 top-1/2 flex flex-col space-y-2">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--dark-grey)' }} />
        <div className="w-1 h-1 bg-gray-500 rounded-full" />
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--dark-grey)' }} />
        <div className="w-1 h-1 bg-gray-500 rounded-full" />
      </div>
    </section>
  );
}