# Cocktail Recipe App

A modern web application for discovering and learning about cocktail recipes, built with Next.js 14 and TypeScript. The app features a dual-mode interface catering to both amateur enthusiasts and professional bartenders.

## Features

- 🍸 Dual-mode interface (Bartender/Amateur)
- 🔍 Advanced search functionality
- 📱 Responsive design for all devices
- 🎨 Modern, accessible UI
- 📝 Personal notes and favorites
- 🛒 Shopping list functionality
- 📏 Unit conversion (metric/imperial)
- 🔒 Age verification system

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Testing**: Jest + React Testing Library
- **API**: TheCocktailDB
- **Deployment**: Vercel

## Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cocktail-recipe-app.git
cd cocktail-recipe-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```env
NEXT_PUBLIC_COCKTAIL_DB_API_URL=your_api_url
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
├── hooks/           # Custom React hooks
├── services/        # API and external service integrations
├── utils/           # Utility functions
├── types/           # TypeScript type definitions
├── lib/             # Shared libraries and configurations
└── __tests__/       # Test files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Testing

The project uses Jest and React Testing Library for testing. Run tests with:

```bash
npm run test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [TheCocktailDB](https://www.thecocktaildb.com/) for providing the cocktail data API
- [Next.js](https://nextjs.org/) for the amazing framework
- All contributors and maintainers

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
