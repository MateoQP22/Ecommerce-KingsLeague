import useProducts from "../../hooks/useProducts";

const DetalleProducto = () => {
  //const dispatch = useDispatch();
  const { product } = useProducts();
  //const { results } = product;

  return (
    <div>
      <br />
      <br />
      <br />
      <>
            <li key={product.id}>
              <h2> {product.title} </h2>
              <h4>{product.category}</h4>
              <img src={product.image} alt="" height="150px" />
              <p>descripción: {product.description} </p>
              <h3>precio: {product.price} soles </h3>
              {/* <h5>Calificación: {rating.rate}, Cantidad: {rating.count} </h5> */}
          <br />
        </li>
      </>
    </div>
  );
};

export default DetalleProducto;