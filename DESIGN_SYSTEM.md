# CMC Design System

Shared styles for Crystolyte Media Creations (CMC). Source: `src/design-system.css`, imported by `src/index.css`.

## Colours

| Token | Value | Use |
|---|---|---|
| `--cmc-bg` | `#08090d` | Page background |
| `--cmc-surface` | `#0e1117` | Section background |
| `--cmc-surface-raised` | `#131824` | Cards |
| `--cmc-text` | `#ffffff` | Headings |
| `--cmc-text-body` | `#cbd5e1` | Body copy |
| `--cmc-text-muted` | `#94a3b8` | Captions, meta |
| `--cmc-gold` | `#fbbf24` | Eyebrows, subtitles, badges, links |
| `--cmc-gold-highlight` → `--cmc-gold-shadow` | logo gold ramp | Gold gradients (sampled from the logo) |
| `--cmc-accent-red` | `#ff0033` | Secondary button only |
| `--cmc-accent-blue` | `#00a8e1` | Reserved for platform links |

## Type scale

| Class | Role | Style |
|---|---|---|
| `.cmc-display` | Page hero title | Cinzel, 800, uppercase, white |
| `.cmc-title` | Section title (H2) | Cinzel, 800, uppercase, white |
| `.cmc-heading` | Card/item title (H3) | Cinzel, 700, white |
| `.cmc-subtitle` | Tagline under a title | Cinzel, 700, uppercase, gold |
| `.cmc-eyebrow` | Small label above a title | Sans, 600, uppercase, gold |
| `.cmc-body` | Body paragraph | Sans, 300, 1.7 line height |
| `.cmc-body-sm` | Card or list text | Sans, 400, small |
| `.cmc-caption` | Meta, dates, roles | Sans, 500, uppercase, muted |

## Gold & silver

| Class | Use |
|---|---|
| `.cmc-gold-text` | Gold gradient text (headings, highlights) |
| `.cmc-gold-emboss` | Logotype-style gold lettering with an emboss edge |
| `.cmc-silver-text` | Brushed silver text |

## Surfaces & components

| Class | Use |
|---|---|
| `.cmc-section` | Section band with a top border |
| `.cmc-card` | Raised card with hover border and glow |
| `.cmc-badge` | Gold role or status pill |
| `.cmc-btn` | Base button (combine with one variant) |
| `.cmc-btn-primary` | Gold gradient CTA |
| `.cmc-btn-secondary` | Brand red CTA (partner, contact) |
| `.cmc-btn-ghost` | Outline button on dark backgrounds |

## Rules

1. Use the classes, not ad-hoc Tailwind size and colour combinations, for titles, body and buttons.
2. Gold is for accents only: eyebrows, subtitles, badges, one gradient heading per section.
3. Body copy is `cmc-body` (or `cmc-body-sm` in cards). Do not use pure white for paragraphs.
4. One `cmc-display` per page. Section titles use `cmc-title`.
5. Red appears only on the secondary button.

## Migrating existing code

- `gold-luxury-text` → `cmc-gold-text`
- `btn-gold-luxury` → `cmc-btn cmc-btn-primary`
- `btn-launch-yt` → `cmc-btn cmc-btn-secondary`
- `text-amber-400` eyebrows → `cmc-eyebrow`
- `text-slate-300` paragraphs → `cmc-body`
