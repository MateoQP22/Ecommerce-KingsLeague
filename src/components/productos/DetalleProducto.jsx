import useProducts from "../../hooks/useProducts";

const DetalleProducto = () => {
  //const dispatch = useDispatch();
  const { product } = useProducts();
  //const { results } = product;

  return (
    <div>
      <>
            <li key={element.id}>
              <h2> {title} </h2>
              <h4>{category}</h4>
              <img src={image} alt="" height="150px" />
              <p>descripción: {description} </p>
              <h3>precio: {price} soles </h3>
              <h5>Calificación: {rating.rate}, Cantidad: {rating.count} </h5>
          <br />
        </li>
      </>
    </div>
  );
};

export default DetalleProducto;