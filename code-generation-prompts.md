# Code Generation Prompts for Test-Driven Development

## Prompt 1: Project Setup

```
Create a React project setup for a cocktail recipe application using Vite with TypeScript. Include ESLint and Prettier configuration for code quality. Set up a Jest testing environment with React Testing Library. Organize the project with the following folder structure:
- src/
  - components/
  - hooks/
  - services/
  - utils/
  - types/
  - pages/
  - assets/
  - tests/

Include a simple GitHub Actions CI workflow for linting and testing. Provide the package.json with all required dependencies and scripts.
```

## Prompt 2: API Integration Foundation

```
Building on our React cocktail application, implement a service module for integrating with TheCocktailDB API (https://www.thecocktaildb.com/api.php). Create:

1. A base API service with:
   - Fetch utility functions for GET requests
   - Error handling middleware
   - Response caching using localStorage
   
2. Specific endpoints for:
   - Fetching a random cocktail
   - Searching cocktails by name
   
3. Tests for the API service using Jest mocks

Focus on type safety using TypeScript. Implement proper error states and loading indicators.
```

## Prompt 3: Core Data Models

```
For our cocktail recipe application, create TypeScript interfaces and data transformation utilities for the cocktail data model. Based on TheCocktailDB API response format, define:

1. TypeScript interfaces for:
   - Cocktail (with complete type definitions for all fields)
   - Ingredient (with measurements)
   - SearchResult
   
2. Utility functions to:
   - Transform API response into our application models
   - Extract ingredients and measurements from the flat API structure into a structured format
   - Parse and normalize units of measurement
   
3. Unit tests for all transformations

Include sample mock data that follows these interfaces for development and testing.
```

## Prompt 4: Basic UI Components

```
Create a foundational component library for our cocktail recipe app using React and TypeScript. Implement:

1. A simple design system with:
   - Color palette constants (primary, secondary, accent, background, text)
   - Typography styles (headings, body, captions)
   - Spacing and layout utilities
   
2. Reusable UI components:
   - Button component (with primary/secondary variants)
   - Input component with search capability
   - Card component for displaying cocktail information
   - Loading spinner
   - Error message display
   
3. Jest tests for each component using React Testing Library
   
Use CSS Modules or styled-components for styling. Ensure components are accessible (proper HTML semantics, ARIA attributes when needed).
```

## Prompt 5: Basic Recipe Display

```
Implement the recipe display components for our cocktail application using the UI components we've already built. Create:

1. A RecipeCard component that shows:
   - Cocktail name
   - Thumbnail image
   - Primary spirit/category
   - Click handler for viewing details
   
2. A RecipeDetail component that displays:
   - Full cocktail name
   - Larger image
   - Complete ingredient list with measurements
   - Preparation instructions
   - Glassware recommendation
   
3. Tests for both components

Use the mock data from our previous data models. Make sure components handle loading and error states gracefully.
```

## Prompt 6: Simple Search by Name

```
Implement search functionality for our cocktail recipe app that allows users to find cocktails by name. Create:

1. A SearchBar component that:
   - Accepts user input
   - Has a submit button
   - Shows a loading state
   - Provides visual feedback for errors
   
2. A SearchResults component that:
   - Displays a list of RecipeCard components
   - Shows a "no results" message when appropriate
   - Handles pagination if needed
   
3. Integration with our API service to:
   - Call the search endpoint with the user's query
   - Handle loading states during the request
   - Process and display any errors
   
4. Tests for all components and integration

Ensure the search is responsive and provides immediate feedback to the user.
```

## Prompt 7: Mode Selection Mechanism

```
Implement a mode selection mechanism for our cocktail app that allows users to switch between "Bartender Mode" and "Amateur Mode". Create:

1. A React Context for user preferences that:
   - Stores the current mode (bartender/amateur)
   - Provides functions to change the mode
   - Persists the selection to localStorage
   
2. A ModeToggle component that:
   - Displays the current mode
   - Allows users to switch between modes
   - Provides visual feedback on the selected mode
   
3. Tests for the context and component

The toggle should be accessible and intuitive, clearly indicating which mode is currently active.
```

## Prompt 8: Bartender Mode Interface

```
Implement the Bartender Mode interface for our cocktail application, focusing on a streamlined experience for professional use. Extend:

1. The RecipeCard component to have a "bartender" variant that:
   - Shows only essential information (name, primary spirit)
   - Has a more compact layout
   - Uses typography optimized for quick scanning
   
2. The RecipeDetail component to have a "bartender" variant that:
   - Displays ingredients in a concise format with precise measurements
   - Shows glassware prominently
   - Lists preparation steps in a compact bullet-point format
   - Omits historical information and verbose descriptions
   
3. Tests for both component variants

Use the user preference context to conditionally render the appropriate variant. Ensure the interface is clean and focused on practical information.
```

## Prompt 9: Amateur Mode Interface

```
Implement the Amateur Mode interface for our cocktail application, focusing on a detailed experience for home enthusiasts. Extend:

1. The RecipeCard component to have an "amateur" variant that:
   - Includes more details like difficulty level and preparation time
   - Shows a brief description or history snippet
   - Uses more colorful, engaging styling
   
2. The RecipeDetail component to have an "amateur" variant that:
   - Displays ingredients with descriptive information
   - Shows detailed step-by-step instructions
   - Includes cocktail history and background
   - Offers tips for preparation and presentation
   
3. Tests for both component variants

Use the user preference context to conditionally render the appropriate variant. The interface should be educational and engaging for cocktail enthusiasts.
```

## Prompt 10: Mode Switching

```
Implement seamless mode switching functionality for our cocktail recipe application. Create:

1. A unified component API that:
   - Dynamically renders different UI based on the current mode
   - Maintains consistent data across mode switches
   - Preserves component state where appropriate
   
2. Smooth visual transitions between modes using:
   - CSS transitions or animations
   - Appropriate loading states if needed
   
3. Integration tests that verify:
   - Components correctly adapt to mode changes
   - User interactions work consistently in both modes
   - Application state is preserved during mode switches

When a user toggles between Bartender and Amateur modes, the transition should be smooth and intuitive, maintaining the user's place in the application.
```

## Prompt 11: Enhanced Search with Filters

```
Extend the search functionality in our cocktail recipe application to include filtering capabilities. Implement:

1. A FilterPanel component that allows users to filter by:
   - Spirit type (vodka, rum, gin, etc.)
   - Cocktail category (classic, tropical, frozen, etc.)
   - Glassware type
   
2. Integration with the search component to:
   - Combine text search with filters
   - Update results dynamically as filters change
   - Preserve filter state between searches
   
3. A SearchHistoryFeature that:
   - Saves recent searches
   - Allows users to quickly re-execute previous searches
   - Persists between sessions using localStorage
   
4. Enhanced error handling for:
   - No results with suggestions for alternatives
   - API failures with graceful fallbacks
   
5. Comprehensive tests for all new functionality

The filter interface should be intuitive and accessible, with mobile responsiveness in mind.
```

## Prompt 12: Ingredient-Based Search

```
Implement ingredient-based search functionality for our cocktail recipe application. Create:

1. An IngredientSelector component that:
   - Displays a list of common cocktail ingredients
   - Allows multiple ingredient selection
   - Provides autocomplete for typing ingredient names
   
2. An API service extension to:
   - Search cocktails by one or more ingredients
   - Handle ingredient combination logic
   - Sort results by relevance (cocktails using most of the selected ingredients first)
   
3. An IngredientsTagDisplay component to:
   - Show selected ingredients as removable tags
   - Indicate when incompatible ingredients are selected
   - Provide a clear-all option
   
4. Tests for all new components and service extensions

The ingredient search should help users discover cocktails based on what they have available or what they enjoy.
```

## Prompt 13: "Make Do with What You Have" Feature

```
Implement the "Make Do with What You Have" feature for our cocktail application. Create:

1. An InventoryInput component that allows users to:
   - Add ingredients they currently have
   - Specify brands or types when relevant
   - Save their inventory for future sessions
   
2. A matching algorithm that:
   - Finds cocktails that can be made with the available ingredients
   - Ranks results by completeness (how many required ingredients the user has)
   - Suggests possible substitutes for missing ingredients
   
3. A ResultsDisplay component that:
   - Shows matching cocktails with a visual indicator of match percentage
   - Highlights missing ingredients
   - Groups results by "Complete Match", "Close Match", and "Missing Key Ingredients"
   
4. Comprehensive tests for the matching logic and UI components

The feature should feel helpful rather than frustrating, encouraging experimentation with what users have on hand.
```

## Prompt 14: Favorites Functionality

```
Implement a favorites system for our cocktail recipe application. Create:

1. A FavoritesContext that:
   - Manages a list of favorited cocktails
   - Provides add/remove functions
   - Persists favorites to localStorage
   
2. UI components to:
   - Add a "Favorite" button to recipe cards and detail views
   - Show visual indication of favorite status
   - Provide appropriate animations/feedback when favoriting/unfavoriting
   
3. A FavoritesView page that:
   - Displays all favorited cocktails
   - Allows sorting and filtering of favorites
   - Handles the empty state gracefully
   
4. Tests for context logic and UI components

The favorites functionality should work seamlessly in both Bartender and Amateur modes, adapting its display accordingly.
```

## Prompt 15: Personal Notes Feature

```
Implement a personal notes feature for our cocktail recipe application. Create:

1. A NotesContext that:
   - Stores user notes associated with specific cocktails
   - Provides CRUD operations for notes
   - Persists notes to localStorage
   
2. UI components:
   - A NotesEditor that allows creating and editing notes
   - A NotesDisplay for viewing notes
   - Integration with recipe detail view
   
3. Features for notes including:
   - Timestamp for creation/modification
   - Character limit with counter
   - Basic formatting options
   
4. Tests for all note functionality

Notes should adapt to the current mode - in Bartender Mode, they might focus on recipe variations or specific techniques, while in Amateur Mode they might include personal experiences or pairing suggestions.
```

## Prompt 16: Shopping List Feature

```
Implement a shopping list feature for our cocktail recipe application. Create:

1. A ShoppingListContext that:
   - Manages a list of ingredients to purchase
   - Handles quantities and aggregation
   - Persists data to localStorage
   
2. UI components:
   - An "Add to Shopping List" button for recipe ingredients
   - A ShoppingListView to manage the full list
   - Individual ShoppingListItem components
   
3. Features including:
   - Ability to add individual or all ingredients from a recipe
   - Quantity adjustment for ingredients
   - Categorization by type (spirits, mixers, garnishes, etc.)
   - Check-off functionality for purchased items
   
4. Comprehensive tests for all shopping list functionality

The shopping list should intelligently aggregate ingredients from multiple recipes (e.g., if two recipes need lime juice, show the total amount needed).
```

## Prompt 17: Measurement Toggle

```
Implement a measurement unit toggle feature for our cocktail recipe application. Create:

1. Unit conversion utilities that:
   - Convert between metric and imperial measurements
   - Handle various types of measurements (volume, weight, etc.)
   - Maintain appropriate precision
   
2. A user preference setting to:
   - Store preferred measurement system
   - Apply it consistently throughout the app
   - Persist the preference to localStorage
   
3. UI components:
   - A UnitToggle component for switching between systems
   - Updated recipe displays that use the preferred units
   
4. Tests for conversion accuracy and UI updates

Ensure that the conversions are sensible and practical (don't convert to tiny decimal places or overly complex fractions). The toggle should be easily accessible from recipe views.
```

## Prompt 18: Responsive Design Implementation

```
Optimize our cocktail recipe application for responsive design across all device sizes. Implement:

1. A mobile-first approach with:
   - Fluid layouts that adapt to different viewport sizes
   - Appropriate breakpoints for tablet and desktop views
   - Touch-friendly UI elements for mobile
   
2. Specialized mobile components:
   - A collapsible header for search and filters
   - Bottom navigation for key features
   - Modal dialogs for detail views on small screens
   
3. Desktop enhancements:
   - Multi-column layouts for better space utilization
   - Hover states and tooltips for additional information
   - Keyboard shortcuts for power users
   
4. UI tests that verify correct rendering at different viewport sizes

Ensure that all functionality is accessible across devices, with no features exclusive to particular screen sizes.
```

## Prompt 19: Accessibility Implementation

```
Implement comprehensive accessibility features for our cocktail recipe application. Create:

1. Semantic HTML structure throughout:
   - Proper heading hierarchy
   - Appropriate landmark regions
   - Semantic elements instead of generic divs where possible
   
2. Keyboard navigation enhancements:
   - Logical tab order
   - Focus management for modals and dynamic content
   - Keyboard shortcuts with a help modal
   
3. Screen reader support:
   - ARIA attributes where native semantics are insufficient
   - Descriptive alt text for images
   - Status announcements for dynamic content changes
   
4. Visual accessibility features:
   - Sufficient color contrast (WCAG AA compliance)
   - Text resizing without breaking layouts
   - Focus indicators that meet WCAG requirements
   
5. Accessibility tests using Jest-Axe or similar tools

Include an accessibility statement page with information about the app's accessibility features and any known limitations.
```

## Prompt 20: Legal Compliance Elements

```
Implement legal compliance elements for our cocktail recipe application. Create:

1. An AgeVerification component that:
   - Prompts users to confirm they are of legal drinking age
   - Uses a generic question rather than specifying an age
   - Stores verification status in localStorage
   - Blocks access to content until verification is complete
   
2. Responsible drinking information:
   - A dedicated page with resources and information
   - Subtle reminders throughout the application
   - Links to support services
   
3. Legal disclaimers for:
   - Recipe accuracy and safety
   - User-generated content (notes)
   - Third-party content attribution
   
4. Tests for verification logic and UI

The compliance elements should be unobtrusive but effective, striking a balance between legal requirements and user experience.
```

## Prompt 21: Final Integration and Testing

```
Implement the final integration of all features for our cocktail recipe application and create comprehensive testing. Create:

1. Application-wide integration:
   - Connect all contexts and services
   - Ensure consistent state management
   - Verify feature interactions
   
2. Performance optimization:
   - Implement code splitting and lazy loading
   - Add memoization for expensive calculations
   - Optimize bundle size
   
3. Error boundary implementation:
   - Create fallback UI for component errors
   - Add logging for error tracking
   - Ensure graceful degradation
   
4. Comprehensive test suite:
   - Unit tests for all utilities and isolated functionality
   - Integration tests for feature combinations
   - End-to-end tests for critical user flows
   - Performance tests for key metrics
   
5. Cross-browser testing plan

The final application should be robust, performant, and provide a seamless user experience across all supported platforms and browsers.
```