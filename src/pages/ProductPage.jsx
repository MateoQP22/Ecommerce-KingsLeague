import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetalleProducto from "../components/productos/DetalleProducto";
import { fetchReadProduct } from "../redux/thunks/productsThunk";

const ProductPage = () => {
  const dispatch = useDispatch();
  const {slug} =useParams();

  useEffect(() => {
    dispatch(fetchReadProduct(slug));
  }, []);
  
  return (
    <DetalleProducto />
  );
};

export default ProductPage;