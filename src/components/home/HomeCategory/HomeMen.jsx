import React from 'react'
import { Link } from 'react-router-dom'

const HomeMen = () => {
    return (
        <>
            <div className="title_categorias"><h2>Seccion de Varones</h2></div>
            <Link to="/categoryMen">
                <div className="categorias contenedor_img">
                    <img src="https://cdn.shopify.com/s/files/1/0343/1658/3045/products/3_3f687d31-41b5-470d-a1ac-6f6a1ff5dc4f_1800x1800.jpg?v=1629949321" alt="" height="400" width="200" />
                    <img src="https://cdn.shopify.com/s/files/1/0343/1658/3045/products/AGO202120712_719da288-3a52-4616-b758-35fac7d894ab_1800x1800.jpg?v=1673564506" alt="" height="400" width="200" />
                    <img src="https://cdn.shopify.com/s/files/1/0343/1658/3045/products/AGO202121894_97c33897-5e4f-445d-8c3c-067301b1315d_1800x1800.jpg?v=1673564507" alt="" height="400" width="200" />
                    <img src="https://cdn.shopify.com/s/files/1/0343/1658/3045/products/3_e708e737-0f46-498c-b9f1-ba29fb778bf5_1800x1800.jpg?v=1629949321" alt="" height="400" width="200" />
                    <img src="https://cdn.shopify.com/s/files/1/0343/1658/3045/products/AGO202121452_720x.jpg?v=1629949321" alt="" height="400" width="200" />
                </div>
            </Link>
        </>
    )
}

export default HomeMen