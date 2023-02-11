import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const { loading, error, user, readUser } = useAuth();

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const { email, password } = loginForm;

  const handleChangeLoginForm = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitReadUser = async (e) => {
    e.preventDefault();
    await readUser(email, password);
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

            <h1>LoginPage</h1>
            <form
              onSubmit={handleSubmitReadUser}

            >
              <input
                type="email"
                name="email"
                placeholder="Correo"
                className="form__input"
                value={email}
                onChange={handleChangeLoginForm}
              />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                className="form__input"
                value={password}
                onChange={handleChangeLoginForm}
              />
              <input type="submit" value="Iniciar sesión" className="button button--primary m-top" />
            </form>
            <br />
            <Link to="/register" className="button button--secondary" >Crear cuenta</Link>
            <br />
            {loading && <span>Cargando...</span>}
            <br />
            <br />
            {error && <span>{error.code}</span>}

          </div>
        </div>
      </section>

    </>
  );
};

export default LoginPage;
