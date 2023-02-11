import React from 'react'
import { Link } from 'react-router-dom'

const HomeWoman = () => {
    return (
        <>
        <div className="title_categorias"><h2>Seccion de Damas</h2></div>

        <Link to="/categoryWoman">
            <div className="categorias contenedor_img">
                <img src="https://cdn.shopify.com/s/files/1/0343/1658/3045/products/MITRE-JUN2252704_1800x1800.jpg?v=1663091711" alt="" height="400" width="200" />
                <img src="https://cdn.shopify.com/s/files/1/0343/1658/3045/products/MITREABRL2236244_1800x1800.jpg?v=1654260108" alt="" height="400" width="200" />
                <img src="https://cdn.shopify.com/s/files/1/0343/1658/3045/products/MITREABRL2236052_1800x1800.jpg?v=1654260108" alt="" height="400" width="200" />
                <img src="https://cdn.shopify.com/s/files/1/0343/1658/3045/products/MITREabril2021112184_1800x1800.jpg?v=1654260108" alt="" height="400" width="200" />
                <img src="https://cdn.shopify.com/s/files/1/0343/1658/3045/products/MITREabril2021111974_1_1800x1800.jpg?v=1654260108" alt="" height="400" width="200" />
            </div>
        </Link>
        </>
    )
}

export default HomeWoman