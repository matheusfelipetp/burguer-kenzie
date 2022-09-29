import React from 'react';
import { Card } from './style';
import { Button } from '../../../styles/button';

const Product = ({ name, id, elem, category, img, price, handleClick }) => {
  return (
    <Card>
      <div className="cardImg">
        <img src={img} alt={name} />
      </div>
      <div className="cardInfo">
        <h2>{name}</h2>
        <span>{category}</span>
        <p>R$ {price.toFixed(2)}</p>
        <Button onClick={() => handleClick(id)}>Adicionar</Button>
      </div>
    </Card>
  );
};

export default Product;
