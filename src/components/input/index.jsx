/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';

function Inputbox(props) {
  return (
    <input
      className="inputbox"
      type={props.type}
      required={props.required}
      disabled={props.disabled}
      value={props.value}
      onChange={(e) => props.handleChange(e)}
    />
  );
}

export default Inputbox;
