import React, { useEffect, useState } from 'react';
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

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  useEffect(() => {
    document.title = 'Productos';
    dispatch(fetchReadProducts());
  }, []);


  return (

    <>
      <MainProductos>

        <ProductsGallery
          products={products}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
      </MainProductos>
    </>
  );
};

export default ProductsPage;