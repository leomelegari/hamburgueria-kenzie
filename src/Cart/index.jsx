import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import "./style.css";

const Cart = ({ currentSale, setCurrentSale, setRemoved, setRemoveAll }) => {
  if (currentSale.length > 0) {
    return (
      <div className="teste">
        <div className="title-cart">
          <h3>Carrinho de compras</h3>
        </div>
        <div className="container-cart">
          {currentSale.map((added, index) => {
            if (added) {
              return (
                <CartProduct
                  addCart={added}
                  setCurrentSale={setCurrentSale}
                  currentSale={currentSale}
                  setRemoved={setRemoved}
                  key={index}
                />
              );
            }
          })}
        </div>
        <div className="cart-total-container">
          <CartTotal totalCart={currentSale} setCurrentSale={setCurrentSale} setRemoveAll={setRemoveAll}/>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-cart-noproduct">
        <div className="title-cart">
          <h3>Carrinho de compras</h3>
        </div>
        <div className="body-cart">
          <span>Seu carrinho está vazio</span>
          <span>Adicione itens</span>
        </div>
      </div>
    );
  }
};

export default Cart;
