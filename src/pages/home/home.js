import React from 'react';
import Navbar from '../../components/navbar/navbar';
import '../home/home.css';
import hero from "../../images/home/hero2.png"


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
      <section>

      </section>

    </div >
  );
}

export default Home;