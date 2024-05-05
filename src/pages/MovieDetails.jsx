// MovieDelails.jsx

// Importujemy potrzebne zależności i komponenty
import { LoadingIndicator } from 'components/SharedLayout/LoadingDots'; // Komponent wskaźnika ładowania
import { Suspense, useEffect, useState } from 'react'; // Importujemy hooki useEffect, useState i komponent Suspense z Reacta
import { BsArrowLeftShort } from 'react-icons/bs'; // Ikona strzałki w lewo
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'; // Hooki i komponenty związane z routerem
import MovieCard from '../components/MovieCard/MovieCard'; // Komponent karty filmu
import { fetchMovieById } from '../services/api'; // Funkcja do pobierania danych o filmie
import { Button, Container } from './MovieDelails.styled'; // Stylizowane komponenty dla szczegółów filmu

// Komponent MovieDetails
const MovieDetails = () => {
  // Pobieramy parametry z adresu URL
  const { movieId } = useParams(); // ID filmu
  const location = useLocation(); // Aktualna lokalizacja
  const [selectedMovie, setSelectedMovie] = useState({}); // Stan przechowujący wybrany film

  // Efekt pobierający dane o wybranym filmie przy załadowaniu komponentu lub zmianie ID filmu
  useEffect(() => {
    // Funkcja asynchroniczna do pobierania danych o filmie na podstawie jego ID
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchMovieById(movieId); // Pobieramy dane o filmie
        setSelectedMovie(movieData); // Ustawiamy dane o filmie w stanie komponentu
      } catch (error) {
        console.log(error); // Obsługa błędu w przypadku niepowodzenia pobierania danych
      }
    };

    fetchSelectedMovie(movieId); // Wywołujemy funkcję pobierającą dane o filmie
  }, [movieId]); // Efekt wywoływany przy zmianie ID filmu

  // Zwracamy treść komponentu
  return (
    <main>
      <Container>
        {/* Przycisk do powrotu do poprzedniej strony */}
        <Link to={location?.state?.from ?? '/'}>
          <Button type="button">
            <BsArrowLeftShort
              style={{ width: '25px', height: '25px', display: 'inline-block' }}
            />
            Powrót
          </Button>
        </Link>
        {/* Komponent wyświetlający kartę filmu */}
        <MovieCard movie={selectedMovie} />
        {/* Wyświetlenie zawartości zagnieżdżonych tras */}
        <Suspense fallback={<LoadingIndicator />}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default MovieDetails; // Eksportujemy komponent MovieDetails
