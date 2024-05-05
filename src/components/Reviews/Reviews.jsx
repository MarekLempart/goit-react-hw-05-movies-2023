// Reviews.jsx

// Importujemy potrzebne zależności i komponenty
import { useEffect, useState } from 'react'; // Hooki do obsługi efektów i stanu
import { useParams } from 'react-router-dom'; // Hook do dostępu do parametrów bieżącego URL
import { fetchMovieReviews } from '../../services/api'; // Funkcja do pobierania recenzji filmów
import {
  Author,
  NoReviewsText,
  Review,
  ReviewHeader,
  ReviewList,
  ReviewListItem,
  Wrapper,
} from './Reviews.styled'; // Stylizowane komponenty dla sekcji recenzji filmu

// Komponent obsługujący wyświetlanie recenzji filmu
const Reviews = () => {
  const { movieId } = useParams(); // Pobieramy id filmu z parametrów URL
  const [reviews, setReviews] = useState([]); // Stan przechowujący listę recenzji filmu

  // Efekt pobierający recenzje filmu po załadowaniu komponentu
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await fetchMovieReviews(movieId); // Pobieramy recenzje filmu
        setReviews(results); // Ustawiamy pobrane recenzje w stanie komponentu
      } catch (error) {
        console.log(error); // Obsługujemy ewentualny błąd
      }
    };

    fetchReviews(); // Wywołujemy funkcję pobierającą recenzje filmu
  }, [movieId]); // Efekt wykona się ponownie tylko wtedy, gdy zmieni się id filmu

  return (
    <Wrapper>
      <ReviewHeader>Reviews</ReviewHeader> {/* Nagłówek sekcji recenzji */}
      {/* Warunek sprawdzający czy są dostępne recenzje */}
      {reviews.length ? (
        <ReviewList className="reviews-container">
          {/* Mapujemy listę recenzji i renderujemy dla każdej recenzji odpowiedni element */}
          {reviews.map(review => (
            <ReviewListItem className="review-card" key={review.id}>
              <Author>Author: {review.author}</Author>{' '}
              {/* Wyświetlamy autora recenzji */}
              <Review>{review.content}</Review>{' '}
              {/* Wyświetlamy treść recenzji */}
            </ReviewListItem>
          ))}
        </ReviewList>
      ) : (
        <NoReviewsText>
          We don't have any reviews for this movie yet.{' '}
          {/* Komunikat informujący o braku recenzji */}
        </NoReviewsText>
      )}
    </Wrapper>
  );
};

export default Reviews; // Eksportujemy komponent Reviews
