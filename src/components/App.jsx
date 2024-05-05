// App.jsx

// Importujemy funkcję `lazy` z Reacta, która umożliwia opóźnione ładowanie komponentów
import { lazy } from 'react';
// Importujemy komponent `Toaster` z biblioteki react-hot-toast do wyświetlania powiadomień
import { Toaster } from 'react-hot-toast';
// Importujemy komponenty `Navigate`, `Route` i `Routes` z react-router-dom do obsługi routingu
import { Navigate, Route, Routes } from 'react-router-dom';

// Importujemy komponenty, które zostaną użyte w naszej aplikacji
// Używamy funkcji `lazy` do opóźnionego ładowania komponentów, co poprawia wydajność aplikacji
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout')); // Komponent dzielonego układu

const Home = lazy(() => import('../pages/Home')); // Komponent strony głównej
const Movies = lazy(() => import('../pages/Movies')); // Komponent strony filmów
const MovieDetails = lazy(() => import('../pages/MovieDetails')); // Komponent szczegółów filmu
const Cast = lazy(() => import('./Cast/Cast')); // Komponent obsady filmu
const Reviews = lazy(() => import('./Reviews/Reviews')); // Komponent recenzji filmu

// Funkcja komponentu głównego aplikacji
export const App = () => {
  return (
    <>
      {/* Definiujemy routery dla naszej aplikacji */}
      <Routes>
        {/* Główny rout z współdzielonym układem dla wszystkich stron */}
        <Route path="/" element={<SharedLayout />}>
          {/* Ścieżka indexowa, czyli strona główna */}
          <Route index element={<Home />} />
          {/* Ścieżka dla stron z listą filmów */}
          <Route path="movies" element={<Movies />} />

          {/* Dynamiczna ścieżka dla szczegółów filmu, zawiera podścieżki dla obsady i recenzji */}
          <Route path="movies/:movieId" element={<MovieDetails />}>
            {/* Ścieżka dla obsady filmu */}
            <Route path="cast" element={<Cast />} />
            {/* Ścieżka dla recenzji filmu */}
            <Route path="reviews" element={<Reviews />} />
          </Route>

          {/* Ścieżka dla nieznanych adresów, przekierowuje na stronę główną */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      {/* Komponent `Toaster` do wyświetlania powiadomień */}
      <Toaster />
    </>
  );
};
