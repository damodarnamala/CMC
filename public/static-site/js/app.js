/**
 * Main Application Script
 * Crystolyte Media Creations (CMC)
 * Static Site Interactive Handlers
 */

const YOUTUBE_STREAM_URL = "https://www.youtube.com/embed/_nKFH-wbwtE?autoplay=1&rel=0";

// Video Modal Management
function launchYouTubePlayer() {
  const modal = document.getElementById('moviePlayerModal');
  const iframe = document.getElementById('ytPlayerIframe');
  if (modal && iframe) {
    iframe.src = YOUTUBE_STREAM_URL;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeYouTubePlayer() {
  const modal = document.getElementById('moviePlayerModal');
  const iframe = document.getElementById('ytPlayerIframe');
  if (modal && iframe) {
    iframe.src = '';
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Global modal escape listener
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeYouTubePlayer();
});

// Development Slate Interactive Filter
function filterSlate(category) {
  const cards = document.querySelectorAll('.slate-item');
  const buttons = document.querySelectorAll('.slate-filter-btn');

  buttons.forEach(btn => {
    if (btn.getAttribute('data-filter') === category) {
      btn.classList.add('bg-amber-400', 'text-black', 'font-bold');
      btn.classList.remove('text-slate-400', 'bg-white/5');
    } else {
      btn.classList.remove('bg-amber-400', 'text-black', 'font-bold');
      btn.classList.add('text-slate-400', 'bg-white/5');
    }
  });

  cards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'flex';
      card.style.opacity = '1';
    } else {
      card.style.display = 'none';
      card.style.opacity = '0';
    }
  });
}

// Mobile Nav Toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileDrawer');
  
  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      drawer.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-drawer-link').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.add('hidden');
      });
    });
  }

  // Update Footer Year
  const yearEl = document.getElementById('yearVal');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
