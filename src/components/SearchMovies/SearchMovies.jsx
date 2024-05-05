// SearchMovies.jsx

// Importujemy wymagane zależności i komponenty
import PropTypes from 'prop-types'; // Biblioteka do sprawdzania typów przekazywanych propsów
import { toast } from 'react-hot-toast'; // Biblioteka do wyświetlania powiadomień
import { Button, Form, Input } from './SearchMovies.styled'; // Stylizowane komponenty do formularza wyszukiwania

// Komponent obsługujący formularz wyszukiwania filmów
const SearchMovies = ({ onSubmit }) => {
  // Funkcja obsługująca złożenie formularza
  const handleSubmit = e => {
    e.preventDefault(); // Zatrzymuje domyślne zachowanie przeglądarki dla zdarzenia submit

    const query = e.target.elements.query.value; // Pobiera wartość pola wyszukiwania

    // Sprawdza, czy pole wyszukiwania jest puste
    if (!query) {
      toast.error('Please enter something'); // Wyświetla powiadomienie o braku wprowadzonych danych
      return;
    }

    onSubmit(query); // Wywołuje funkcję przekazaną przez props onSubmit z wartością z pola wyszukiwania
    e.target.reset(); // Czyści zawartość pola wyszukiwania po złożeniu formularza
  };

  // Renderuje formularz wyszukiwania
  return (
    <Form onSubmit={handleSubmit}>
      <Input name="query" type="text" placeholder="Search movies" />{' '}
      {/* Pole tekstowe do wprowadzania zapytania */}
      <Button type="submit">Search</Button>{' '}
      {/* Przycisk do złożenia formularza */}
    </Form>
  );
};

// Określa typy przekazywanych propsów
SearchMovies.propTypes = { onSubmit: PropTypes.func.isRequired }; // Funkcja onSubmit jest wymaganym props'em i musi być funkcją

export default SearchMovies; // Eksportuje komponent SearchMovies
