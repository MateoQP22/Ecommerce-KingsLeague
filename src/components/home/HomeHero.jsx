
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import ecommerce1 from '../../assets/ecommerce1.jpg';
import modelo from '../../assets/modelo.png'
import { Link } from 'react-router-dom';
const HomeHero = () => {
  return (

    <>
      <section className='hero'>
        <div className='contenedor_hero'>
          <div className='text_hero'>
            <div className='title_hero'>
              <h1 >Kings League</h1>
            </div>
            <div className='descripcion_hero'>
              <p>Todo en accesorios y ropa tanto para hombres como para mujeres,
                navega por nuestra tienda online y encuentra los mejores productos y precios para ti</p>
              <div className='boton_hero'>
                <Link to="/Productos" className='link_hero'>Ver Productos</Link>
              </div>



            </div>
            <div className='img_hero'>
              <img src={modelo} alt="" />
            </div>
          </div>
        </div>

      </section>
    </>
  )
};

export default HomeHero;