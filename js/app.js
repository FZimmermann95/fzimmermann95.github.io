const navLinks = document.getElementsByClassName('nav-link');
const sections = document.querySelectorAll('section');

function detectScrollPosition() {
  sections.forEach(section => {
    const navRefs = ['about-link', 'experience-link', 'project-link']
    const currentNavRef = section.getAttribute('data-nav');
    const position = section.getBoundingClientRect();
    if (position.top < (window.innerHeight * 0.25) && position.bottom >= 0) {
      if (!section.classList.contains('active')) {
        navLinks.namedItem(currentNavRef).classList.add('active');
        navRefs.filter(e => e !== currentNavRef).forEach(navRef => {
          navLinks.namedItem(navRef).classList.remove('active');
        })
      }
    }
  })
}

detectScrollPosition();
window.onscroll = () => {
  detectScrollPosition();
};
