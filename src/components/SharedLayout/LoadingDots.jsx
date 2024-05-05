// LoadingDots.jsx

// Importujemy wymagane zależności i komponenty stylizowane
import { Dot, LoadingDots } from './SharedLayout.styled'; // Importujemy komponenty stylizowane z pliku SharedLayout.styled

// Komponent LoadingIndicator renderuje animowany wskaźnik ładowania w postaci kropek
export const LoadingIndicator = () => {
  return (
    // Komponent LoadingDots definiuje kontener dla animowanych kropek
    <LoadingDots>
      {/* Komponent Dot reprezentuje pojedynczą kropkę z opcjonalnym opóźnieniem */}
      <Dot delay="0s" /> {/* Pierwsza kropka bez opóźnienia */}
      <Dot delay=".2s" /> {/* Druga kropka z opóźnieniem 0.2 sekundy */}
      <Dot delay=".4s" /> {/* Trzecia kropka z opóźnieniem 0.4 sekundy */}
    </LoadingDots>
  );
};
