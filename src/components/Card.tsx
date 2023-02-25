import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Card = () => {
  const selectedOption = useSelector((state: RootState) => state.selectedOption.value);

  return (
    <div>
      <h2>Selected Option</h2>
      <p>{selectedOption}</p>
    </div>
  );
};

export default Card;
