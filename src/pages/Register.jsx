// src/pages/Register.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem('registeredUser', data.username);
    // Simular un feedback visual antes de redirigir
    alert('¡Registro exitoso! Serás redirigido al login.');
    navigate('/login');
  };

  return (
    <main className="d-flex justify-content-center align-items-center auth-background">
      <div className="col-md-6 col-lg-5 col-xl-4">
        <div className="card shadow-lg border-0" style={{ background: 'rgba(255,255,255,0.93)' }}>
          <div className="card-body p-4 p-md-5">
            <h1 className="text-center text-success mb-4">Registro</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Campos del formulario (iguales al original) */}
               <div className="form-floating mb-3">
                    <input
                        type="text"
                        id="username"
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                        placeholder="Usuario"
                        {...register('username', { required: 'Usuario obligatorio', minLength: { value: 3, message: 'Mínimo 3 caracteres' } })}
                    />
                    <label htmlFor="username">Usuario</label>
                    {errors.username && <small className="text-danger">{errors.username.message}</small>}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        id="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="Correo electrónico"
                        {...register('email', { required: 'El correo es obligatorio', pattern: { value: /^\S+@\S+$/i, message: 'Formato de correo inválido' } })}
                    />
                    <label htmlFor="email">Correo electrónico</label>
                    {errors.email && <small className="text-danger">{errors.email.message}</small>}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        id="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        placeholder="Contraseña"
                        {...register('password', { required: 'Contraseña obligatoria', minLength: { value: 4, message: 'Mínimo 4 caracteres' } })}
                    />
                    <label htmlFor="password">Contraseña</label>
                    {errors.password && <small className="text-danger">{errors.password.message}</small>}
                </div>
              <button type="submit" className="btn btn-success w-100 py-2">Crear cuenta</button>
              <div className="text-center mt-3">
                <p>¿Ya tienes cuenta?{' '}
                  <Link to="/login" className="fw-bold text-decoration-none">Ingresar</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}