import React from 'react'
import HomeMen from '../home/HomeCategory/HomeMen';
import HomeContac from '../home/HomeContac';
import HomeFooter from '../home/HomeFooter';

const CategoryMen = ({ categoryMen }) => {

    return (
        <>
            <HomeMen />
            <section className="section">
                <div className="d-flex f-direction-column gap-lg">
                    <ul className="list g-elements g-elements--products-gallery gap-md">
                        {categoryMen.map((product) => {
                            const { id, title, category, price, description, rating, image } = product;
                            // const {name, flags, cca2, capital} = element;
                            return (
                                <>
                                    <li key={id} className="card card--products">
                                        {/* <h4>{category}</h4> */}
                                        <div className="t-align-center">
                                            <img src={image} alt="" height="150px" className="card__header-img card__header-img--products" />
                                        </div>
                                        <div className="card__body card__body--products">
                                            <h2 className="card__title card__title--sm"> {title} </h2>
                                            <h4 className="card__subtitle card__subtitle--sm">{category}</h4>
                                            <p className="card__text card__text--sm"><b>Descripcion</b> {description} </p>
                                            <h3 className="card__highlighted mt-auto">precio: {price} soles </h3>
                                            <h5 className="card__text card__text--sm">Calificación: {rating.rate}, Cantidad: {rating.count} </h5>
                                            <button className="button button--primary button--lg a-self-center">
                                                Realizar Pedido
                                            </button>

                                        </div>
                                    </li>
                                </>
                            );
                        })}
                    </ul>
                </div>
            </section>
            <br />
            <HomeContac />
            <HomeFooter />
        </>
    )
}

export default CategoryMen