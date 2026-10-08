# GitHub Issues - Portfolio Updates

Daftar issue untuk perubahan yang dilakukan hari ini.

---

## Issue 1: Update Firebase Domain to pallyamasultan.web.app

**Title:** `Update Firebase domain to pallyamasultan.web.app`

**Labels:** `enhancement`, `firebase`

**Body:**
```markdown
## Description
Update Firebase configuration to use the new domain pallyamasultan.web.app instead of pallyamasultan-da67d.web.app.

## Changes Made
- [x] Update .firebaserc default project to 'pallyamasultan'
- [x] Update src/firebase.js authDomain to 'pallyamasultan.firebaseapp.com'
- [x] Update src/firebase.js projectId to 'pallyamasultan'
- [x] Update src/firebase.js storageBucket to 'pallyamasultan.firebasestorage.app'

## Files Modified
- .firebaserc
- src/firebase.js

## Deployment Checklist
- [ ] Run `firebase deploy --only hosting:pallyamasultan`
- [ ] Verify domain pallyamasultan.web.app is accessible
- [ ] Update any external links referencing old domain

## Related
- Previous domain: pallyamasultan-da67d.web.app
- New domain: pallyamasultan.web.app
```

---

## Issue 2: Redesign My Skills Detail Card

**Title:** `Redesign My Skills detail card with progress bar and skill pills`

**Labels:** `enhancement`, `design`, `ui`

**Body:**
```markdown
## Description
Improve the detail card that appears when hovering over a skill in the My Skills section.

## Changes Made
- [x] Add skill pills showing technologies (React, Next.js, Tailwind, etc.)
- [x] Add animated progress bar showing proficiency percentage
- [x] Add icon for each skill category
- [x] Improve animations with better easing
- [x] Add background glow effects
- [x] Update placeholder state with better design

## Design Features
- Dark theme with #ccff00 accent
- Gradient dividers
- Smooth scale and fade animations
- Staggered skill pills animation

## Files Modified
- src/App.jsx

## Screenshots
![My Skills Design](https://via.placeholder.com/800x400)
```

---

## Issue 3: Add Tech Stack Section

**Title:** `Add Tech Stack section with vertical centered layout`

**Labels:** `enhancement`, `design`, `feature`

**Body:**
```markdown
## Description
Add a new Tech Stack section below My Skills to showcase all technologies used.

## Changes Made
- [x] Create Tech Stack section with 4 categories
- [x] Add SVG icons for all technologies
- [x] Implement vertical centered layout
- [x] Add hover effects with scale animation
- [x] Add staggered fade-in animation on scroll

## Categories
1. **Languages**: JavaScript, Python, PHP, C, HTML5, CSS3
2. **Frontend & Mobile**: React, Next.js, Flutter, Tailwind CSS
3. **Backend & Database**: Laravel, Node.js, Express, Firebase, MySQL
4. **Tools**: Git, VS Code, Figma, GitHub, Docker

## Design Features
- Vertical centered layout (stacked categories)
- 64x64px icon boxes with rounded-2xl
- Hover effects: border #ccff00, background glow, scale 1.1x
- Dark background (#0a0a0a) with subtle borders
- Responsive design

## Files Modified
- src/App.jsx

## Reference
Layout inspired by GitHub profile tech stack display
```

---

## Issue 4: Add Tech Stack Icons

**Title:** `Add proper SVG icons for all tech stack items`

**Labels:** `enhancement`, `design`

**Body:**
```markdown
## Description
Replace text-based tech stack items with proper SVG icons.

## Changes Made
- [x] JavaScript icon (yellow background)
- [x] Python icon (blue background)
- [x] PHP icon (purple background)
- [x] C icon (blue background)
- [x] HTML5 icon (orange background)
- [x] CSS3 icon (blue background)
- [x] React icon (atom design)
- [x] Next.js icon (black circle)
- [x] Flutter icon (blue gradient)
- [x] Tailwind icon (wave design)
- [x] Laravel icon (red cube)
- [x] Node.js icon (green hexagon)
- [x] Express icon (black square)
- [x] Firebase icon (flame)
- [x] MySQL icon (blue circle)
- [x] Git icon (orange)
- [x] VS Code icon (blue)
- [x] Figma icon (multi-color)
- [x] GitHub icon (cat silhouette)
- [x] Docker icon (blue whale)

## Files Modified
- src/App.jsx
```

---

## Issue 5: Responsive Design for Tech Stack

**Title:** `Ensure Tech Stack section is fully responsive`

**Labels:** `bug`, `design`, `responsive`

**Body:**
```markdown
## Description
Make sure the new Tech Stack section looks good on all screen sizes.

## Requirements
- [x] Mobile: Single column, centered icons
- [x] Tablet: Flex wrap with proper spacing
- [x] Desktop: Max width container with centered layout
- [x] Touch-friendly hover states
- [x] Proper spacing between categories

## Test Devices
- iPhone SE (375px)
- iPad (768px)
- Desktop (1920px)

## Files Modified
- src/App.jsx
```

---

## Issue 6: Add Animation to Tech Stack Items

**Title:`Add staggered animation to tech stack items`

**Labels:** `enhancement`, `animation`

**Body:**
```markdown
## Description
Add smooth staggered animations when tech stack items come into view.

## Changes Made
- [x] Fade in animation on scroll
- [x] Stagger delay for each item
- [x] Scale animation on hover
- [x] Use framer-motion for consistency

## Animation Details
- Initial: opacity 0, scale 0.8
- Animate: opacity 1, scale 1
- Delay: 0.1s per item
- Duration: 0.3s

## Files Modified
- src/App.jsx
```

---

## Issue 7: Update Contact Phone Number

**Title:** `Update contact phone number in Get in Touch section`

**Labels:** `enhancement`, `contact`

**Body:**
```markdown
## Description
Update the phone number in the "Get in touch" contact section to the active personal phone number.

## Changes Made
- [x] Updated phone link (`href="tel:+6282119601659"`)
- [x] Updated display text to `+62 821-1960-1659`

## Files Modified
- src/App.jsx

## Verification
- Verified build with Vite
- Verified click-to-call link format
```

---

## Daftar Issue GitHub yang Telah Dibuat

| # | Issue Title | URL GitHub |
|---|-------------|------------|
| #11 | Update Firebase domain to pallyamasultan.web.app | [Issue #11](https://github.com/pallyamasultan/PROFESIONAL_PORTOFOLIO_PALLYAMA/issues/11) |
| #12 | Redesign My Skills detail card with progress bar and skill pills | [Issue #12](https://github.com/pallyamasultan/PROFESIONAL_PORTOFOLIO_PALLYAMA/issues/12) |
| #13 | Add Tech Stack section with vertical centered layout | [Issue #13](https://github.com/pallyamasultan/PROFESIONAL_PORTOFOLIO_PALLYAMA/issues/13) |
| #14 | Add proper SVG icons for all tech stack items | [Issue #14](https://github.com/pallyamasultan/PROFESIONAL_PORTOFOLIO_PALLYAMA/issues/14) |
| #15 | Ensure Tech Stack section is fully responsive | [Issue #15](https://github.com/pallyamasultan/PROFESIONAL_PORTOFOLIO_PALLYAMA/issues/15) |
| #16 | Add staggered animation to tech stack items | [Issue #16](https://github.com/pallyamasultan/PROFESIONAL_PORTOFOLIO_PALLYAMA/issues/16) |
| #17 | Update contact phone number in Get in Touch section | [Issue #17](https://github.com/pallyamasultan/PROFESIONAL_PORTOFOLIO_PALLYAMA/issues/17) |
| #18 | feat: Add Education Journey section and update contact information | [Issue #18](https://github.com/pallyamasultan/PROFESIONAL_PORTOFOLIO_PALLYAMA/issues/18) |

---

## Ringkasan Perubahan Hari Ini

| File | Perubahan |
|------|-----------|
| `.firebaserc` | Update default project ke 'pallyamasultan' |
| `src/firebase.js` | Update authDomain, projectId, storageBucket |
| `src/App.jsx` | Redesign My Skills detail card |
| `src/App.jsx` | Tambah Tech Stack section dengan layout vertikal |
| `src/App.jsx` | Tambah SVG icons untuk semua teknologi |
| `src/App.jsx` | Update nomor kontak di bagian Get in touch (`+62 821-1960-1659`) |
| `src/App.jsx` | Tambah section Education Journey (Bahasa Inggris, Graduated 2026, Timeline, Badges) |

