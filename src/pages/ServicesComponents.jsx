import React from 'react'
import Services from './Services'
import devMobovile from "../assets/images/mobiledev.png"
import devwb from "../assets/images/devweb.png";
import uix from "../assets/images/uix.png";
import iconxeb from "../assets/images/iconeWeb.png";
import iconeMobile from "../assets/images/devmobile.png";
import iconeuix from "../assets/images/iconeuix.png";
import style from "./Home.module.css"
const ServicesComponents = () => {
  return (
    <div className={style.servicelist}
      style={{
      
      }}
    >
      <Services
        images={<img src={devwb} />}
        icones={<img src={iconxeb} />}
        titre="DEVELOPPEMNT WEB"
      />
      <Services
        images={<img src={devMobovile} />}
        icones={<img src={iconeMobile} />}
        titre="DEVELOPPEMNT MOBILE"
      />
      <Services
        images={<img style={{
            width:'30vh'
        }} src={uix} />}
        icones={<img src={iconeuix} />}
        titre="DESING UI/UX"
      />
    </div>
  );
}

export default ServicesComponents
