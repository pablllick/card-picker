import React, { useState } from 'react';

export default function Card({ data, setTotal, totalCountHandler }) {
  const [rightAnswer, setRightAnswer] = useState('');
  const [inputValue, setInputValue] = useState('');
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };
  const clickHadler = () => {
    totalCountHandler();
    if (inputValue === data.answer) {
      setRightAnswer(data.answer);
      setTotal((prev) => (prev += 1));
      return true;
    } else {
      setRightAnswer('Ошибка 408. Подумай еще!');
    }
    return false;
  };
  return (
    <>
      <p>{data.question}</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        <button onClick={clickHadler}>Жми на кнопку</button>
        <p
          style={{
            width: '200px',
            height: '100%',
            color: `${inputValue === data.answer ? 'green' : 'red'}`,
          }}
        >
          {rightAnswer}
        </p>
      </div>
    </>
  );
}
