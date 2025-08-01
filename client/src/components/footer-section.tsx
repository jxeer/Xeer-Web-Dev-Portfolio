import { motion } from "framer-motion";

export default function FooterSection() {
  const socialLinks = [
    { label: "TW", href: "#" },
    { label: "GH", href: "#" },
    { label: "LN", href: "#" },
    { label: "YT", href: "#" }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: 'var(--dark-section)' }}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold mb-6 tracking-wider" style={{ color: 'var(--accent-purple)' }}>
              SAY HELLO
            </h3>
            <div className="space-y-4">
              <motion.a
                href="mailto:hello@julianxeer.dev"
                className="block text-lg transition-colors duration-300"
                style={{ color: 'var(--accent-purple)' }}
                whileHover={{ x: 5 }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-purple)'}
              >
                hello@julianxeer.dev
              </motion.a>
              <motion.a
                href="https://t.me/julianxeer"
                className="block text-lg transition-colors duration-300"
                style={{ color: 'var(--accent-purple)' }}
                whileHover={{ x: 5 }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-purple)'}
              >
                t.me/julianxeer
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {[
                { label: "My Work", href: "#projects" },
                { label: "My Shelf", href: "#" },
                { label: "My Résumé", href: "#" }
              ].map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block text-lg transition-colors duration-300"
                  style={{ color: 'var(--accent-purple)' }}
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-purple)'}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-600 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">© Julian Xeer 2025</p>
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="transition-colors duration-300"
                style={{ color: 'var(--accent-purple)' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-purple)'}
              >
                {social.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}