# TMDB Client Assignment

This project extends the TMDB movie app developed during the Full Stack 2 labs.

## Lab Features Kept

- Discover movies page from the lab.
- Favourite movies support from the lab.
- Upcoming movies page from the lab.
- Movie details and movie reviews from the lab.

## Assignment Features Added

- Popular Actors page.
- Actor details page.
- Actor movie credits list.
- Top Rated Movies page.
- Actor name filtering on the Popular Actors page.
- Actor sorting by popularity or name on the Popular Actors page.
- Pagination on the Popular Actors page.
- Data links from actor cards to actor details.
- Data links from actor movie credits back to movie details.

## Routes

| Route | Page |
| --- | --- |
| `/` | Discover Movies |
| `/movies/:id` | Movie Details |
| `/movies/favourites` | Favourite Movies |
| `/movies/upcoming` | Upcoming Movies |
| `/movies/top-rated` | Top Rated Movies |
| `/people` | Popular Actors |
| `/people/:id` | Actor Details |
| `/reviews/:id` | Movie Review |
| `/reviews/form` | Add Movie Review |

## TMDB Endpoints Used

- Discover movies
- Movie details
- Movie genres
- Movie reviews
- Upcoming movies
- Top rated movies
- Popular people
- Person details
- Person movie credits

## React Features Used

- Reusable components
- Props
- State with `useState`
- React Router routes and URL parameters
- React Query for server state caching
- Context from the lab favourites/reviews work
- MUI components for layout, cards, buttons, chips, and forms

## How To Run

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Environment Variables

Create a `.env` file in the project root with:

```txt
VITE_TMDB_KEY=your_tmdb_api_key_here
```

The `.env` file should not be committed to GitHub.

## Notes

The assignment work is on the `assignment` branch. The app follows the same structure used in the labs: API functions in `src/api/tmdb-api.ts`, types in `src/types/interfaces.ts`, components in `src/components`, and pages in `src/pages`.
