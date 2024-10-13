# 🎬 Movie Search App

A **Next.js** movie search application that allows users to search for movies, view details, and manage their favorite movies. This app leverages a public movie API to display movie details and provides state management using **Zustand**. The app is fully responsive, optimized for performance, and persists favorite movies using local storage.

## Features

### 1. Search Movies
- Implemented search functionality where users can input a movie title.
- Displays a list of movies matching the search query using data from a public movie API.
- Each search result displays the movie poster, title, release year, and rating.

### 2. Movie Details Page
- When a user clicks on a movie from the search results, it navigates to a detailed page.
- Displays information about the movie, including:
  - Synopsis
  - Genre
  - Director
  - Cast
  - Runtime
  - Ratings
- Includes a visually appealing layout with the movie's backdrop image.

### 3. Favorite Movies
- Allows users to add or remove movies from their favorites list.
- Implemented a favorites page where users can view and manage their favorite movies.
- Favorites list is persisted using local storage .

### 4. Responsive Design
- The application is fully responsive, providing an excellent user experience on mobile, tablet, and desktop devices.
- Uses **SASS** to style components.

### 5. State Management
- Utilizes **Zustand** to manage the application state where necessary.

### 6. Routing
- Utilizes Next.js routing to navigate between pages such as search page, movie details, and favorites.

### 7. Error Handling and Loading States
- Provides user feedback during data fetching, including loading spinners.
- Gracefully handles errors such as failed API requests or no search results found.

### 8. Performance Optimization
- Optimizes images and assets using the Next.js `Image` component.
- Implements code-splitting and lazy loading where appropriate to enhance performance.

### 9. Accessibility
- Follows web accessibility guidelines to ensure the app is usable by all users.
- Uses semantic HTML elements and ARIA attributes where necessary.

### 10. Code Quality
- Written with clean, readable, and maintainable code.
- **TypeScript** is used throughout the application for type safety.
- Follows consistent coding standards and naming conventions.
- uses **Prettier** for better formatting.
- Includes comments and documentation where necessary.

### 11. Dev Tools
- Uses **Bun** as a package manager.
- Maintains clean code by using **ESLint**.



## Additional Features

### 1. Server-Side Rendering (SSR)
- Uses **React Server Components** where appropriate.
- Distinguishes between server and client components as needed.

### 2. Animation and Transitions
- Adds subtle animations to enhance the user experience.



## Design Decisions, Challenges, and Solutions

### 1. **Design Decisions**
- **Responsive Design:**  
  The application follows a mobile-first design approach, ensuring a seamless user experience across mobile, tablet, and desktop devices. Vanilla CSS Modules and SASS were used to provide scoped styling, reducing the chances of global CSS conflicts.
  
- **State Management with Zustand:**  
  Zustand was chosen over more complex state management libraries (like Redux) to keep the state management simple and lightweight. The application mainly uses Zustand for managing the state of the search query, loading state, and favorites list.

- **Image Optimization with Next.js:**  
  Next.js Image component was used to optimize the loading of movie posters and backdrops. This improves performance, especially on slower network connections, by serving optimized and appropriately sized images.

- **Lazy Loading and Code Splitting:**  
  Lazy loading were used to load the Movie Details and Favorites components only when required. This helps in reducing the initial bundle size and improves page load performance.

### 2. **Challenges Faced and Solutions**

- **Handling a Large Cast List in Movie Details Page:**  
  The cast list provided by the API can be quite large. To address this, I limited the initial display of cast members to the first 5 actors .This ensures that the page remains clean and user-friendly.

- **Persisting Favorites in Local Storage:**  
  Managing the user's favorite movies required a solution that persists even after the page is refreshed. This was solved by utilizing the browser’s `localStorage` to store and retrieve the list of favorite movies. Zustand was used to synchronize the state with local storage, ensuring the app maintains its state across sessions.

- **Error Handling and Loading States:**  
  During API requests, handling errors gracefully was important for a smooth user experience. I implemented loading spinners and skeleton screens to keep the user informed while data is being fetched. Additionally, clear error messages are shown when API requests fail or no results are found for the search.


### 3. **Performance Optimization**
- **Using Next.js Built-In Optimizations:**  
  By leveraging Next.js's features like server-side rendering , the app delivers fast loading times and enhanced SEO. This was especially beneficial for pages like the Movie Details page.

-  **API Rate Limits:**  
  The API used has rate limits, which could potentially affect the user experience when searching for multiple movies in quick succession. To mitigate this, I implemented debouncing on the search input field to reduce the number of API calls, ensuring smoother performance while staying within rate limits.
  

---

## Instructions on How to Install and Run the Application Locally

### Prerequisites
- Node.js (v14 or higher)
- Bun (as the package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-search-app.git

2. Navigate to the project directory :

   ```bash
   cd movie-search-app
   
3. Install the dependencies using Bun:

   ```bash
   bun install

### Running the Application 

1. Run the development server:

   ```bash
   bun dev

2. Open your browser and go to:

   ```bash
   http://localhost:3000

### Building for Production

1. Build the app for production:

   ```bash
   bun build
2. Start the production server:

   ```bash
   bun start
   
### Environment Variables 

Make sure to set up your API keys and environment variables by creating a `.env.local` file in the root directory with the following structure:

    NEXT_PUBLIC_API_KEY=your_api_key_here

### License 

This project is licensed under the MIT License.
