# 🎬 Movie Search App

A **Next.js** movie search application that allows users to search for movies, view details, and manage their favorite movies. This app utilizes a public movie API for data and features state management with **Zustand**, responsive design, and local storage for persisting the favorite movies list.

## Features

1. **Search Movies**
    - Implement a search functionality where users can input a movie title.
    - Display a list of movies matching the search query using data from a public movie API.
    - Each search result displays the movie poster, title, release year, and rating.

2. **Movie Details Page**
    - When a user clicks on a movie from the search results, navigate to a detailed page.
    - Display information about the movie, including synopsis, genre, director, cast, runtime, and ratings.
    - Include a visually appealing layout with the movie's backdrop image.

3. **Favorite Movies**
    - Allow users to add or remove movies from their favorites list.
    - Implement a favorites page where users can view and manage their favorite movies.
    - Persist the favorites list using local storage or another client-side storage solution.

4. **Responsive Design**
    - Ensure the application is fully responsive and provides a good user experience on mobile, tablet, and desktop devices.
    - Use vanilla CSS or SASS as CSS modules.

5. **State Management**
    - Use Zustand to manage the application state where necessary.

6. **Routing**
    - Utilize Next.js routing to navigate between pages (home, search results, movie details, favorites).

7. **Error Handling and Loading States**
    - Provide user feedback during data fetching (loading spinners, skeleton screens).
    - Gracefully handle errors such as failed API requests or no search results found.

8. **Performance Optimization**
    - Optimize images and assets using Next.js `Image` component.
    - Implement code-splitting and lazy loading where appropriate.

9. **Accessibility**
    - Follow web accessibility guidelines to ensure the app is usable by all users.
    - Use semantic HTML elements and ARIA attributes where necessary.

10. **Code Quality**
    - Write clean, readable, and maintainable code.
    - Use TypeScript for type safety throughout the application.
    - Follow consistent coding standards and naming conventions.
    - Include comments and documentation where necessary.

11. **Dev Tools**
    - Use bun as a package manager (instead of npm).
    - Maintain clean code by using ESLint or similar tools.

### Bonus Points

1. **Server-Side Rendering (SSR)**
    - Use React Server Components where appropriate.
    - Distinguish where server and client components should be used.

2. **Animation and Transitions**
    - Add subtle animations to enhance the user experience (e.g., on page transitions or adding/removing favorites).

---

## Instructions on how to install and run the application locally

### Prerequisites

- Node.js (v14 or higher)
- Bun (as the package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-search-app.git
