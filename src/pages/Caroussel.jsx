import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from "./Home.module.css";
import figma from "../assets/images/figma.png"
import css from "../assets/images/css.png";
import flutter from "../assets/images/flutter.png";
import html from "../assets/images/html.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import sql from "../assets/images/sql.png";
import firebase from "../assets/images/firebase.png";
import node from "../assets/images/node.png";
import tawil from "../assets/images/taiwl.png";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carrousel = () => {
  return (
    <div className={style.logoCarousselOne}>
      <div className={style.logoCaroussel}>
        <img src={figma} className={style.logoImage} />
      </div>
      <div className={style.logoCaroussel}>
        <img src={js} className={style.logoImage} />
      </div>
      <div className={style.logoCaroussel}>
        <img src={css} className={style.logoImage} />
      </div>
      <div className={style.logoCaroussel}>
        <img src={html} className={style.logoImage} />
      </div>
      <div className={style.logoCaroussel}>
        <img src={react} className={style.logoImage} />
      </div>
      <div className={style.logoCaroussel}>
        <img src={sql} className={style.logoImage} />
      </div>
      <div className={style.logoCaroussel}>
        <img src={firebase} className={style.logoImage} />
      </div>
      <div className={style.logoCaroussel}>
        <img src={node} className={style.logoImage} />
      </div>
      <div className={style.logoCaroussel}>
        <img src={tawil} className={style.logoImage} />
      </div>
      <div className={style.logoCaroussel}>
        <img src={flutter} className={style.logoImage} />
      </div>
    </div>
  );
};

export default Carrousel;


/* const Caroussel = () => {
  const settings = {
    dots: false, // Pour afficher ou non les indicateurs
    infinite: true, // Active le défilement infini
    speed: 1500, // Vitesse de transition entre les logos
    slidesToShow: 8, // Nombre de logos visibles à la fois (ajusté à 5 pour une meilleure mise en page)
    slidesToScroll: 1, // Nombre de logos à faire défiler à la fois
    autoplay: true, // Défilement automatique
    autoplaySpeed: 2000, // Temps d'affichage pour chaque logo
    pauseOnHover: true, // Arrête le défilement si on survole le carrousel
  };

  return (
    <Slider {...settings}>
      <div className={style.logoCaroussel}>
        <img src={figma} className={style.logoImage} />
      </div>
      <div className={style.logoCaroussel}>
        <img src={js} className={style.logoImage} />
      </div>
      <div className={style.logoCaroussel}>
        <img src={css} className={style.logoImage} />
      </div>
      <div className={style.logoCaroussel}>
        <img src={html} className={style.logoImage} />
      </div>
       <div className={style.logoCaroussel}>
        <img src={react} className={style.logoImage} />
      </div> 
      <div className={style.logoCaroussel}>
        <img src={sql} className={style.logoImage} />
      </div> 
      <div className={style.logoCaroussel}>
        <img src={firebase} className={style.logoImage} />
      </div>
      <div className={style.logoCaroussel}>
        <img src={node} className={style.logoImage} />
      </div>
      <div className={style.logoCaroussel}>
        <img src={tawil} className={style.logoImage} />
      </div>
    </Slider>
  );
};

export default Caroussel;
 */