import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import CategoryMen from '../components/productos/CategoryMen';
import useProducts from '../hooks/useProducts';
import { fetchReadCategoryMen } from '../redux/thunks/productsThunk';

const CategoryMenPage = () => {
    const dispatch = useDispatch();
    const { categoryMen } = useProducts();

    useEffect(() => {
        dispatch(fetchReadCategoryMen());
      }, []);

  return (
    <CategoryMen categoryMen={categoryMen}/>
  )
}

export default CategoryMenPage