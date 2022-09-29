import React from 'react';
import { Button } from '../../styles/button';
import Product from './Product';
import { Title, List } from './style';

const ProductList = ({
  products,
  handleClick,
  filteredProducts,
  setFilteredProducts,
  value,
  setValue,
}) => {
  const resetSerach = () => {
    setFilteredProducts([]);
    setValue('');
  };

  return (
    <main>
      {filteredProducts.length > 0 && (
        <Title>
          <h1>
            Resultados para:
            <span> {value}</span>
          </h1>
          <Button onClick={() => resetSerach()}>Limpar busca</Button>
        </Title>
      )}
      <List>
        {filteredProducts.length ? (
          <>
            {filteredProducts.map((elem) => (
              <Product
                key={elem.id}
                id={elem.id}
                elem={elem}
                name={elem.name}
                category={elem.category}
                img={elem.img}
                price={elem.price}
                handleClick={handleClick}
              />
            ))}
          </>
        ) : (
          products.map((elem) => (
            <Product
              key={elem.id}
              id={elem.id}
              elem={elem}
              name={elem.name}
              category={elem.category}
              img={elem.img}
              price={elem.price}
              handleClick={handleClick}
            />
          ))
        )}
      </List>
    </main>
  );
};

export default ProductList;
