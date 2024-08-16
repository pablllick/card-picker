import { useEffect, useState } from 'react';
import Deck from '../ui/Deck';
import Col from 'react-bootstrap/Col';

function BasicExample() {
  const [decks, setDecks] = useState([]);
  useEffect(() => {
    fetch('/api/deck')
      .then((data) => data.json())
      .then((data) => setDecks(data));
  }, []);

  return (
    <>
      {decks.map((deck) => (
        <Col lg={'auto'}>
          <Deck data={deck} />
        </Col>
      ))}
    </>
  );
}

export default BasicExample;
