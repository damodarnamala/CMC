# Crystolyte Media Creations (CMC) — Static Site Package

This folder contains the complete, standalone static website for **Crystolyte Media Creations**, built with **Tailwind CSS**, custom luxury CSS styling, and the **Hyperframes** vanilla animation engine.

## Directory Structure

```text
/static_site/
├── index.html              # Main HTML5 entry point
├── css/
│   ├── hyperframes.css     # 3D perspective stage, tilt, and button shimmer keyframes
│   └── style.css           # Glassmorphism, gold gradients, modal overlay & layouts
├── js/
│   ├── hyperframes.js      # Vanilla CleanTextScramble & 3D snap animation engine
│   └── app.js              # Video modal, pitch desk submission, and slate filter logic
└── README.md               # Documentation & hosting guide
```

## Features

- **Pure Zero-Build Static Website**: Can be opened directly in any browser (`file:///...` or any HTTP web server).
- **Hyperframes Animation Engine**:
  - Kinetic 3D perspective tilted snap on headline elements
  - Matrix/Clean character scramble engine for cinematic taglines
  - Card 3D hover physics
- **Feature Film Showcase**: Dedicated presentation of debut Telugu feature film *IIT Krishnamurthy* (directed by S. Sreevardhan, produced by Prasad Nekuri and Praneeth Nekuri).
- **Embedded 4K Cinema Player**: Full-length video stream modal powered by YouTube embed (`_nKFH-wbwtE`) and direct Amazon Prime Video launch button.
- **Leadership Showcase**: Profiles for Producers Prasad Nekuri & Praneeth Nekuri (with verified LinkedIn, Instagram, and Facebook links) and Director S. Sreevardhan.
- **Active Development Slate**: Explore upcoming projects with interactive genre filtering.

## Deployment Options

1. **GitHub Pages / Netlify / Vercel**: Drop the `/static_site/` files into your repository root or public directory.
2. **Nginx / Apache**: Copy `/static_site/*` directly into `/var/www/html/`.
3. **AWS S3 / Cloudflare Pages / Google Cloud Storage**: Upload the folder and enable static website hosting.
