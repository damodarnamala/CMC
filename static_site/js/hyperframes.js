/**
 * Hyperframes Motion Script
 * Crystolyte Media Creations (CMC)
 * High-performance vanilla animation engine
 */

class HyperframeScrambler {
  constructor(element, options = {}) {
    this.el = element;
    this.chars = options.chars || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#&%';
    this.originalText = options.text || this.el.getAttribute('data-scramble') || this.el.innerText;
    this.frame = 0;
    this.queue = [];
    this.resolve = null;
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 12);
      const end = start + Math.floor(Math.random() * 18);
      this.queue.push({ from, to, start, end, char: '' });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)];
          this.queue[i].char = char;
        }
        output += `<span class="scramble-glyph">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      if (this.resolve) this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  trigger() {
    this.setText(this.originalText);
  }
}

// 3D Tilted Snap Animation with GSAP or CSS fallback
function triggerHyperframeSnap(element) {
  if (!element) return;
  if (window.gsap) {
    gsap.killTweensOf(element);
    gsap.fromTo(element, 
      {
        opacity: 0,
        rotationX: -32,
        rotationZ: -6,
        y: -45,
        skewX: 10,
        scale: 0.94,
        filter: "blur(6px)"
      },
      {
        opacity: 1,
        rotationX: 0,
        rotationZ: 0,
        y: 0,
        skewX: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.15,
        ease: "back.out(2.2)",
        clearProps: "transform,filter"
      }
    );
  } else {
    element.style.opacity = '1';
    element.style.transform = 'none';
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // Hero Tagline Scrambler
  const heroScrambleEl = document.getElementById('heroScrambleTagline');
  if (heroScrambleEl) {
    const heroScrambler = new HyperframeScrambler(heroScrambleEl, {
      text: "REDEFINING TELUGU CINEMA WITH EXCELLENCE"
    });
    setTimeout(() => {
      heroScrambler.trigger();
    }, 350);
  }

  // Hero Title Snap
  const heroTitle = document.getElementById('heroMainTitle');
  if (heroTitle) {
    triggerHyperframeSnap(heroTitle);
  }

  // Scroll Scramblers & Snaps
  const scrollScramblers = document.querySelectorAll('.scramble-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const scrambler = new HyperframeScrambler(entry.target);
          scrambler.trigger();
          const tiltEl = entry.target.closest('section')?.querySelector('.scroll-tilt');
          if (tiltEl) triggerHyperframeSnap(tiltEl);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    scrollScramblers.forEach(el => observer.observe(el));
  }
});
