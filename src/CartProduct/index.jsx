import "./style.css";

const CartProduct = ({ addCart, setCurrentSale, currentSale, setRemoved }) => {
  function remove(toRemove) {
    const findIndex = Number(currentSale.indexOf(toRemove));
    if (findIndex > -1) {
      currentSale.splice(findIndex, 1);
      setCurrentSale([...currentSale]);
      setRemoved(true)
      setTimeout(() => {
        setRemoved(false)
      }, 3000)
    }
  }

  return (
    <div className="product-cart">
      <div className="container-cart-product">
        <div className="cart-img-product">
          <img src={addCart.img} alt="produto no carrinho" />
        </div>
        <div className="info-cart-product">
          <span>{addCart.name}</span>
          <span>{addCart.category}</span>
        </div>
      </div>
      <div className="remove-item" onClick={() => remove(addCart)}>
        <span >Remover</span>
      </div>
    </div>
  );
};

export default CartProduct;
