# 3D Earth Travel Explorer

🌍 **Interactive 3D globe to explore travel destinations worldwide**

[![Deploy to GitHub Pages](https://github.com/charansaikondilla/travelagency/actions/workflows/deploy.yml/badge.svg)](https://github.com/charansaikondilla/travelagency/actions/workflows/deploy.yml)

## 🚀 Live Demo

**Visit**: [https://charansaikondilla.github.io/travelagency/](https://charansaikondilla.github.io/travelagency/)

## 🌟 Features

- **Interactive 3D Globe** - Explore countries by clicking or searching
- **8 Countries** - Japan, Philippines, Nepal, Sri Lanka, India, China, Thailand, Vietnam
- **47 Travel Packages** - Curated experiences with detailed itineraries
- **SEO Optimized** - Full meta tags, structured data, social sharing
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Package Detail Pages** - Complete itineraries, pricing, booking UI

## 🛠️ Technologies

- React 19 + TypeScript
- React Router v6
- React Helmet Async (SEO)
- Tailwind CSS
- D3.js (3D Globe)
- Vite

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/charansaikondilla/travelagency.git

# Navigate to directory
cd travelagency

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌍 Available Destinations

### 🇯🇵 Japan • 🇵🇭 Philippines • 🇳🇵 Nepal • 🇱🇰 Sri Lanka • 🇮🇳 India • 🇨🇳 China • 🇹🇭 Thailand • 🇻🇳 Vietnam

**47 Total Travel Packages** ranging from $249 to $1,799

## 🚀 Deployment

Automatically deployed to GitHub Pages via GitHub Actions on push to main branch.

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
project/
├── data/
│   └── destinations.ts          # All country & package data
├── components/
│   ├── HomePage.tsx              # Landing page with 3D globe
│   ├── CountryDetail.tsx         # Country packages page
│   ├── PackageDetail.tsx         # Individual package details
│   ├── NotFound.tsx              # 404 error page
│   └── ...
├── .github/workflows/
│   └── deploy.yml                # GitHub Pages deployment
└── vite.config.ts                # Vite configuration
```

## 🔧 Configuration

For GitHub Pages deployment, the base URL is set in `vite.config.ts`:

```typescript
base: '/travelagency/'
```

## 📄 License

MIT License

## 👨‍💻 Developer

Created by [Charan Sai Kondilla](https://github.com/charansaikondilla)

**Start exploring the world!** 🌍✈️

