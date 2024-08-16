import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Deck from '../ui/Deck';
import Col from 'react-bootstrap/Col';

function BasicExample() {
  const [decks, setDecks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('/api/deck')
      .then((data) => data.json())
      .then((data) => setDecks(data));
  }, []);

  const handlerChooseDeck = (id) => {
    navigate(`/card/${id}`);
  };
  return (
    <>
      {decks.map((deck) => (
        <Col lg={'auto'}>
          <Deck data={deck} handlerChooseDeck={handlerChooseDeck} />
        </Col>
      ))}
    </>
  );
}

export default BasicExample;
