import { useEffect, useState } from 'react';
import Deck from '../ui/Deck';

function BasicExample() {
  const [decks, setDecks] = useState([]);
  useEffect(() => {
    fetch('/api/deck')
      .then((data) => data.json())
      .then((data) => setDecks(data));
  }, []);
  return (
    <>
      {decks.map((data) => {
        <Deck data={data} />;
      })}
    </>
  );
}

export default BasicExample;
