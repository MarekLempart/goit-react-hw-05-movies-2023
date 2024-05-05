// Home.jsx

// Importujemy komponenty i funkcje zależności
import MovieList from 'components/MovieList/MovieList'; // Komponent do wyświetlania listy filmów
import { LoadingIndicator } from 'components/SharedLayout/LoadingDots'; // Komponent wskaźnika ładowania
import { useEffect, useState } from 'react'; // Importujemy hooki useEffect i useState z Reacta
import { fetchTrendMovies } from '../services/api'; // Importujemy funkcję fetchTrendMovies z pliku api w folderze services

// Komponent Home
const Home = () => {
  // Definiujemy stany dla trendingMovies, isLoading i error za pomocą hooków useState
  const [trendingMovies, setTrendingMovies] = useState([]); // Stan przechowujący listę trendujących filmów
  const [isLoading, setIsLoading] = useState(true); // Stan informujący o stanie ładowania
  const [error, setError] = useState(false); // Stan informujący o wystąpieniu błędu

  // Efekt pobierający listę trendujących filmów przy załadowaniu komponentu
  useEffect(() => {
    // Definiujemy funkcję asynchroniczną fetchTrendingMovies
    const fetchTrendingMovies = async () => {
      try {
        setError(false); // Resetujemy stan błędu
        setIsLoading(true); // Ustawiamy stan ładowania na true
        const { results } = await fetchTrendMovies(); // Wywołujemy funkcję fetchTrendMovies, która pobiera trendy filmy z API
        setTrendingMovies(results); // Ustawiamy trendy filmy w stanie komponentu
      } catch (error) {
        setError(true); // Ustawiamy stan błędu na true w przypadku błędu podczas pobierania danych
      } finally {
        setIsLoading(false); // Ustawiamy stan ładowania na false niezależnie od sukcesu lub błędu
      }
    };

    fetchTrendingMovies(); // Wywołujemy funkcję pobierającą trendy filmy
  }, []); // Efekt wywoływany tylko raz po załadowaniu komponentu

  // Zwracamy treść komponentu
  return (
    <>
      {/* Warunek sprawdzający stan ładowania */}
      {isLoading ? ( // Jeśli isLoading jest true, wyświetlamy wskaźnik ładowania
        <LoadingIndicator />
      ) : error ? ( // Jeśli wystąpił błąd, wyświetlamy komunikat o błędzie
        <p>
          Przepraszamy, nie udało się pobrać listy trendujących filmów. Spróbuj
          ponownie później.
        </p>
      ) : (
        // W przeciwnym razie wyświetlamy komponent MovieList z przekazaną listą trendujących filmów
        <MovieList trendingMovies={trendingMovies} />
      )}
    </>
  );
};

export default Home; // Eksportujemy komponent Home
