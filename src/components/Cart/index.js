import React from 'react';
import { CartStyled } from './style';
import CartProduct from './CartProduct';
import CartTotal from './CartTotal';

const Cart = ({ currentSale, setCurrentSale, count }) => {
  return (
    <CartStyled currentSale={currentSale}>
      <h2>Carrinho de compras</h2>
      <div className="cartInfo">
        {!currentSale.length ? (
          <>
            <p>Sua sacola está vazia</p>
            <span>Adicione itens</span>
          </>
        ) : (
          <>
            <CartProduct
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
              count={count}
            />
            <CartTotal currentSale={currentSale} />
          </>
        )}
      </div>
    </CartStyled>
  );
};

export default Cart;
