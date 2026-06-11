// ============================================
// TYPING EFFECT
// ============================================

const roles = [
  "IT Undergraduate",
  "Full-Stack Developer",
  "Java Developer",
  "Web Developer",
  "AI Enthusiast"
];

let currentRoleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeEffect() {
  const typingElement = document.getElementById('typing');
  const currentRole = roles[currentRoleIndex];

  if (!isDeleting) {
    if (currentCharIndex < currentRole.length) {
      typingElement.textContent += currentRole.charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(typeEffect, 80);
    } else {
      isDeleting = true;
      setTimeout(typeEffect, 2000);
    }
  } else {
    if (currentCharIndex > 0) {
      typingElement.textContent = currentRole.substring(0, currentCharIndex - 1);
      currentCharIndex--;
      setTimeout(typeEffect, 60);
    } else {
      isDeleting = false;
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      setTimeout(typeEffect, 500);
    }
  }
}

// Start typing effect when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', typeEffect);
} else {
  typeEffect();
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ============================================
// INTERSECTION OBSERVER - SCROLL REVEAL
// ============================================

const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '#home') {
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

// ============================================
// LAZY LOADING IMAGES
// ============================================

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    imageObserver.observe(img);
  });
} else {
  // Fallback for browsers that don't support IntersectionObserver
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.src = img.dataset.src || img.src;
  });
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    navbar.style.background = 'rgba(8, 17, 41, 0.95)';
    navbar.style.backdropFilter = 'blur(20px)';
    navbar.style.boxShadow = '0 8px 32px rgba(30, 120, 225, 0.1)';
  } else {
    navbar.style.background = 'rgba(8, 17, 41, 0.72)';
    navbar.style.backdropFilter = 'blur(18px)';
    navbar.style.boxShadow = 'none';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============================================
// SKILL PROGRESS ANIMATION
// ============================================

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll('.skill-progress');
      progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('.skills-container');
if (skillsSection) {
  skillObserver.observe(skillsSection);
}

// ============================================
// ENHANCED SCROLL ANIMATIONS
// ============================================

// Add staggered animation to list items
document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${index * 50}ms`;
});
