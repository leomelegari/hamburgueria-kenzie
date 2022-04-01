import "./style.css";

const CartTotal = ({ totalCart, setCurrentSale, setRemoveAll }) => {
  console.log(totalCart);
  const total = totalCart.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  function clearCart() {
    setCurrentSale([]);
    setRemoveAll(true);
    setTimeout(() => {
      setRemoveAll(false)
    }, 3000)
  }

  return (
    <div className="container-total">
      <div className="total">
        <span>Total</span>
        <span>
          {total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div className="btn-remove-all">
        <button onClick={clearCart}>Remover todos</button>
      </div>
    </div>
  );
};

export default CartTotal;
