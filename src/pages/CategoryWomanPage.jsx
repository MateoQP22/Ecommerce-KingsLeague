import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import CategoryWoman from '../components/productos/CategoryWoman';
import useProducts from '../hooks/useProducts';
import { fetchReadCategoryWoman } from '../redux/thunks/productsThunk';

const CategoryWomanPage = () => {
    const dispatch = useDispatch();
    const { categoryWoman } = useProducts();

    useEffect(() => {
        dispatch(fetchReadCategoryWoman());
      }, []);

  return (
    <CategoryWoman categoryWoman={categoryWoman}/>
  )
}

export default CategoryWomanPage