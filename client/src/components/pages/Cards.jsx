import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../ui/Card';

export default function Cards() {
  const params = useParams();
  const [card, setCard] = useState([]);
  const [total, setTotal] = useState(0);
  const [imgTrue, setImgTrue] = useState(true);
  useEffect(() => {
    fetch(`/api/deck/${params.id}`)
      .then((data) => data.json())
      .then((data) => setCard(data));
  }, []);
  const totalCountHandler = () => {
    if (card.length - 1 === total) {
      setImgTrue(false);
    }
  };
  return (
    <>
      {card.map((item) => (
        <Card
          key={item.id}
          data={item}
          setTotal={setTotal}
          totalCountHandler={totalCountHandler}
        />
      ))}
      <p>Ваш счет - {total} правильных ответов</p>
      <img
        src="https://avatars.dzeninfra.ru/get-zen_doc/1889495/pub_608bb67834055e2cb324a289_608bb69290ed913710860219/scale_1200"
        style={{ display: `${imgTrue ? 'none' : 'block'}` }}
        alt="Cat"
      />
    </>
  );
}
