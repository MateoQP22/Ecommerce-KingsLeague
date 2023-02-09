import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeHero from "../components/home/HomeHero";
import useHome from "../hooks/useHome";
import { fetchReadHomeData } from "../redux/thunks/homeThunk";

const HomePage = () => {
  const dispatch = useDispatch();
  const {homedata} = useHome();

  useEffect( () => {
    document.title = 'Proyecto';
    dispatch(fetchReadHomeData());
  }, []);
  

  return (

    <>
    <h1>Hola</h1>
    <HomeHero homedata={homedata} />
    </>
  )
}

export default HomePage;