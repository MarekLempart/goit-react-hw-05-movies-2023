// SharedLauout.jsx

// Importujemy wymagane zależności i komponenty
import { Suspense } from 'react'; // Komponent do obsługi opóźnionego ładowania
import { Outlet } from 'react-router-dom'; // Komponent do renderowania dzieci na podstawie aktualnej ścieżki
import { LoadingIndicator } from './LoadingDots'; // Komponent wskaźnika ładowania
import { StyledHeader, StyledNavLink } from './SharedLayout.styled'; // Stylizowane komponenty do nagłówka i linków nawigacyjnych

// Komponent SharedLayout, który definiuje wspólne elementy interfejsu użytkownika
const SharedLayout = () => {
  return (
    <>
      {/* Nagłówek aplikacji */}
      <StyledHeader>
        <nav>
          {/* Linki nawigacyjne do strony głównej i listy filmów */}
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </StyledHeader>

      {/* Opóźnione renderowanie dzieci, aby uniknąć wyświetlania pustej zawartości */}
      <Suspense fallback={<LoadingIndicator />}>
        <Outlet /> {/* Renderuje dzieci na podstawie aktualnej ścieżki */}
      </Suspense>
    </>
  );
};

export default SharedLayout; // Eksportuje komponent SharedLayout
