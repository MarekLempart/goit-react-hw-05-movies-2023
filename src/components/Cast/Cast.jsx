// Cast.jsx

// Importujemy potrzebne zależności i komponenty
import { useEffect, useState } from 'react'; // Hooki useEffect i useState z Reacta
import { useParams } from 'react-router-dom'; // Hook do pobierania parametrów z adresu URL
import { fetchMovieCast } from '../../services/api'; // Funkcja do pobierania obsady filmu
import {
  CastHeader,
  CastImage,
  CastInfo,
  CastList,
  CastListItem,
  CastName,
  NoCastText,
  Wrapper,
} from './Cast.styled'; // Stylizowane komponenty dla sekcji obsady

// Komponent obsady filmu
const Cast = () => {
  const { movieId } = useParams(); // Pobieramy identyfikator filmu z adresu URL
  const [cast, setCast] = useState([]); // Stan przechowujący listę aktorów

  // Efekt pobierający obsadę filmu na podstawie jego identyfikatora
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId); // Pobieramy obsadę filmu z serwisu API
        setCast(cast); // Ustawiamy pobraną obsadę w stanie
      } catch (error) {
        console.log(error); // W przypadku błędu logujemy go do konsoli
      }
    };

    fetchCast(); // Wywołujemy funkcję pobierającą obsadę filmu
  }, [movieId]); // Efekt wywołujemy ponownie przy zmianie identyfikatora filmu

  // Zwracamy treść komponentu
  return (
    <Wrapper>
      {/* Nagłówek sekcji z nazwą "Cast" */}
      <CastHeader>Cast</CastHeader>
      {/* Sprawdzamy czy lista obsady nie jest pusta */}
      {cast.length ? (
        <CastList>
          {/* Mapujemy po liście aktorów i tworzymy dla nich odpowiednie komponenty */}
          {cast.map(actor => (
            <CastListItem className="cast-card" key={actor.id}>
              {/* Sprawdzamy czy aktor ma przypisaną ścieżkę do zdjęcia profilowego */}
              {actor.profile_path ? (
                // Jeśli tak, wyświetlamy zdjęcie z serwera TMDB
                <CastImage
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                />
              ) : (
                // Jeśli nie, wyświetlamy domyślne zdjęcie zastępcze
                <CastImage
                  src={`https://via.placeholder.com/200x300?text=No+Image`}
                  alt={`${actor.name} profile`}
                />
              )}

              {/* Wyświetlamy informacje o aktorze, w tym jego imię i nazwisko oraz rolę w filmie */}
              <CastInfo>
                <CastName>{actor.name}</CastName>
                <p>Character: {actor.character}</p>
              </CastInfo>
            </CastListItem>
          ))}
        </CastList>
      ) : (
        // Jeśli lista obsady jest pusta, wyświetlamy odpowiedni komunikat
        <NoCastText>
          We don't have any information about the cast yet.
        </NoCastText>
      )}
    </Wrapper>
  );
};

export default Cast; // Eksportujemy komponent obsady filmu
