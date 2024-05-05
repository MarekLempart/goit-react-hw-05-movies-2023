// MovieCard.jsx

// Importujemy potrzebne zależności i komponenty
import { LoadingIndicator } from 'components/SharedLayout/LoadingDots'; // Komponent wskaźnika ładowania
import PropTypes from 'prop-types'; // Biblioteka do sprawdzania typów przekazywanych propsów
import { useLocation } from 'react-router-dom'; // Hook do pobierania informacji o bieżącym adresie URL
import {
  Img,
  List,
  ListItem,
  MoreInfoHeader,
  MoreInfoWrapper,
  MovieCardContainer,
  MovieInfo,
  MovieInfoText,
  MovieInfoTextBold,
  MovieName,
  StyledLink,
} from './MovieCard.styled'; // Stylizowane komponenty dla sekcji karty filmowej

// Komponent karty filmowej
const MovieCard = ({ movie }) => {
  // Wyodrębniamy potrzebne informacje o filmie z przekazanych propsów
  const { title, release_date, poster_path, vote_average, overview, genres } =
    movie;

  // Pobieramy informacje o bieżącym adresie URL
  const location = useLocation();

  // Tworzymy datę premiery filmu na podstawie dostarczonej daty
  const releaseDate = new Date(release_date);
  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();

  // Tworzymy adres URL obrazu plakatu filmowego z uwzględnieniem dostępności
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  // Obliczamy ocenę filmu użytkownika i tworzymy odpowiednią wiadomość
  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

  // Jeśli tytuł filmu nie został przekazany, wyświetlamy wskaźnik ładowania
  if (!title) {
    return <LoadingIndicator />;
  }

  // Zwracamy treść karty filmowej
  return (
    <>
      {/* Kontener dla karty filmowej */}
      <MovieCardContainer>
        {/* Obrazek plakatu filmowego */}
        <Img src={posterUrl} alt={`${title} poster`} />

        {/* Informacje o filmie */}
        <MovieInfo>
          {/* Tytuł filmu i rok premiery */}
          <MovieName>
            {title ?? 'Unknown'} ({releaseYear})
          </MovieName>
          {/* Ocena użytkownika */}
          <MovieInfoText>User Score: {userScore}</MovieInfoText>
          {/* Opis filmu */}
          <MovieInfoText>
            <MovieInfoTextBold>Overview:</MovieInfoTextBold> {overview}
          </MovieInfoText>

          {/* Wyświetlanie gatunków filmu, jeśli są dostępne */}
          {genres && genres.length > 0 && (
            <MovieInfoText>
              <MovieInfoTextBold>Genres:</MovieInfoTextBold>
              {genres.map(genre => genre.name).join(', ')}
            </MovieInfoText>
          )}
        </MovieInfo>
      </MovieCardContainer>

      {/* Sekcja dodatkowych informacji */}
      <MoreInfoWrapper>
        {/* Nagłówek sekcji */}
        <MoreInfoHeader>Additional information</MoreInfoHeader>

        {/* Lista linków do obsady i recenzji filmu */}
        <List>
          <ListItem>
            {/* Link do sekcji z obsadą filmu */}
            <StyledLink
              to="cast"
              state={{ from: location?.state?.from ?? '/' }} // Parametr 'from' dla powrotu do poprzedniej strony
            >
              Cast
            </StyledLink>
          </ListItem>

          <ListItem>
            {/* Link do sekcji z recenzjami filmu */}
            <StyledLink
              to="reviews"
              state={{ from: location?.state?.from ?? '/' }} // Parametr 'from' dla powrotu do poprzedniej strony
            >
              Reviews
            </StyledLink>
          </ListItem>
        </List>
      </MoreInfoWrapper>
    </>
  );
};

// Sprawdzamy typy przekazywanych propsów
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};

export default MovieCard; // Eksportujemy komponent karty filmowej
