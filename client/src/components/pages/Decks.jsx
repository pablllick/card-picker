import { useEffect, useState } from 'react';
import Deck from '../ui/Deck';

function BasicExample() {
  const [decks, setDecks] = useState([]);
  useEffect(() => {
    fetch('/api/deck')
      .then((data) => data.json())
      .then(setDecks)
      .then(console.log)
  }, []);
  return (
    <>
      {decks.map((deck) => {
        <Deck data={deck} />;
      })}
    </>
  );
}

export default BasicExample;
