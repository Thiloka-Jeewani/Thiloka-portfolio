'use strict';
const $ = selector => document.querySelector(selector);
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const root = document.documentElement;
const themeToggle = $('#themeToggle');
function updateTheme() {
  const light = root.dataset.theme === 'light';
  themeToggle.textContent = light ? '☀' : '☾';
  themeToggle.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
}
try { if (localStorage.getItem('thiloka-theme') === 'light') root.dataset.theme = 'light'; } catch {}
updateTheme();
themeToggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  try { localStorage.setItem('thiloka-theme', root.dataset.theme); } catch {}
  updateTheme();
});

// Data is text, never HTML: additions to projects.js cannot inject markup.
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}
const grid = $('#projectGrid');
const categories = ['All', 'AI / Machine Learning', 'Full-Stack', 'Web Development', 'Mobile / IoT']
  .filter(c => c === 'All' || projects.some(p => p.categories.includes(c)));
function projectCard(project, index) {
  const card = el('article', 'project-card featured-project');
  card.dataset.categories = project.categories.join('|');
  const visual = el('div', `project-image-wrapper project-cover cover-${project.id}`);
  if (project.image) {
    const image = el('img');
    image.src = project.image;
    image.alt = project.id === 'movie' ? 'MOVIE-SENTIBOT confusion matrix results' : `${project.title} — project preview`;
    image.loading = 'lazy'; image.decoding = 'async';
    visual.append(image);
  } else {
    visual.classList.add('graphic-cover');
    visual.append(el('span', 'cover-kicker', project.id === 'bus' ? 'MOBILITY / LIVE DATA' : 'ENERGY / CONNECTED WORKFLOWS'));
    visual.append(el('strong', 'cover-word', project.id === 'bus' ? 'Bus.lk ↗' : 'Smart Solar ☀'));
    visual.append(el('span', 'cover-note', 'Project graphic · screenshot unavailable'));
  }
  if (project.gallery?.length) {
    const preview = el('button', 'gallery-cover-button');
    preview.type = 'button';
    preview.setAttribute('aria-label', `Open ${project.title} screenshots`);
    preview.addEventListener('click', () => openGallery(project, 0));
    while (visual.firstChild) preview.append(visual.firstChild);
    preview.append(el('span', 'gallery-cover-label', 'View screenshots ↗'));
    visual.append(preview);
  }
  visual.append(el('span', 'project-number', String(index + 1).padStart(2, '0')));
  const info = el('div', 'project-info');
  info.append(el('span', 'project-badge', project.categories[0]));
  const title = el('h3', '', project.title); title.id = `project-${project.id}`;
  card.setAttribute('aria-labelledby', title.id);
  info.append(title, el('p', '', project.description));
  const badges = el('div', 'tech-badges');
  project.stack.forEach(tech => badges.append(el('span', 'badge', tech)));
  info.append(badges);
  const details = el('details', 'project-details');
  details.append(el('summary', '', 'Explore technical details'));
  const list = el('ul');
  project.features.forEach(feature => list.append(el('li', '', feature)));
  details.append(list);
  if (project.contribution) details.append(el('p', 'contribution', `My contribution: ${project.contribution}`));
  if (project.id === 'bus') details.append(el('p', 'contribution', 'Prototype with an illustrative route; not a production transit service.'));
  if (project.id === 'solar') details.append(el('p', 'contribution', 'Collaborative demonstration. Rule-based workflows; no hosted LLM or statutory grid certification.'));
  info.append(details);
  if (project.gallery?.length > 1) {
    const thumbnails = el('div', 'project-thumbnails');
    thumbnails.setAttribute('aria-label', `${project.title} screenshots`);
    project.gallery.forEach((shot, index) => {
      const button = el('button', 'project-thumbnail');
      button.type = 'button'; button.setAttribute('aria-label', `View ${shot.caption}`);
      const image = el('img'); image.src = shot.src; image.alt = shot.caption;
      image.loading = 'lazy'; image.decoding = 'async';
      button.append(image); button.addEventListener('click', () => openGallery(project, index));
      thumbnails.append(button);
    });
    info.append(thumbnails);
  }
  const links = el('div', 'project-links');
  const github = el('a', 'link-btn github-btn', 'GitHub ↗');
  github.href = project.github; github.target = '_blank'; github.rel = 'noopener noreferrer';
  github.setAttribute('aria-label', `${project.title} on GitHub (opens in a new tab)`);
  links.append(github);
  if (project.demo) {
    const demo = el('a', 'link-btn', 'Live Demo ↗');
    demo.href = project.demo; demo.target = '_blank'; demo.rel = 'noopener noreferrer';
    links.append(demo);
  }
  info.append(links); card.append(visual, info); return card;
}
projects.forEach((p, i) => grid.append(projectCard(p, i)));
function filterProjects(category) {
  let count = 0;
  [...grid.children].forEach((card, i) => {
    card.hidden = category !== 'All' && !projects[i].categories.includes(category);
    if (!card.hidden) count++;
  });
  document.querySelectorAll('.filter-button').forEach(button => button.setAttribute('aria-pressed', String(button.textContent === category)));
  $('#projectCount').textContent = `${String(count).padStart(2, '0')} projects · ${category}`;
}
categories.forEach(category => {
  const button = el('button', 'filter-button', category);
  button.type = 'button'; button.addEventListener('click', () => filterProjects(category));
  $('#projectFilters').append(button);
});
filterProjects('All');

const menuBtn = $('#menuBtn');
const nav = $('#navLinks');
function setMenu(open) {
  nav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuBtn.textContent = open ? '×' : '☰';
}
menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); menuBtn.focus(); }
});
document.addEventListener('click', event => { if (!$('#navbar').contains(event.target)) setMenu(false); });
matchMedia('(min-width: 1051px)').addEventListener('change', event => { if (event.matches) setMenu(false); });

// Content is visible by default, even if scripts or observers are unavailable.
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('active'); observer.unobserve(entry.target); }
  }), {threshold: .08});
  document.querySelectorAll('.reveal').forEach(node => observer.observe(node));
  const links = [...nav.querySelectorAll('a')];
  const activeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, {rootMargin: '-15% 0px -55% 0px', threshold: 0});
  document.querySelectorAll('main section[id]').forEach(node => activeObserver.observe(node));
}
window.addEventListener('scroll', () => $('#navbar').classList.toggle('scrolled', scrollY > 30), {passive: true});
const flipCard = $('#flipCard');
function flip() { const flipped = flipCard.classList.toggle('flipped'); flipCard.setAttribute('aria-pressed', String(flipped)); }
flipCard.addEventListener('click', flip);
flipCard.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); flip(); } });
const roles = ['IT Undergraduate', 'Full-Stack Developer', 'AI/ML Enthusiast', 'Hackathon Builder', 'Web Developer'];
let roleIndex = 0, roleTimer;
function rotateRole() {
  clearTimeout(roleTimer);
  if (reducedMotion.matches) { $('#typing').textContent = roles[0]; return; }
  roleTimer = setTimeout(() => { $('#typing').textContent = roles[++roleIndex % roles.length]; rotateRole(); }, 3200);
}
reducedMotion.addEventListener('change', rotateRole);
rotateRole();


// Native modal provides keyboard focus containment, Escape dismissal and focus restoration.
const galleryDialog = el('dialog', 'screenshot-dialog');
const galleryHeader = el('div', 'screenshot-dialog-header');
const galleryTitle = el('h2'); galleryTitle.id = 'screenshot-title';
const galleryClose = el('button', 'screenshot-close', 'Close ×'); galleryClose.type = 'button';
galleryClose.setAttribute('aria-label', 'Close screenshot gallery');
galleryHeader.append(galleryTitle, galleryClose);
const galleryImage = el('img', 'screenshot-full');
const galleryFooter = el('div', 'screenshot-dialog-footer');
const previousShot = el('button', 'filter-button', '← Previous'); previousShot.type = 'button';
const galleryCaption = el('p'); galleryCaption.setAttribute('aria-live', 'polite');
const nextShot = el('button', 'filter-button', 'Next →'); nextShot.type = 'button';
galleryFooter.append(previousShot, galleryCaption, nextShot);
galleryDialog.append(galleryHeader, galleryImage, galleryFooter);
galleryDialog.setAttribute('aria-labelledby', galleryTitle.id);
document.body.append(galleryDialog);
let galleryProject, galleryIndex = 0;
function renderGallery() {
  const shot = galleryProject.gallery[galleryIndex];
  galleryTitle.textContent = galleryProject.title;
  galleryImage.src = shot.src; galleryImage.alt = shot.caption;
  galleryCaption.textContent = `${galleryIndex + 1} / ${galleryProject.gallery.length} · ${shot.caption}`;
  previousShot.hidden = nextShot.hidden = galleryProject.gallery.length < 2;
}
function openGallery(project, index) {
  galleryProject = project; galleryIndex = index; renderGallery(); galleryDialog.showModal();
}
function changeShot(step) {
  galleryIndex = (galleryIndex + step + galleryProject.gallery.length) % galleryProject.gallery.length;
  renderGallery();
}
galleryClose.addEventListener('click', () => galleryDialog.close());
previousShot.addEventListener('click', () => changeShot(-1));
nextShot.addEventListener('click', () => changeShot(1));
galleryDialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault(); changeShot(event.key === 'ArrowLeft' ? -1 : 1);
  }
});
galleryDialog.addEventListener('click', event => { if (event.target === galleryDialog) {
  const rect = galleryDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) galleryDialog.close();
}});

Object.entries(achievementGalleries).forEach(([id, project]) => {
  const container = document.getElementById(`${id}-gallery`);
  if (!container || !project.gallery.length) return;
  container.hidden = false;
  project.gallery.forEach((shot, index) => {
    const button = el('button', 'project-thumbnail'); button.type = 'button';
    button.setAttribute('aria-label', `View ${shot.caption}`);
    const image = el('img'); image.src = shot.src; image.alt = shot.caption;
    image.loading = 'lazy'; image.decoding = 'async'; button.append(image);
    button.addEventListener('click', () => openGallery(project, index)); container.append(button);
  });
});
