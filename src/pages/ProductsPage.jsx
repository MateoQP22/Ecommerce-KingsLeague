import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainProductos from '../components/productos/MainProductos';
import ProductsGallery from '../components/productos/ProductsGallery';
import useProducts from '../hooks/useProducts';
import { fetchReadProducts } from '../redux/thunks/productsThunk';

const ProductsPage = () => {
  //const navigate = useNavigate();
  //const { user } = useAuth();

  const dispatch = useDispatch();
  const { products } = useProducts();

  /*useEffect(() => {
    if (Object.keys(user).length) {
      navigate('/productos');
    }
  }, [user]);*/

  useEffect(() => {
    document.title = 'Productos';
    dispatch(fetchReadProducts());
  }, []);


  return (

    <>
    <MainProductos
      title="Galería de Productos"
    >

      <ProductsGallery products={products} />
    </MainProductos>
    </>
  );
};

export default ProductsPage;