import React, { useState, useEffect } from 'react';
import ColumnInput from './components/column/index';
import Star from './assets/star.svg';
import './App.css';

function App() {
  const [value, setValue] = useState([
    { 0: '', 1: '', 2: '', 3: '', name: '' },
    { 0: '', 1: '', 2: '', 3: '', name: '' },
    { 0: '', 1: '', 2: '', 3: '', name: '' },
    { 0: '', 1: '', 2: '', 3: '', name: '' },
  ]);
  const [winners, setWinners] = useState([]);
  console.log(winners);

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

  const listItems = numbers.map((number, i) => (
    <ColumnInput
      value={value[i]}
      setValue={(obj) => set_to_index(i, obj)}
      key={number.toString()}
      winners={winners}
    />
  ));

  useEffect(() => {
    let array_points = [];
    for (let object of value) {
      if (object[3] === '') {
        break;
      } else {
        const points =
          Number(object[0]) + Number(object[1]) + Number(object[2]) + Number(object[3]);
        array_points.push(points);
        setWinners(array_points.indexOf(Math.min(...array_points)));
      }
    }
  }, [value]);

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
