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

This project is configured for deployment with **Dokploy**.

#### Build and run with Docker

```bash
# Build the image
docker build -t daraja .

# Run the container (port 5000 external, 3000 internal)
docker run -d -p 5000:3000 --name daraja daraja

# View logs
docker logs -f daraja

# Stop the container
docker stop daraja && docker rm daraja
```

The application will be available at [http://localhost:5000](http://localhost:5000).

#### Using Makefile

```bash
make build    # Build the Docker image
make up       # Start the container
make logs     # View logs
make down     # Stop the container
make clean    # Remove container and image
```

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
