import React from 'react'
import modelo from '../../assets/modelo3.png'

const ProductHeader = () => {
    
  return (
    <>
      <section className='section'>
        <div className='contenedor_hero'>
          <div className='text_hero'>
            <div className='title_hero'>
              <h1 >Kings League</h1>
            </div>
            <div className='descripcion_hero'>
              <h4>Todo en accesorios y ropa tanto para hombres como para mujeres,
                navega por nuestra tienda online y encuentra los mejores productos y precios para ti</h4>
              <div className='boton_hero'>
              </div>
            </div>
            <div className='img_hero'>
              <img src={modelo} alt="" width={"650px"} height={"650px"} />
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default ProductHeader