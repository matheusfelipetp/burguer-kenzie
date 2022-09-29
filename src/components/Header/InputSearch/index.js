import React from 'react';
import { Button } from '../../../styles/button';
import { Form } from './style';
import { toast } from 'react-toastify';

export const InputSearch = ({
  products,
  setFilteredProducts,
  value,
  setValue,
}) => {
  const notify = () => toast.error('Produto não encontrado');
  const notifyError = () => toast.error('Digite um produto');

  const search = (value) => {
    const valueNormalize = value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    const filterProduct = products.filter(
      (elem) =>
        elem.name.toLowerCase().includes(valueNormalize) ||
        elem.category.toLowerCase().includes(valueNormalize),
    );

    if (filterProduct.length && valueNormalize !== '') {
      setFilteredProducts(filterProduct);
    } else if (valueNormalize === '') {
      notifyError();
    } else {
      notify();
    }
  };

  return (
    <Form onSubmit={(e) => e.preventDefault(search(value))}>
      <input
        type="text"
        placeholder="Digite o produto"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit">Pesquisar</Button>
    </Form>
  );
};
