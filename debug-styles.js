// Debug script to check what styles are being applied
console.log('=== DEBUGGING SECTION BACKGROUNDS ===');

const sections = document.querySelectorAll('section');
sections.forEach((section, index) => {
  const computed = window.getComputedStyle(section);
  console.log(`Section ${index + 1}:`, {
    id: section.id,
    backgroundColor: computed.backgroundColor,
    background: computed.background,
    backgroundImage: computed.backgroundImage,
    height: computed.height,
    minHeight: computed.minHeight
  });
});

// Also check body and html
console.log('Body styles:', {
  backgroundColor: window.getComputedStyle(document.body).backgroundColor,
  background: window.getComputedStyle(document.body).background
});

console.log('HTML styles:', {
  backgroundColor: window.getComputedStyle(document.documentElement).backgroundColor,
  background: window.getComputedStyle(document.documentElement).background
});