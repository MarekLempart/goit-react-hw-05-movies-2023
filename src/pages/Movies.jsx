// Movies.jsx

// Importujemy potrzebne zależności i komponenty
import { useEffect, useState } from 'react'; // Hooki useEffect i useState z Reacta
import { toast } from 'react-hot-toast'; // Plugin do wyświetlania powiadomień
import { useLocation, useSearchParams } from 'react-router-dom'; // Hooki do pracy z parametrami URL
import {
  List,
  ListItem,
  SectionTitle,
  StyledLink,
  StyledSection,
} from '../components/MovieList/MovieList.styled'; // Stylizowane komponenty dla listy filmów
import SearchMovies from '../components/SearchMovies/SearchMovies'; // Komponent do wyszukiwania filmów
import { fetchMovieByName } from '../services/api'; // Funkcja do pobierania filmów

// Komponent Movies
const Movies = () => {
  // Stan przechowujący listę filmów
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams(); // Hook do obsługi parametrów URL
  const location = useLocation(); // Aktualna lokalizacja

  // Efekt pobierający filmy na podstawie zapytania w adresie URL
  useEffect(() => {
    const query = searchParams.get('query') ?? ''; // Pobieramy zapytanie z adresu URL lub ustawiamy pusty ciąg znaków, jeśli brak
    if (!query) return; // Jeśli brak zapytania, nie wykonujemy dalszych działań

    // Funkcja asynchroniczna do pobierania filmów na podstawie zapytania
    const getMovie = async () => {
      try {
        const { results } = await fetchMovieByName(query); // Pobieramy filmy na podstawie zapytania

        if (results.length === 0) {
          // Jeśli nie znaleziono filmów, wyświetlamy powiadomienie
          toast.dismiss(); // Ukrywamy poprzednie powiadomienie
          toast.error('No movies found'); // Wyświetlamy powiadomienie o braku filmów
          setMovies([]); // Czyścimy listę filmów
        } else {
          setMovies(results); // Ustawiamy listę znalezionych filmów
        }
      } catch (error) {
        toast.error(error.message); // Wyświetlamy powiadomienie o błędzie
        setMovies([]); // Czyścimy listę filmów
      }
    };

    getMovie(); // Wywołujemy funkcję pobierającą filmy na podstawie zapytania
  }, [searchParams]); // Efekt wywoływany przy zmianie parametrów URL

  // Funkcja obsługująca przesłanie formularza wyszukiwania filmów
  const handleSubmit = query => {
    setSearchParams({ query }); // Ustawiamy zapytanie w parametrach URL
  };

  // Zwracamy treść komponentu
  return (
    <main>
      <StyledSection>
        {/* Tytuł sekcji */}
        <SectionTitle>Movies Page</SectionTitle>
        {/* Komponent do wyszukiwania filmów */}
        <SearchMovies onSubmit={handleSubmit} />
        {/* Lista filmów */}
        <List>
          {movies.map(movie => (
            <ListItem key={movie.id}>
              {/* Link do strony z danymi o filmie */}
              <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </StyledLink>
            </ListItem>
          ))}
        </List>
      </StyledSection>
    </main>
  );
};

export default Movies; // Eksportujemy komponent Movies
