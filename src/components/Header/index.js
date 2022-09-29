import React from 'react';
import { InputSearch } from './InputSearch';
import { Logo } from './Logo';
import { HeaderStyled } from './style';

export const Header = ({ products, setFilteredProducts, value, setValue }) => {
  return (
    <HeaderStyled>
      <div className="container">
        <Logo />
        <InputSearch
          products={products}
          setFilteredProducts={setFilteredProducts}
          value={value}
          setValue={setValue}
        />
      </div>
    </HeaderStyled>
  );
};
