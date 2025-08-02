// Navigation Component - Fixed header with hamburger menu and slide-out navigation
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  // State for controlling mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle hamburger menu open/closed
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle navigation clicks - smooth scroll to sections and close menu
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  return (
    <>
      {/* Fixed Header - Always visible at top of page */}
      <header className="fixed top-0 left-0 right-0 z-40 p-8 flex justify-between items-center">
        {/* Logo/Name - Edit this to your name */}
        <div className="text-2xl font-bold" style={{ color: 'var(--accent-purple)' }}>
          Julian Xeer
        </div>
        
        {/* Hamburger Menu Button - Animated lines */}
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none z-50 relative"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <motion.span
              className="block w-6 h-0.5 bg-white origin-center"
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-white"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-white origin-center"
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </button>
      </header>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-full z-30 flex items-center justify-center"
            style={{ backgroundColor: 'var(--dark-grey)' }}
          >
            <nav className="text-center space-y-8">
              {[
                { label: "Home", id: "home" },
                { label: "About", id: "about" },
                { label: "Projects", id: "projects" },
                { label: "Contact", id: "contact" }
              ].map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  onClick={() => handleNavClick(item.id)}
                  className="block text-white text-2xl font-medium hover:text-accent transition-colors duration-300"
                  style={{ '--accent': 'var(--accent-purple)' } as any}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-purple)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
