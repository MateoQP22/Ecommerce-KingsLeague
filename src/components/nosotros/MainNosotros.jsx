import React from 'react'
import modelo3 from '../../assets/modelo3.png'
const MainNosotros = () => {
  return (
    <>
      <header className='header_nostros'>
        <section className='descripcion'>
          <h1 className='titulo'>Kings League</h1>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi necessitatibus quaerat vel minima sunt vero molestias doloremque, sit aut quae unde corrupti, adipisci, exercitationem iusto nemo corporis voluptas aperiam aspernatur.</h2>
          <div className='wave'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#fff" fill-opacity="1" d="M0,160L48,133.3C96,107,192,53,288,64C384,75,480,149,576,202.7C672,256,768,288,864,261.3C960,235,1056,149,1152,144C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" ></path>
            </svg>
          </div>
        </section>

      </header>
      <main>
        <section>
          <footer className="nosotros" id="contacto">
            <h2 className='titulo'>Mas Sobre Nosotros</h2>
            <div className="nosotros-container">
              <div className="nosotros__information">
                <div className="nosotros__article_conten">
                  <article className="nosotros__contacto-container">
                    <h2 className="nosotros__contacto-title">Mision</h2>
                    <h3 className="nosotros__contacto-descripcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Itaque labore ipsum sint expedita,
                      dolorem nemo consectetur doloribus laudantium, recusandae rerum, cum alias animi omnis magni
                      excepturi. Molestiae facere architecto perferendis?</h3>
                  </article>
                </div>
                <div className="nosotros__article_conten">
                  <article className="nosotros__servicios-container">
                    <h2 className="nosotros__servicios-title">Vision</h2>
                    <h3 className="nosotros__servicios-descripcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Blanditiis, maiores. Beatae quisquam
                      excepturi vero adipisci quae consequuntur nam nostrum reprehenderit nemo atque amet saepe
                      facere, perspiciatis doloremque officia alias doloribus?</h3>
                  </article>
                </div>
              </div>
              <div>
                <div className='img_nosotros'>
                  <img src={modelo3} alt="" height='500px' />
                </div>
              </div>

            </div>
          </footer>
        </section>
      </main>
    </>
  )
};

export default MainNosotros;