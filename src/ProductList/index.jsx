import Product from "../Product";
import "./style.css";

const ProductList = ({
  list,
  setCurrentSale,
  currentSale,
  setAdded,
  setAlreadyHave
}) => {

  return (
    <div className="all-products">
      {list.map((prod) => {
            return (
              <Product
                prod={prod}
                setCurrentSale={setCurrentSale}
                currentSale={currentSale}
                setAdded={setAdded}
                setAlreadyHave={setAlreadyHave}
                key={prod.id}
              />
            );
          })}
    </div>
  );
};

export default ProductList;
