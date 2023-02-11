import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RegisterPage = () => {

  const navigate = useNavigate();

  const { loading, error, user, createUser } = useAuth();

  const [registrationForm, setRegistrationForm] = useState({
    email: '',
    password: ''
  });

  const { email, password } = registrationForm;

  const handleChangeRegistrationForm = (e) => {
    setRegistrationForm({
      ...registrationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitCreateUser = async (e) => {
    e.preventDefault();
    await createUser(email, password);
  };

  useEffect(() => {
    console.log(user);
    if (Object.keys(user).length) {
      navigate('/');
    }
  }, [user]);

  return (
    <>
      <section className="section">
        <div className="container d-flex f-direction-column a-items-center min-h-100vh">
          <div className="Form_Login">
            <h1>Register User</h1>
            <form
              onSubmit={handleSubmitCreateUser}
            >
              <input
                type="email"
                name="email"
                placeholder="Correo"
                className="form__input"
                value={email}
                onChange={handleChangeRegistrationForm}
              />

              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                className="form__input"
                value={password}
                onChange={handleChangeRegistrationForm}
              />

              <input type="submit" value="Registrar" className="button button--primary m-top"/>
            </form>
            <br />
            <Link to="/login" className="button button--secondary">Iniciar sesión</Link>
            {loading && <span>Cargando...</span>}
            {error && <span>{error.code}</span>}

          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;