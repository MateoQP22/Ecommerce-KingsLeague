import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useProducts from "../hooks/useProducts";
import { fetchReadProducts } from "../redux/thunks/productsThunk";

const HomePage = () => {
  const dispatch = useDispatch();
  const {products} = useProducts();

  useEffect( () => {
    document.title = 'Inicio';
    dispatch(fetchReadProducts());
  }, []);
  

  return (

    <>
    <h1>KingsLeague</h1>
    </>
  )
}

export default HomePage;