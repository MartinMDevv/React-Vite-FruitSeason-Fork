import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Alert from '../components/Alert';

const Login = () => {
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState('danger');

  const navigate = useNavigate();

  // 🧭 Inicializar react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // 🚀 Acción al enviar el formulario
  const onSubmit = (data) => {
    const { username, password } = data;

    localStorage.setItem('loggedInUser', username.trim());
    setAlertMessage('¡Inicio de sesión exitoso! Redirigiendo...');
    setAlertType('success');

    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <>
      <main
        className="d-flex justify-content-center align-items-center min-vh-100"
        style={{
          paddingTop: '4rem',
          backgroundImage: "url('/img/img.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="col-md-6 col-lg-5 col-xl-4">
          <Alert message={alertMessage} type={alertType} />

          <div className="card shadow-lg border-0" style={{ background: 'rgba(255,255,255,0.93)' }}>
            <div className="card-body p-4 p-md-5">
              <h1 className="text-center text-success mb-4">Login</h1>

              <form id="login-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* 🧑 Usuario */}
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    id="username"
                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    placeholder="Usuario"
                    {...register('username', {
                      required: 'El usuario es obligatorio',
                      minLength: { value: 3, message: 'Debe tener al menos 3 caracteres' }
                    })}
                  />
                  <label htmlFor="username">Usuario</label>
                  {errors.username && (
                    <small className="text-danger">{errors.username.message}</small>
                  )}
                </div>

                {/* 🔒 Contraseña */}
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    id="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    placeholder="Contraseña"
                    {...register('password', {
                      required: 'La contraseña es obligatoria',
                      minLength: { value: 4, message: 'Debe tener al menos 4 caracteres' }
                    })}
                  />
                  <label htmlFor="password">Contraseña</label>
                  {errors.password && (
                    <small className="text-danger">{errors.password.message}</small>
                  )}
                </div>

                <button type="submit" className="btn btn-primary w-100 py-2">
                  Ingresar
                </button>

                <div className="text-center mt-3">
                  <p>
                    ¿No tienes cuenta?{' '}
                    <Link to="/register" className="fw-bold text-decoration-none">
                      Registrarse
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
