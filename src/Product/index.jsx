import "./style.css";

const Product = ({
  prod,
  setCurrentSale,
  currentSale,
  setAdded,
  setAlreadyHave,
}) => {
  function addNewItem(newItem) {
    const verify = currentSale.indexOf(newItem);

    if (verify === -1) {
      setCurrentSale([...currentSale, newItem]);
      setAdded(true);
      setTimeout(() => {
        setAdded(false);
      }, 3000);
    } else {
      setAlreadyHave(true);
      setTimeout(() => {
        setAlreadyHave(false);
      }, 3000);
    }
  }

  return (
    <div>
      <div className="container-product">
        <div className="image">
          <img
            src={prod.img}
            alt="imagem do produto"
            style={
              prod.category === "Bebidas" ? { marginBottom: 35 + "px" } : null
            }
          />
        </div>
        <div className="info">
          <h3>{prod.name}</h3>
          <p>{prod.category}</p>
          <p>
            {prod.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <button onClick={() => addNewItem(prod)}>Adicionar</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
