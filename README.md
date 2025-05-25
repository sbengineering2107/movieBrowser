# ⭐ Star Wars Movie Browser

A responsive and interactive movie explorer built with **React + Vite + Axios**, integrating data from [SWAPI](https://swapi.dev) and [OMDb API](https://www.omdbapi.com/).

---

## 📦 Features

### ✅ Core Assignment Criteria

- Fetch and display a list of Star Wars films using `https://swapi.dev/api/films/`
- Show a **details panel** for a selected movie (or a default message if none is selected)
- Ability to:
  - 🔍 Filter movies by title
  - 🔃 Sort by Episode or Year
- Fully **responsive UI** for mobile and desktop

### 🌟 Bonus Features

- Integrates with **OMDb API** using key: `b9a5e69d`
- Displays:
  - 🎬 Poster image (or fallback if unavailable)
  - 🎯 Ratings from IMDb, Rotten Tomatoes, and Metacritic
  - ⭐ IMDb rating shown as stars
  - 📊 Fallback average rating calculated from all sources
- Elegant styling using modular CSS and Flexbox layout

---

## 🧪 Testing

Full unit and integration test coverage using **Vitest** and **Testing Library**:

- ✅ Component-level tests (`MovieList`, `MovieListItem`, `MovieDetails`, `SortFilterBar`)
- ✅ Service-layer tests for `swapi.js` and `omdb.js` using mocked Axios
- ✅ Dynamic UI behavior tested (click, input, sort)

### Run all tests:

```bash
npm install
npm run test
```
