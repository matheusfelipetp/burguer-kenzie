import { Header } from './components/Header';
import ProductList from './components/ProductList';
import { GlobalStyle } from './styles/global';
import React, { useState, useEffect } from 'react';
import { instance } from './scripts/axios';
import Cart from './components/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './components/Loading';

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(true);

  const notify = () => toast.success('Produto adicionado ao carrinho');

  const handleClick = (id) => {
    const product = products.find((elem) => elem.id === id);
    const findProduct = currentSale.find((elem) => elem.id === id);

    const productCart = {
      ...product,
      count: 1,
    };

    if (findProduct) {
      setCurrentSale([...currentSale]);
      findProduct.count += 1;
    } else {
      setCurrentSale([...currentSale, productCart]);
      notify();
    }
  };

  useEffect(() => {
    instance
      .get('/products')
      .then((res) => setProducts(res.data))
      .catch((err) => err)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header
        products={products}
        setFilteredProducts={setFilteredProducts}
        value={value}
        setValue={setValue}
      />
      <div className="grid-container">
        {loading ? (
          <Loading />
        ) : (
          <>
            <ProductList
              handleClick={handleClick}
              products={products}
              filteredProducts={filteredProducts}
              setFilteredProducts={setFilteredProducts}
              value={value}
              setValue={setValue}
            />
            <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
          </>
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </>
  );
};

export default App;
