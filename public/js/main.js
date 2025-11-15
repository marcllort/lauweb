// Main JavaScript for Journeys by Laura website

// ============================================
// Page Load Animation
// ============================================
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, 500);
  }
});


// ============================================
// Mobile Menu Toggle
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});


// ============================================
// Scroll Reveal Animation
// ============================================
const revealOnScroll = () => {
  const reveals = document.querySelectorAll('.scroll-reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(element => {
    observer.observe(element);
  });
};

document.addEventListener('DOMContentLoaded', revealOnScroll);


// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});


// ============================================
// Navbar Scroll Effect
// ============================================
let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Add shadow when scrolled
  if (currentScroll > 50) {
    navbar?.classList.add('shadow-lg');
  } else {
    navbar?.classList.remove('shadow-lg');
  }

  lastScroll = currentScroll;
});


// ============================================
// Newsletter Form Handler (Placeholder)
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const newsletterForm = document.querySelector('form');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput?.value;

      if (email) {
        // Placeholder - Replace with actual newsletter service integration
        alert(`Thanks for subscribing! We'll send updates to ${email}`);
        emailInput.value = '';

        // Here you would typically send this to your backend or email service
        // Example:
        // fetch('/api/subscribe', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ email })
        // });
      }
    });
  }
});


// ============================================
// Image Lazy Loading Enhancement
// ============================================
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}


// ============================================
// Parallax Effect for Hero Section
// ============================================
const heroSection = document.querySelector('section.relative.h-screen');

if (heroSection) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;

    const heroContent = heroSection.querySelector('.relative.z-10');
    if (heroContent && scrolled < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
  });
}


// ============================================
// Console Welcome Message
// ============================================
console.log('%c✈️ Welcome to Journeys by Laura! ', 'background: #D2B48C; color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('%cBuilt with love and wanderlust 🌍', 'color: #8C7B70; font-size: 12px;');


// ============================================
// Performance Optimization: Debounce Function
// ============================================
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Use debounce for scroll events to improve performance
window.addEventListener('scroll', debounce(() => {
  // Any additional scroll-based functionality can go here
}, 10));
