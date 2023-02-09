import { useState } from "react";
import useHome from "../../hooks/useHome";

const HomeHero = () => {
  const { homeData } = useHome();
  const [search, setSearch] = useState("");

  //función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  
  //método de filtrado
  let results = []
  if (!search) {
    results = homeData
    //console.log('Hola')
  } else {
    results = homeData.filter((dato) => (
      dato.title.toLowerCase().includes(search.toLocaleLowerCase())
    ))
    //console.log('filtra')
  }
  console.log(results)
  return (
    <>
      {results.map((element) => {
        const { id, title, price, description, image } = element;
        // const {name, flags, cca2, capital} = element;
        
        return (
          
          <>
          <input value={search} onChange={searcher} type="text" placeholder='Search' />
            <li key={element.id}>
              <h1>{id} </h1>
              <h2>{title}</h2>
              <h3>precio: {price} </h3>
              <p>descripción: {description} </p>
              <img src={image} alt="" />
            </li>
          </>
        )
      })}

    </>
  );
  
};

export default HomeHero;