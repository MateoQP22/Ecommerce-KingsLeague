// import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeContac from "../components/home/HomeContac";
import HomeFooter from "../components/home/HomeFooter";
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
    <HomeContac/>
    <HomeFooter/>
    </>
  )
}

export default HomePage;