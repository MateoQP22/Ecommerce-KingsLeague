import { useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import HomeContac from "../home/HomeContac";
import HomeFooter from "../home/HomeFooter";
import HomeHero from "../home/HomeHero";
import ProductHeader from "./ProductHeader";

const ProductsGallery = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal
}) => {
  const { products } = useProducts();
  const [search, setSearch] = useState("");

  //carrito
  const onAddProduct = product => {
    //console.log("add")

    if (allProducts.find(item => item.id === product.id)) {
      const products = allProducts.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);

    }
    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };
  console.log(allProducts)

  //función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }
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

  //datosFiltrados = results
  return (
    <>
      <ProductHeader />
      <section className="section">
        <div className="d-flex f-direction-column gap-lg">
          <div className="container">
            <form action="">
              <div className="form__group">

                <input className="form__input" type="text" value={search} onChange={searcher} placeholder="Buscar Producto" />

              </div>
            </form>
          </div>

          <ul className="list g-elements g-elements--products-gallery gap-md">
            {results.map((product) => {
              const { id, title, category, price, description, rating, image } = product;
              // const {name, flags, cca2, capital} = element;
              return (
                <>
                  <li key={id} className="card card--products">
                    {/* <h4>{category}</h4> */}
                    <div className="t-align-center">
                      <img src={image} alt="" height="150px" className="card__header-img card__header-img--products" />
                    </div>
                    <div className="card__body card__body--products">
                      <Link to={`/productos/${id}`} >
                        <h2 className="card__title card__title--sm"> {title} </h2>
                      </Link>
                      <h4 className="card__subtitle card__subtitle--sm">{category}</h4>
                      <p className="card__text card__text--sm"><b>Descripcion</b> {description} </p>
                      <h3 className="card__highlighted mt-auto">precio: {price} soles </h3>
                      <h5 className="card__text card__text--sm">Calificación: {rating.rate}, Cantidad: {rating.count} </h5>
                      <a
                        href={`https://api.whatsapp.com/send?phone=51999894566&text=Deseo pedir el producto ${title}, con el precio: ${price}`}
                        target="_blank"
                        className="button button--primary mt-auto"
                      >Realizar Pedido</a>

                    </div>
                  </li>
                </>
              )
            })}
          </ul>
        </div>
      </section>
      <HomeContac />
      <HomeFooter />
    </>
  );
};

export default ProductsGallery;