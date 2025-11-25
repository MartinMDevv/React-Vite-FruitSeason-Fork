import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function Register() {
  const navigate = useNavigate();
  const { register: registerForm, handleSubmit, formState: { errors } } = useForm();
  const { register: registerUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const result = await registerUser(data);
    setIsLoading(false);

    if (result.success) {
      toast.success('¡Registro exitoso! Bienvenido.');
      navigate('/');
    } else {
      toast.error(result.error || 'Error al registrarse. Intenta nuevamente.');
    }
  };

  return (
    <main className="d-flex justify-content-center align-items-center auth-background">
      <div className="col-md-6 col-lg-5 col-xl-4">
        <div className="card shadow-lg border-0" style={{ background: 'rgba(255,255,255,0.93)' }}>
          <div className="card-body p-4 p-md-5">
            <h1 className="text-center text-success mb-4">Registro</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="username"
                  className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                  placeholder="Usuario"
                  {...registerForm('username', {
                    required: 'Usuario obligatorio',
                    minLength: { value: 3, message: 'Mínimo 3 caracteres' }
                  })}
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
                  {...registerForm('email', {
                    required: 'El correo es obligatorio',
                    pattern: { value: /^\S+@\S+$/i, message: 'Formato de correo inválido' }
                  })}
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
                  {...registerForm('password', {
                    required: 'Contraseña obligatoria',
                    minLength: { value: 4, message: 'Mínimo 4 caracteres' }
                  })}
                />
                <label htmlFor="password">Contraseña</label>
                {errors.password && <small className="text-danger">{errors.password.message}</small>}
              </div>
              <button
                type="submit"
                className="btn btn-success w-100 py-2"
                disabled={isLoading}
              >
                {isLoading ? 'Creando cuenta...' : 'Crear cuenta'}
              </button>
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