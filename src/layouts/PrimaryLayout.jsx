import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/sections/Navbar";
import { AuthProvider } from "../context/AuthContext";



const PrimaryLayout = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, SetCountProducts] = useState(0);

  return (
    <AuthProvider>
      <Navbar
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        SetCountProducts={SetCountProducts}
      />
      <main>
        <Outlet />
      </main>
    </AuthProvider>
  );
};

export default PrimaryLayout;