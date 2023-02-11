import modelo2 from '../../assets/modelo2.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
const HomeFooter = () => {
    return (
        <>
            <footer className="footer" id="contacto">
                <div className="footer-container">
                    <div className="footer__information">
                        <div className="article_conten">
                            <article className="footer__contacto-container">
                                <h2 className="footer__contacto-title">Consejos</h2>
                                <h3 className="footer__contacto-descripcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Itaque labore ipsum sint expedita,
                                    dolorem nemo consectetur doloribus laudantium, recusandae rerum, cum alias animi omnis magni
                                    excepturi. Molestiae facere architecto perferendis?</h3>
                            </article>
                        </div>
                        <div className="article_conten">
                            <article className="footer__servicios-container">
                                <h2 className="footer__servicios-title"> Estilo y Moda</h2>
                                <h3 className="footer__servicios-descripcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Blanditiis, maiores. Beatae quisquam
                                    excepturi vero adipisci quae consequuntur nam nostrum reprehenderit nemo atque amet saepe
                                    facere, perspiciatis doloremque officia alias doloribus?</h3>
                            </article>
                        </div>
                    </div>
                    <div>
                        <div className='img_footer'>
                            <img src={modelo2} alt="" height='500px' />
                        </div>
                    </div>
                    <div className='redes'>
                        <nav className="footer__social-media-container">
                            <ul className="footer__link-list">
                                <li className="footer__link-item">
                                    <i class="bi bi-youtube"></i>
                                </li>
                                <li class="footer__link-item">
                                    <i class="bi bi-facebook"></i>
                                </li>
                                <li className="footer__link-item">
                                    <i class="bi bi-whatsapp"></i>
                                </li>
                                <li className="footer__link-item">
                                    <i class="bi bi-instagram"></i>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default HomeFooter;