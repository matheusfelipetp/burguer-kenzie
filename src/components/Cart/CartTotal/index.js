import React from 'react';
import { Button } from '../../../styles/button';
import { CartStyled } from './style';

const CartTotal = ({ currentSale }) => {
  const sumTotal = () =>
    currentSale.reduce((acc, act) => acc + act.price * act.count, 0);

  return (
    <CartStyled>
      <div className="totalInfo">
        <p>Total</p>
        <span>R$ {sumTotal().toFixed(2)}</span>
      </div>
      <Button>Finalizar pedido</Button>
    </CartStyled>
  );
};

export default CartTotal;
