function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  // Function to scroll to top
  function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Function to show/hide back to top button based on scroll position
  window.addEventListener('scroll', function() {
      const btnTop = document.getElementById('btnTop');
      if (window.scrollY > 50) {
          btnTop.style.display = 'block';
      } else {
          btnTop.style.display = 'none';
      }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const sectionId = this.getAttribute('href').substring(1);
          scrollToSection(sectionId);
      });
  });