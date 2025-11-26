import React, { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

export default function Footer() {
	const [email, setEmail] = useState('');
	const [comentario, setComentario] = useState('');
	const [sent, setSent] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!email.trim() || !comentario.trim()) {
			toast.error('Por favor completa todos los campos');
			return;
		}

		if (comentario.trim().length < 10) {
			toast.error('El comentario debe tener al menos 10 caracteres');
			return;
		}

		setIsSubmitting(true);

		try {
			// Verificar que api.comments exista
			if (!api || !api.comments || typeof api.comments.create !== 'function') {
				throw new Error('API de comentarios no disponible');
			}

			// Llamada al backend para guardar el comentario
			const response = await api.comments.create({
				email: email.trim(),
				text: comentario.trim()
			});

			console.log('Comentario guardado:', response);

			setSent(true);
			setEmail('');
			setComentario('');
			toast.success('¡Comentario enviado con éxito!');
			setTimeout(() => setSent(false), 3000);
		} catch (error) {
			console.error('Error al enviar comentario:', error);
			toast.error(error.message || 'Error al enviar el comentario. Intenta nuevamente.');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<footer className="bg-success text-white py-4 mt-5">
			<div className="container text-center text-md-start">
				<div className="row">
					<div className="col-md-4 mb-3">
						<h5 className="fw-bold">🍓 FRUITSEASON</h5>
						<p>Tu caja de frescura mensual, directo del campo a tu hogar.</p>
					</div>
					<div className="col-md-4 mb-3">
						<h5>Contacto</h5>
						<p>Email: fruitseason@gmail.com</p>
					</div>
					<div className="col-md-4 mb-3">
						<h5>Déjanos tu comentario</h5>
						<form id="contactForm" onSubmit={handleSubmit}>
							<div className="mb-2">
								<input
									type="email"
									className="form-control"
									id="email"
									placeholder="Ingresa tu Gmail"
									required
									value={email}
									onChange={e => setEmail(e.target.value)}
									disabled={isSubmitting}
								/>
							</div>
							<div className="mb-2">
								<textarea
									className="form-control"
									id="comentario"
									rows="2"
									placeholder="Escribe tu comentario..."
									required
									value={comentario}
									onChange={e => setComentario(e.target.value)}
									disabled={isSubmitting}
								></textarea>
							</div>
							<button
								type="submit"
								className="btn btn-light"
								disabled={isSubmitting}
							>
								{isSubmitting ? 'Enviando...' : 'Enviar'}
							</button>
						</form>
						{sent && <p className="mt-2">✅ ¡Mensaje enviado con éxito!</p>}
					</div>
				</div>
				<div className="text-center pt-3 border-top border-light border-opacity-25">
					<p>© 2025 FRUITSEASON. Todos los derechos reservados.</p>
				</div>
			</div>
		</footer>
	);
}