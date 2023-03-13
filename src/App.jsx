import React, { useState } from 'react';
import ColumnInput from './components/column/index';
import Star from './assets/star.svg';
import './App.css';

const findWinners = (value) => {
  const points = value.map((item) => {
    return (
      Number(item[0] || Infinity) +
      Number(item[1] || Infinity) +
      Number(item[2] || Infinity) +
      Number(item[3] || Infinity)
    );
  });
  const minPoint = Number(Math.min(...points));
  return points
    .map((item, index) => {
      return item === minPoint ? index : undefined;
    })
    .filter((item) => item !== undefined);
};

const shouldShowWinner = (value) => {
  return (
    value.every((item) => {
      return (
        (item[0] !== '' && item[1] !== '' && item[2] !== '' && item[3] !== '') ||
        (item[0] === '' && item[1] === '' && item[2] === '' && item[3] === '')
      );
    }) &&
    value.some((item) => {
      return item[0] !== '' || item[1] !== '' || item[2] !== '' || item[3] !== '';
    })
  );
};

function App() {
  const [value, setValue] = useState([
    { 0: '', 1: '', 2: '', 3: '', name: '' },
    { 0: '', 1: '', 2: '', 3: '', name: '' },
    { 0: '', 1: '', 2: '', 3: '', name: '' },
    { 0: '', 1: '', 2: '', 3: '', name: '' },
  ]);

  const reset = () => {
    const clear = [
      { 0: '', 1: '', 2: '', 3: '', name: '' },
      { 0: '', 1: '', 2: '', 3: '', name: '' },
      { 0: '', 1: '', 2: '', 3: '', name: '' },
      { 0: '', 1: '', 2: '', 3: '', name: '' },
    ];
    setValue(clear);
  };

  const numbers = [1, 2, 3, 4];

  const set_to_index = (index, obj) => {
    let value_copy = JSON.parse(JSON.stringify(value));
    value_copy[index] = obj;
    setValue(value_copy);
  };

  const checkWinners = shouldShowWinner(value);
  const winners = findWinners(value);

  const listItems = numbers.map((number, i) => {
    return (
      <ColumnInput
        value={value[i]}
        setValue={(obj) => set_to_index(i, obj)}
        key={number.toString()}
        isWinner={winners.includes(i) && checkWinners}
      />
    );
  });

  return (
    <div className="page">
      <div className="header">
        <div className="tittle">
          <h4>Silver</h4>
        </div>
        <div className="resetbtn">
          <button className="star" onClick={reset}>
            <img src={Star} />
          </button>
        </div>
      </div>
      <div className="main">
        <div className="label">
          <span className="rotate name">NAME</span>
          <span className="name">1</span>
          <span className="name">2</span>
          <span className="rotate name">SUB</span>
          <span className="name">3</span>
          <span className="rotate name">SUB</span>
          <span className="name">4</span>
          <span className="rotate name">TOTAL</span>
        </div>
        {listItems}
      </div>
    </div>
  );
}

export default App;
