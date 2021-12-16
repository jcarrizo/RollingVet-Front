import React from 'react';
import Navbar from '../../components/navbar/navbar';
import '../home/home.css';
import hero from "../../images/home/hero.png"
import veterinaria from "../../images/home/veterinaria.png"
import revision from "../../images/home/01-revision.png"
import asistencia from "../../images/home/02-asistencia.png"
import vacunacion from "../../images/home/03-vacuanacion.png"
import desparasitacion from "../../images/home/04-desparasitacion.png"
import certificado from "../../images/home/05-certificado.png"
import cirujia from "../../images/home/06-cirujia.png"
import internacion from "../../images/home/07-internacion.png"
import laboratorio from "../../images/home/08-laboratory.png"

function Home() {
  return (
    <div className='body'>
      <Navbar />
      <section>
        <img src={hero} className="d-block w-100 hero-img" alt="..."></img>
        <div className='hero-text'>
          <h2>We are what</h2>
          <h2>your dog needs</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the r</p>
          <button type="button" className="btn btn-primary">Primary</button>
        </div>
      </section>

      {/* Seccion Servicios */}
      <section className='section-servicios container'>
        <h3> Servicios para tu mascota</h3>
        <div className='row'>
          <div className='col-md-6 d-flex justify-content-center align-items-center'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className='row'>
                    <div className='col-md-6 d-flex flex-column justify-content-center align-items-center mb-5'>
                      <img src={revision} className='icon-servicios'></img>
                      <h4>Revision General</h4>
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center align-items-center mb-5'>
                      <img src={asistencia} className='icon-servicios'></img>
                      <h4>Asistencia Integral</h4>
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
                      <img src={vacunacion} className='icon-servicios'></img>
                      <h4>Vacunación</h4>
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
                      <img src={desparasitacion} className='icon-servicios'></img>
                      <h4>Desparasitación</h4>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className='row'>
                    <div className='col-md-6 d-flex flex-column justify-content-center align-items-center mb-5'>
                      <img src={certificado} className='icon-servicios'></img>
                      <h4>Certificado</h4>
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center align-items-center mb-5'>
                      <img src={cirujia} className='icon-servicios'></img>
                      <h4>Cirujia</h4>
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
                      <img src={internacion} className='icon-servicios'></img>
                      <h4>Internacion</h4>
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
                      <img src={laboratorio} className='icon-servicios'></img>
                      <h4>Laboratorio</h4>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className='col-md-6 d-flex justify-content-center'>
            <img src={veterinaria} className="d-block img-servicios"></img>
          </div>
        </div>
      </section>

    </div >
  );
}

export default Home;