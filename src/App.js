import { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import './App.css';
import Cart from './Cart';
import Header from './Header';
import ProductList from './ProductList';

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [removed, setRemoved] = useState(false);
  const [added, setAdded] = useState(false);
  const [removeAll, setRemoveAll] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [alreadyHave, setAlreadyHave] = useState(false)

  console.log(filteredProducts)

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className='body'>
      <div>
        {removed === true && <Alert severity="info" variant="filled">Item removido</Alert>}
        {added === true && <Alert variant="filled" severity="success">Item adicionado</Alert>}
        {removeAll === true && <Alert variant="filled" severity="warning">Todos os itens removidos</Alert>}
        {notFound === true && <Alert variant="filled" severity="error">Nenhum produto encontrado</Alert>}
        {alreadyHave === true && <Alert variant="filled" severity="error">Produto limitado a 1 por cliente</Alert>}
      </div>
      <header className="App-body">
        <div className='container-header-1440'>
          <Header products={products} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} setNotFound={setNotFound} />
        </div>
        <div className='container-flex-1440'>
          {filteredProducts.length > 0
            ? <div className='teste2'>
              <ProductList list={filteredProducts} setCurrentSale={setCurrentSale} currentSale={currentSale} setAdded={setAdded} />
              <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} setRemoved={setRemoved} setRemoveAll={setRemoveAll} />
            </div>
            : <>
              {console.log(filteredProducts.length)}
              <ProductList list={products} setCurrentSale={setCurrentSale} currentSale={currentSale} setAdded={setAdded} setAlreadyHave={setAlreadyHave} />
              <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} setRemoved={setRemoved} setRemoveAll={setRemoveAll} />
            </>}
        </div>
      </header>
    </div>
  );
}

export default App;
