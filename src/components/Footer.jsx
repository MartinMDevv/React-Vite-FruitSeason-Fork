import React, { useState } from 'react'

export default function Footer() {
	const [email, setEmail] = useState('')
	const [comentario, setComentario] = useState('')
	const [sent, setSent] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		// Aquí podrías enviar a un servidor; por ahora solo mostramos mensaje de éxito
		setSent(true)
		setEmail('')
		setComentario('')
		setTimeout(() => setSent(false), 3000)
	}

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
								<input type="email" className="form-control" id="email" placeholder="Ingresa tu Gmail" required value={email} onChange={e => setEmail(e.target.value)} />
							</div>
							<div className="mb-2">
								<textarea className="form-control" id="comentario" rows="2" placeholder="Escribe tu comentario..." required value={comentario} onChange={e => setComentario(e.target.value)}></textarea>
							</div>
							<button type="submit" className="btn btn-light">Enviar</button>
						</form>
						{sent && <p className="mt-2">✅ ¡Mensaje enviado con éxito!</p>}
					</div>
				</div>
				<div className="text-center pt-3 border-top border-light border-opacity-25">
					<p>© 2025 FRUITSEASON. Todos los derechos reservados.</p>
				</div>
			</div>
		</footer>
	)
}
