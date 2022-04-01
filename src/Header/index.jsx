import { useState } from "react";
import "./style.css";

const Header = ({
  products,
  filteredProducts,
  setFilteredProducts,
  setNotFound,
}) => {
  const [value, setValue] = useState("");

  const filter = () => {
    const filteredProd = products.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.category.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredProd.length === 0) {
      setNotFound(true);
      setTimeout(() => {
        setNotFound(false);
      }, 3000);
    }
    setFilteredProducts(filteredProd);
  };

  return (
    <div>
      <div className="container-header">
        <div className="header-logo">
          <img src="./kblogo.svg" alt="logo kenzie burger" />
        </div>
        <div className="header-search">
          <input
            type="text"
            aria-label="input"
            placeholder="Nome ou categoria"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => filter()}>Pesquisar</button>
        </div>
      </div>
      {/* <span className="showAll">Limpar filtro</span> */}
    </div>
  );
};

export default Header;
