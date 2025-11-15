// Main JavaScript for Laura's Travel Website

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
    }, 300);
  }
});

// ============================================
// Mobile Menu Toggle
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');

      // Toggle icons
      if (menuIcon && closeIcon) {
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        if (menuIcon && closeIcon) {
          menuIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        }
      }
    });
  }
});

// ============================================
// Navbar Scroll Effect
// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Add background and shadow when scrolled
  if (currentScroll > 50) {
    navbar?.classList.add('glass-effect', 'shadow-medium');
  } else {
    navbar?.classList.remove('glass-effect', 'shadow-medium');
  }

  lastScroll = currentScroll;
});

// ============================================
// Scroll Reveal Animation
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all scroll-reveal elements
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.scroll-reveal');
  reveals.forEach(element => {
    revealObserver.observe(element);
  });
});

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
          const offset = 80; // Account for fixed navbar
          const targetPosition = target.offsetTop - offset;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});

// ============================================
// Newsletter Form Handler
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const newsletterForms = document.querySelectorAll('form');

  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      const emailInput = form.querySelector('input[type="email"]');

      // Only handle newsletter forms (those with email input)
      if (emailInput) {
        e.preventDefault();
        const email = emailInput.value;

        if (email) {
          // Show success message
          const button = form.querySelector('button[type="submit"]');
          const originalText = button.textContent;

          button.textContent = 'Subscribed!';
          button.classList.add('bg-forest-green');

          // Reset form
          emailInput.value = '';

          // Reset button after 3 seconds
          setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('bg-forest-green');
          }, 3000);

          // Here you would typically send this to your backend or email service
          // Example:
          // fetch('/api/subscribe', {
          //   method: 'POST',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify({ email })
          // });

          console.log(`Newsletter subscription for: ${email}`);
        }
      }
    });
  });
});

// ============================================
// Parallax Effect for Hero Section
// ============================================
const heroSections = document.querySelectorAll('section.relative.min-h-screen');

if (heroSections.length > 0) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.3;

    heroSections.forEach(hero => {
      if (scrolled < window.innerHeight) {
        const content = hero.querySelector('.container-custom');
        if (content) {
          content.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
      }
    });
  });
}

// ============================================
// Stats Counter Animation
// ============================================
const animateCounter = (element, target, duration = 2000) => {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + '+';
    }
  }, 16);
};

// Observe stats sections
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const stats = entry.target.querySelectorAll('[class*="text-5xl"]');
      stats.forEach(stat => {
        const text = stat.textContent;
        const match = text.match(/(\d+)/);
        if (match) {
          const target = parseInt(match[1]);
          animateCounter(stat, target);
        }
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
  const statsSection = document.querySelector('.grid.grid-cols-2');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }
});

// ============================================
// Performance Optimization: Debounce Function
// ============================================
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function executedFunction() {
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

// ============================================
// Image Lazy Loading Enhancement
// ============================================
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  });
}

// ============================================
// Console Welcome Message
// ============================================
console.log(
  '%c✈️ Welcome to Laura\'s Travel Website! ',
  'background: #1E40AF; color: white; font-size: 16px; padding: 10px; border-radius: 5px; font-weight: bold;'
);
console.log(
  '%cBuilt with modern design and wanderlust 🌍',
  'color: #065F46; font-size: 12px; font-weight: 500;'
);
