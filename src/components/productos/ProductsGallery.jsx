import { useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const ProductsGallery = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState("");

  //función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  //función seleccionar checkbox

  const [categoriaElegida, setcategoriaElegida] = useState({
    men: false,
  });

  const [datosFiltrados, setdatosFiltrados] = useState
    ([]);

  const handleOnCheckbox = e => {
    setcategoriaElegida({
      ...categoriaElegida,
      [e.target.value]: e.target.checked,
    });
    //condicion para devolver los resultados de 1 checkbox
    if (e.target.checked) {
      const resultadoCategoria = products.filter(item => item.category === e.target.value)

      setdatosFiltrados([...datosFiltrados, ...resultadoCategoria]);
    } else {
      const resultadoCategoria = datosFiltrados.filter(item => item.category !== e.target.value)

      setdatosFiltrados([...resultadoCategoria]);
    }
  };

  console.log(datosFiltrados)

  //método de filtrado
  let results = []
  if (!search) {
    results = products
    //console.log('Hola')
  } else {
    results = products.filter((dato) => (
      dato.title.toLowerCase().includes(search.toLocaleLowerCase())
    ))
    //console.log('filtra')
  }
 // console.log(results)
  return (
    <>
      <div>
        <ul>
          <p>Buscar Producto:
            <input value={search} onChange={searcher} type="text" placeholder='Búsqueda' />
          </p>
          <p>Categorías:</p>
          <div>
            <input
              onChange={handleOnCheckbox}
              type="checkbox"
              name="categorias"
              value="men's clothing"
              id="men's clothing"
            />
            <label htmlFor="men's clothing">Hombres</label>
          </div>
          <br />
          <br />
          {results.map((element) => {
            const { id, title, category, price, description, rating, image } = element;
            // const {name, flags, cca2, capital} = element;

            return (

              <>
                <li key={element.id}>
                  <Link to={`/products/${id}`} >
                  <h2> {title} </h2>
                  </Link>
                  <h4>{category}</h4>
                  <img src={image} alt="" height="150px" />
                  <p>descripción: {description} </p>
                  <h3>precio: {price} soles </h3>
                  <h5>Calificación: {rating.rate}, Cantidad: {rating.count} </h5>
                  <br />
                </li>
              </>
            )
          })}
        </ul>
      </div>
    </>
  );

};

export default ProductsGallery;