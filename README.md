# Foster Growthec - Site Web Premium

Un site web moderne, premium et très animé pour la marque "Foster Growthec" - une agence digitale spécialisée dans la croissance et la transformation digitale des entreprises.

## 🚀 Stack Technique

- **React 18** + **TypeScript** - Framework frontend
- **Vite** - Build tool ultra-rapide
- **TailwindCSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides et interactions
- **Three.js / React Three Fiber** - Effets 3D
- **Lenis** - Smooth scroll
- **React Router** - Navigation multi-pages
- **shadcn/ui** - Composants UI modernes

## 📁 Structure du Projet

```
src/
├── components/
│   ├── 3d/               # Composants Three.js
│   │   └── FloatingShape.tsx
│   ├── ui-custom/        # Composants UI personnalisés
│   │   ├── AnimatedButton.tsx
│   │   ├── Counter.tsx
│   │   ├── SectionReveal.tsx
│   │   └── TiltCard.tsx
│   ├── Navigation.tsx    # Barre de navigation
│   └── Footer.tsx        # Pied de page
├── sections/             # Sections de la page d'accueil
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── Process.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   └── Contact.tsx
├── pages/                # Pages secondaires
│   ├── ServicesPage.tsx
│   ├── AboutPage.tsx
│   └── ContactPage.tsx
├── hooks/                # Hooks personnalisés
│   ├── useLenis.ts
│   ├── useMousePosition.ts
│   └── useScrollAnimation.ts
├── App.tsx               # Composant principal avec routing
└── index.css             # Styles globaux
```

## 🎨 Design System

### Couleurs
- **Primary**: Emerald (#10b981) - Vert principal du logo
- **Accent**: Lime (#84cc16) - Vert clair
- **Background**: Charcoal (#0a0a0f) - Fond sombre
- **Text**: White (#ffffff) avec variations d'opacité

### Typographie
- **Display**: Manrope - Titres et headings
- **Body**: Inter - Texte courant

### Effets
- Glassmorphism avec backdrop-blur
- Glow effects sur les éléments interactifs
- Gradients linéaires et radiaux
- Animations fluides avec Framer Motion

## 🚀 Démarrage

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation

```bash
# Cloner le projet
git clone <repo-url>
cd app

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build
```

### Lancer sur Replit

1. Importez le projet dans Replit
2. Exécutez `npm install` dans le shell
3. Cliquez sur "Run" ou exécutez `npm run dev`

## 📝 Personnalisation

### Modifier le contenu

Le contenu est centralisé dans les fichiers de sections et de pages :

- **Services**: `src/sections/Services.tsx` et `src/pages/ServicesPage.tsx`
- **Projets**: `src/sections/Projects.tsx`
- **Témoignages**: `src/sections/Testimonials.tsx`
- **Équipe**: `src/pages/AboutPage.tsx`

### Modifier les couleurs

Les couleurs sont définies dans :
- `tailwind.config.js` - Configuration Tailwind
- `src/index.css` - Variables CSS

### Remplacer le logo

Remplacez le fichier `/public/logo.png` par votre propre logo.
Dimensions recommandées : 512x512px, format PNG avec fond transparent.

## ♿ Accessibilité

- Support complet du clavier
- États de focus visibles
- Contraste de couleurs conforme WCAG AA
- Support de `prefers-reduced-motion`
- Attributs ARIA appropriés

## 🎯 Performance

- Lazy loading des images
- Code splitting automatique avec Vite
- Optimisation Three.js (dpr limité)
- Animations GPU-accelerated
- Lighthouse-friendly

## 📄 Pages

1. **Home** (`/`) - Page d'accueil avec toutes les sections
2. **Services** (`/services`) - Détail des services
3. **À propos** (`/about`) - Histoire, valeurs et équipe
4. **Contact** (`/contact`) - Formulaire de contact

## 🔧 Scripts disponibles

- `npm run dev` - Développement avec hot reload
- `npm run build` - Build de production
- `npm run preview` - Prévisualisation du build
- `npm run lint` - Linting ESLint

## 📞 Contact

Pour toute question ou suggestion, contactez-nous à :
- Email: contact@fostergrowthec.com
- Site web: https://fostergrowthec.com

---

Développé avec ❤️ par Foster Growthec
