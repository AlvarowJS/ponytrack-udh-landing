import React from 'react'
import './App.css'; // Importa el archivo CSS
import logo from './assets/logo.png'
const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <img src={logo} style={{ width: '50px' }} alt="" />
          <a className="navbar-brand" href="#">Ponytrack UDH</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#features">Características</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#download">Descargar</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="hero-section text-center text-white">
        <div className="container">
          <h1 className="display-4">Sigue tu bus en tiempo real</h1>
          <p className="lead">Con nuestra app, nunca perderás tu bus nuevamente. Obtén actualizaciones en tiempo real sobre la ubicación de tu transporte.</p>
          <a href="#download" className="btn btn-primary btn-lg">Descargar ahora</a>
        </div>
      </section>

      <section id="features" className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Características de la App</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-icon mb-3">
                <i className="bi bi-bus-front"></i>
              </div>
              <h4>Rastreo en tiempo real</h4>
              <p>Consulta la ubicación exacta de tu bus en todo momento.</p>
            </div>
            <div className="col-md-4">
              <div className="feature-icon mb-3">
                <i className="bi bi-bus-front"></i>
              </div>
              <h4>Exclusivo</h4>
              <p>Esta app es exclusiva para los estudiantes de la Universidad de Huánuco que tengan acceso a su correo institucional udh.edu.pe</p>
            </div>
            <div className="col-md-4">
              <div className="feature-icon mb-3">
                <i className="bi bi-geo-alt"></i>
              </div>
              <h4>Mapa interactivo</h4>
              <p>Visualiza la ruta y el progreso de los buses en un mapa interactivo.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Descarga nuestra App</h2>
          <p className="lead">Disponible para Android e iOS</p>
          <a href="#" className="btn btn-dark btn-lg m-2">
            <i class='bx bxl-apple'></i>Descargar en App Store</a>
          <a href="#" className="btn btn-dark btn-lg m-2">
            <i class='bx bxl-play-store' ></i>Descargar en Google Play</a>
        </div>
      </section>
      <section id="download" className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Elimina tu cuenta</h2>
          <p className="lead">Envia una foto de tu carnet estudiantil al siguiente correo y nos contactaremos contigo para eliminar su registro de nuestra base de datos</p>
          <a href="#" className="btn btn-dark btn-lg m-2">jalvarojs123@gmail.com</a>

        </div>
      </section>

      <section id="download" className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Politicas de privacidad</h2>
          <p className="lead">Descarga aqui las politicas de privacidad</p>
          <a href="/politicas-privacidad.pdf" className="btn btn-dark btn-lg m-2">
          <i class='bx bxs-download' ></i>politicas de privacidad</a>

        </div>
      </section>
      <footer>
        <p>&copy; 2024 Ponytrack UDH | Todos los derechos reservados</p>
        <p>Contacto: jalvarojs123@gmail.com</p>
      </footer>


    </div>
  )
}

export default App
