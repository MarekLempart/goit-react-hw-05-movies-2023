// MovieList.jsx

// Importujemy potrzebne zależności i komponenty
import PropTypes from 'prop-types'; // Biblioteka do sprawdzania typów przekazywanych propsów
import {
  List,
  ListItem,
  SectionTitle,
  StyledLink,
  StyledSection,
} from './MovieList.styled'; // Stylizowane komponenty dla sekcji listy filmów

// Komponent listy filmów
const MovieList = ({ trendingMovies }) => {
  return (
    <StyledSection>
      {/* Tytuł sekcji */}
      <SectionTitle>Trending today</SectionTitle>

      {/* Lista filmów */}
      <List>
        {/* Mapujemy przekazaną tablicę trendingMovies i renderujemy dla każdego filmu link */}
        {trendingMovies.map(trendingMovie => (
          <ListItem key={trendingMovie.id}>
            {/* Link do strony szczegółów filmu */}
            <StyledLink to={`/movies/${trendingMovie.id}`}>
              {/* Tytuł filmu */}
              {trendingMovie.title}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </StyledSection>
  );
};

// Sprawdzamy typy przekazywanych propsów
MovieList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Identyfikator filmu
      title: PropTypes.string.isRequired, // Tytuł filmu
      release_date: PropTypes.string.isRequired, // Data premiery filmu
      overview: PropTypes.string.isRequired, // Opis filmu
      poster_path: PropTypes.string, // Ścieżka do plakatu filmowego
      vote_average: PropTypes.number.isRequired, // Ocena filmu
    })
  ).isRequired, // Tablica obiektów reprezentujących filmy
};

export default MovieList; // Eksportujemy komponent listy filmów
