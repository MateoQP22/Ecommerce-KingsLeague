import { useState } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { store } from './redux/store';
import { primaryRoutes } from './routes/PrimaryRoutes';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, SetCountProducts] = useState(0);

  return (
    <Provider store={store}>
      <RouterProvider
        router={primaryRoutes}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        SetCountProducts={SetCountProducts}
      />
    </Provider>
  );
}

export default App;