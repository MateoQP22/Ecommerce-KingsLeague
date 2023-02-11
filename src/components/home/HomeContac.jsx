const HomeContac = () => {
    return (
        <>
            <section className="formulario">
                <form className="form">
                    <h2 className="form__title">Contactanos</h2>
                    <p className="form__paragraph">Quieres una cuenta? <a href="#" className="form__link">Entra aqui</a></p>
                    <div className="form__container">
                        <div className="form__group">
                            <input type="text" id="name" className="form__input" placeholder="" />
                            <label htmlFor="name" className="form__label">Nombre:</label>
                            <span className="form__line"></span>
                        </div>
                        <div className="form__group">
                            <input type="text" id="user" className="form__input" placeholder="" />
                            <label htmlFor="name" className="form__label">Correo:</label>
                            <span className="form__line"></span>
                        </div>
                        <div className="form__group">
                            <input type="text" id="password" className="form__input" placeholder="" />
                            <label htmlFor="name" className="form__label">Whatsapp:</label>
                            <span className="form__line"></span>
                        </div>
                        <input type="submit" className="form__submit" value='Enviar' />
                    </div>
                </form>
            </section>
        </>
    )
};

export default HomeContac;