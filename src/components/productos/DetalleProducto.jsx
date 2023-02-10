import { useDispatch } from "react-redux";
import useProducts from "../../hooks/useProducts";

const DetalleProducto = () => {
  const dispatch = useDispatch();
  const {product} =useProducts();
  const {results} = product;

  return (
              /*{results.map((element) => {
            const { id, slug, title, category, price, description, rating, image } = element;
            // const {name, flags, cca2, capital} = element;

            return (

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
            )
          })}*/
          <h1>Detalle</h1>
  );
};

export default DetalleProducto;