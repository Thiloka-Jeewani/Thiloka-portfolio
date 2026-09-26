// ============================================
// THEME TOGGLE (dark / light, persisted)
// ============================================

const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('thiloka-theme');

if (savedTheme === 'light') {
  root.setAttribute('data-theme', 'light');
} else {
  root.removeAttribute('data-theme');
}

function updateToggleIcon() {
  if (!themeToggle) return;
  const isLight = root.getAttribute('data-theme') === 'light';
  themeToggle.textContent = isLight ? '☀️' : '🌙';
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
}
updateToggleIcon();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    if (isLight) {
      root.removeAttribute('data-theme');
      localStorage.setItem('thiloka-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('thiloka-theme', 'light');
    }
    updateToggleIcon();
  });
}

// ============================================
// TYPING EFFECT
// ============================================

const roles = [
  "IT Undergraduate",
  "Full-Stack Developer",
  "AI/ML Enthusiast",
  "Hackathon Builder",
  "Web Developer"
];

let currentRoleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeEffect() {
  const typingElement = document.getElementById('typing');
  if (!typingElement) return;
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

document.querySelectorAll('.reveal').forEach((el, index) => {
  el.style.transitionDelay = `${(index % 6) * 60}ms`;
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
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ============================================
// LAZY LOADING IMAGES
// ============================================

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        obs.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    imageObserver.observe(img);
  });
} else {
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.src = img.dataset.src || img.src;
  });
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (navbar) {
    navbar.classList.toggle('scrolled', scrollTop > 80);
  }
}, { passive: true });

// ============================================
// SKILL PROGRESS ANIMATION
// ============================================

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll('.skill-progress');
      progressBars.forEach(bar => {
        const width = bar.dataset.width || bar.style.width;
        bar.dataset.width = width;
        bar.style.width = '0';
        setTimeout(() => { bar.style.width = width; }, 100);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

const skillsSection = document.querySelector('.skills-container');
if (skillsSection) skillObserver.observe(skillsSection);

// ============================================
// SCROLL-VELOCITY MOTION BLUR + PARALLAX ORBS
// (layered depth: background orbs drift at different
// speeds, and briefly blur during fast scroll bursts)
// ============================================

const orbs = document.querySelectorAll('.bg-orb');
const heroCard = document.querySelector('.hero-card img');
let lastY = window.scrollY;
let blurTimeout;

function onScrollMotion() {
  const y = window.scrollY;
  const delta = Math.abs(y - lastY);
  lastY = y;

  const blurAmount = Math.min(delta / 12, 4.5);
  document.documentElement.style.setProperty('--scroll-blur', blurAmount + 'px');
  clearTimeout(blurTimeout);
  blurTimeout = setTimeout(() => {
    document.documentElement.style.setProperty('--scroll-blur', '0px');
  }, 120);

  orbs.forEach((orb, i) => {
    const speed = 0.06 + i * 0.03;
    orb.style.transform = `translate3d(0, ${y * speed}px, 0)`;
  });

  if (heroCard && y < window.innerHeight) {
    heroCard.style.transform = `translateY(${y * 0.08}px) scale(${1 - y * 0.00015})`;
  }
}

window.addEventListener('scroll', () => {
  window.requestAnimationFrame(onScrollMotion);
}, { passive: true });

// ============================================
// CURSOR GLOW (desktop only)
// ============================================

const cursorGlow = document.querySelector('.cursor-glow');
if (cursorGlow && window.matchMedia('(hover: hover)').matches) {
  window.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
    cursorGlow.classList.add('active');
  });
  document.addEventListener('mouseleave', () => cursorGlow.classList.remove('active'));
}

// ============================================
// SUBTLE TILT ON CARDS
// ============================================

const tiltTargets = document.querySelectorAll('.project-card, .hackathon-card, .process-card, .stat-card');
tiltTargets.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ============================================
// HERO PHOTO — pointer-tracked 3D tilt + glare
// ============================================

const heroTilt = document.getElementById('heroTilt');
if (heroTilt && window.matchMedia('(hover: hover)').matches) {
  const heroWrap = heroTilt.closest('.tilt-wrap');
  heroWrap.addEventListener('mousemove', (e) => {
    const rect = heroWrap.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotY = (x - 0.5) * 18;
    const rotX = (0.5 - y) * 18;
    heroTilt.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    heroTilt.style.setProperty('--gx', `${x * 100}%`);
    heroTilt.style.setProperty('--gy', `${y * 100}%`);
  });
  heroWrap.addEventListener('mouseleave', () => {
    heroTilt.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}

// ============================================
// ABOUT ID CARD — click to flip (3D)
// ============================================

const flipCard = document.getElementById('flipCard');
if (flipCard) {
  flipCard.addEventListener('click', () => {
    flipCard.classList.toggle('flipped');
  });
}
