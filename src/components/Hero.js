import React from 'react';
import heroImg from '../assets/hero_img.png';
import { useGlobalContext } from '../context/app_context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            FASOCRED     
          </h1>
          <h3>Le choix du progrès</h3>
          <h3>EFFICACITE - TRANSPARENCE - RESPECT</h3>
          <p>
          La coopérative d’épargne et de crédit de nouvelle génération créee pour contribuer à faciliter l’accès aux micro-crédits dans tout le Burkina Faso. 
          </p>
          <a className='btn' href="/membres">Comment adherer</a>
        </article>
        <article className='hero-images'>
          <img src={heroImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
