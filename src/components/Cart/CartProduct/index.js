import React from 'react';
import { ListCart } from './style';
import { TiDelete } from 'react-icons/ti';
import 'animate.css';
import { toast } from 'react-toastify';

const CartProduct = ({ currentSale, setCurrentSale }) => {
  const notify = () => toast.success('Produto removido');

  const removeItem = (item, target) => {
    if (item.count > 1) {
      setCurrentSale((list) => [...list]);
      item.count -= 1;
    } else {
      const productCard = target.closest('li');
      productCard.classList.remove('animate__bounceInRight');
      productCard.classList.add('animate__bounceOutLeft');

      notify();
      setTimeout(() => {
        setCurrentSale((list) => list.filter((elem) => elem !== item));
      }, 500);
    }
  };

  return (
    <ListCart>
      {currentSale.map((elem) => (
        <li
          key={elem.id}
          elem={elem.id}
          className="animate__animated animate__bounceInRight animate__fast"
        >
          <div className="productImg">
            <img src={elem.img} alt={elem.name} />
          </div>
          <div className="productInfo">
            <h3>{elem.name}</h3>
            <span>{elem.category}</span>
            <span>Qtd: {elem.count}</span>
          </div>
          <button
            type="button"
            onClick={(e) => {
              const target = e.target;
              removeItem(elem, target);
            }}
          >
            <TiDelete
              aria-label="Remover do carrinho"
              fontSize="32px"
              color="#f03e3e"
            />
          </button>
        </li>
      ))}
    </ListCart>
  );
};

export default CartProduct;
