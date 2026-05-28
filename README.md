# MitraAstro Landing Page Clone

A modern, highly responsive Vedic Astrology landing page platform featuring an elegant glassmorphism UI, dual-theming (Dark/Light mode), and a robust Node.js/Relational Database backend architecture. Built using clean, semantic web standards without external CSS frameworks.

---

## 🚀 Live Demo & Deployment
* **Reference Site:** [MitraAstro Netlify](https://mitraastro.netlify.app/)
* **Deployment Platform:** Netlify (Static Frontend)
* **SSL/Security:** Auto-provisioned via Let's Encrypt (HTTP → HTTPS enforced)

---

## 🛠️ Tech Stack & Architecture

### Frontend
* **Core:** HTML5 (Semantic Structure), Vanilla JavaScript (ES6+)
* **Styling:** Pure CSS3 (Custom Properties/Design Tokens, Grid, Flexbox, Glassmorphism)
* **Typography:** *Noto Serif* (Body & Reports), *Lovalina* / *Cinzel Decorative* (Display & Branding)

### Backend & Database
* **Server Environment:** Node.js, Express.js
* **Database:** MySQL / PostgreSQL (ACID-compliant relational storage)
* **Authentication:** Google OAuth 2.0 Identity Services & JSON Web Tokens (JWT)

---

## 📋 Features & Scope

### In Scope
* **Fixed Navigation Bar:** Responsive layout featuring localized dark/light mode toggles and an optimized mobile hamburger menu ($< 700\text{px}$).
* **Hero Dashboard:** Vibrant linear-gradient design tokens (`#3a1c71` → `#d76d77` → `#ffaf7b`) featuring high-fidelity glassmorphic cards (`backdrop-filter`).
* **Interactive Core Modules:** * *Kundli Generator:* Dynamic, form-driven interface tracking user birth telemetry (Date, Time, Location).
    * *Spiritual E-Commerce Shop:* Product grid interface for curated remedies with placeholder cart state machines.
    * *About & Services:* High-end catalogs detailing Vedic consultation frameworks, profiles, and legacy metrics.
* **Authentication Gateway:** Secure Node.js server route processing Google OAuth 2.0 redirects, returning client-side cached JWTs mapped to the `Authorization: Bearer` header.

### Out of Scope (Phase 1)
* Live production payment gateway integrations.
* Real-time external dynamic horoscope API mapping.
* Multi-language / Hindi localization configurations.

---

## 📂 Project Architecture & CSS File Load Order

To ensure clean separation of concerns and appropriate inheritance overrides, stylesheets must follow this exact compilation structure:

```text
├── index.html               # Root semantic document & SEO metadata
├── css/
│   ├── style.css            # Global themes, typography, & html.dark-mode overrides
│   ├── utility.css          # Core CSS resets, root design tokens, & layout utility classes
│   ├── hero.css             # Component classes (pills, cards, global buttons)
│   └── hero-section.css     # Structural layout grids specific to the Hero section
└── script.js                # LocalStorage theme caching & mobile DOM navigation scripts

```

---

## ⚡ JavaScript Lifecycle & Token Security

### 1. Theme Configuration

Theme checking happens before document render to minimize **Flash of Unstyled Content (FOUC)**:

```javascript
// LocalStorage mapping with system fallback
const preferredTheme = localStorage.getItem('theme') || 
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.classList.toggle('dark-mode', preferredTheme === 'dark');

```

### 2. Secure Request Loop

```text
[Client Form Actions] 
       │
       ▼ (Google OAuth 2.0 Verification)
[Node.js / Express API Server] 
       │
       ▼ (Issues Signature encrypted JWT)
[Stored Client-Side: LocalStorage / HttpOnly]
       │
       ▼ (Header Inclusion)
Authorization: Bearer <token>

```

---

## 🔧 Development & Local Installation

### Prerequisites

* Node.js (v18.x or higher recommended)
* MySQL or PostgreSQL local instance

### Setup Steps

1. **Clone the repository:**
```bash
git clone https://github.com/Rajal-ui/MitraAstro.git
cd MitraAstro

```


2. **Install backend dependencies:**
```bash
npm install

```


3. **Environment Configuration:**
Create a `.env` file in the root directory and add your credentials:
```env
PORT=5000
DB_HOST=localhost
DB_USER=your_db_user
DB_PASS=your_db_password
DB_NAME=mitraastro_db
GOOGLE_CLIENT_ID=your_google_client_id
JWT_SECRET=your_jwt_encryption_key

```


4. **Run the local development server:**
```bash
npm start

```



---

## 📊 Performance Targets

* **Lighthouse Performance Score:** $\ge 85$ on mobile execution loops.
* **Largest Contentful Paint (LCP):** $< 2.5\text{s}$ optimization threshold.
* **Cumulative Layout Shift (CLS):** Limit structure variance below $< 0.1$.

---

## 📝 Document Specifications & Sign-Off

* **Prepared By:** KLN Business Solutions, Pune
* **Version:** v1.0 (May 2025 specification architecture)
* **Status:** Pending Final Review Sign-Off
