# Daraja

A Next.js 14 application with App Router, TypeScript, and Tailwind CSS.

## Features

- ⚡ Next.js 14 with App Router
- 🔷 TypeScript for type safety
- 🎨 Tailwind CSS with custom theme
- 🌙 Dark mode support (class strategy)
- 🎯 Hind Vadodara font from Google Fonts
- 📦 ESLint configuration
- 🐳 Docker support

## Getting Started

### Local Development

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Docker Deployment

#### Build and run with Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

#### Build and run with Docker directly

```bash
# Build the image
docker build -t daraja .

# Run the container
docker run -p 3000:3000 daraja
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Tailwind Configuration

This project uses a custom Tailwind theme with:

- **Dark mode**: Class-based strategy
- **Primary color**: Blue theme using CSS variables
  - `--brand: 220 90% 56%`
  - `--brand-foreground: 0 0% 100%`
- **Container**: Centered with responsive padding

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
