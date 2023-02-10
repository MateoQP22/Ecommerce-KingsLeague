// import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeHero from "../components/home/HomeHero";
import HomeMain from "../components/home/HomeMain";
// import useProducts from "../hooks/useProducts";
// import { fetchReadProducts } from "../redux/thunks/productsThunk";

const HomePage = () => {
  const dispatch = useDispatch();
  // const {products} = useProducts();
  // const {homedata} = useHome();

  // useEffect( () => {
  //   document.title = 'Proyecto';
  //   dispatch(fetchReadHomeData());
  // }, []);
  

  return (

    <>
    <HomeHero/>
    <HomeMain/>
    </>
  )
}

export default HomePage;