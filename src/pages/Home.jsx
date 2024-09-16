import React, { useState } from "react";
import style from "./Home.module.css";
import Logo from "../assets/images/logo.png";
import cicrle3d from "../assets/images/truecircle.png";
import Caroussel from "./Caroussel";
import { Car, HelpCircle, HomeIcon, Phone, Server, Workflow } from "lucide-react";
import ServicesComponents from "./ServicesComponents";
import ProjetsComponents from "./ProjetsComponents";
import Projets from "./Projets";
import Contact from "./Contact";
import Footer from "./Footer";
import { IconButton, Menu, MenuButton, MenuItem, MenuList, RangeSlider } from "@chakra-ui/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { a } from "framer-motion/client";



const Home = () => {

  const navigate = useNavigate()

   const [isNavOpen, setIsNavOpen] = useState(false);

   const toggleNav = () => {
     setIsNavOpen(!isNavOpen);
   };

  const handleClickGithub = () =>{
    
  }

  return (
    <div className={style.homePage}>
      <header>
        <div className={style.header}>
          <section>
            <img src={Logo} alt="" srcset="" />
          </section>
        
          <section className={style.nav}>
            <ul>
              <li>
                <a href="#acceuil">ACCEUIL</a>
              </li>
              <li>
                <a href="#apropos">A PROPOS</a>
              </li>
              <li>
                {" "}
                <a href="#competences">COMPETENCES </a>
              </li>
              <li>
                {" "}
                <a href="#service">SERVICES </a>
              </li>
              <li>
                {" "}
                <a href="#projets">PROJETS</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#contacts">CONTACTS</a>{" "}
              </li>
            </ul>
          </section>
          <section>
            <button onClick={handleClickGithub}>Github</button>
          </section>
        </div>
      </header>
      <div id="acceuil" className={style.profil}>
        <section className={style.ecrit}>
          <p>
            <span className={style.first}>
              {"<Hello/>"},<br />
            </span>{" "}
            <span className={style.second}>I’m </span>{" "}
            <span className={style.three}>MESSAN Emma</span>
            <span className={style.four}>nuel</span>{" "}
            <span className={style.five}>WEB & MOBILE Developper</span>
          </p>
          <article>
            <button className={style.btn_download}>
              Telecharger <span>CV</span>
            </button>
            <button className={style.btn_contact_us}>Contacter-moi</button>
          </article>
        </section>
        <section>
          <img src={cicrle3d} alt="" />
        </section>
      </div>
      <div id="apropos" className={style.about_us}>
        <div className={style.about}>
          <p className={style.title}>ABOUT US</p>
          <p className={style.subtitle}>
            Dynamique, ambitieux et avide d'apprendre, je suis une personne
            passionnée par l'informatique.
          </p>
          <section className={style.about_us_text}>
            <article className={style.about_me}>
              <p className={style.me_also}>
                Développeur passionné par la création de sites , et applications
                web interactifs et conviviaux. Je suis capable de travailler en
                équipe, de m'adapter à de nouveaux environnements de travail, de
                travailler sous pression, de manière autonome, et de respecter
                les délais impartis.
              </p>
            </article>
            <article className={style.vertical_divider}></article>
            <div className={style.parcours}>
              <section className={style.lifes}>
                <section className={style.left}>
                  <article className={style.subtitle_column}>
                    College Augustin Planque
                  </article>
                  <article className={style.row}>
                    <article className={style.row1}>
                      <p>Lomé-Togo</p>
                    </article>
                    <article className={style.row2}>
                      {" "}
                      <p>2020 - 2021</p>{" "}
                    </article>
                  </article>
                </section>
                <section className={style.btn_lifes}>
                  <p>BAC D</p>
                </section>
              </section>
              <section className={style.lifes}>
                <section className={style.left}>
                  <article className={style.subtitle_column}>
                    College Superieur De Paris
                  </article>
                  <article className={style.row}>
                    <article className={style.row1}>
                      <p>Lomé-Togo</p>
                    </article>
                    <article className={style.row2}>
                      {" "}
                      <p>2021 - 2022</p>{" "}
                    </article>
                  </article>
                </section>
                <section className={style.btn_lifes}>
                  <p>BACHELOR 1</p>
                </section>
              </section>
              <section className={style.lifes}>
                <section className={style.left}>
                  <article className={style.subtitle_column}>
                    College Superieur De Paris
                  </article>
                  <article className={style.row}>
                    <article className={style.row1}>
                      <p>Lomé-Togo</p>
                    </article>
                    <article className={style.row2}>
                      {" "}
                      <p>2022 - 2023</p>{" "}
                    </article>
                  </article>
                </section>
                <section className={style.btn_lifes}>
                  <p>BACHELOR 2</p>
                </section>
              </section>{" "}
              <section className={style.lifes}>
                <section className={style.left}>
                  <article className={style.subtitle_column}>
                    Developpeur Mobile Junior
                  </article>
                  <article className={style.row}>
                    <article className={style.row1}>
                      <p>Lomé-Togo</p>
                    </article>
                    <article className={style.row2}>
                      {" "}
                      <p>KORACLENET</p>{" "}
                    </article>
                  </article>
                </section>
              </section>
            </div>
          </section>
        </div>
      </div>
      <div id="competences" className={style.competence}>
        <div className={style.competences}>
          <p className={style.title}>COMPETENCES</p>
          <p className={style.subtitle}>
            Dynamique, ambitieux et avide d'apprendre, je suis une personne
            passionnée par l'informatique.
          </p>
          <p className={style.me_also}>
            Développeur passionné par la création de sites , et applications web
            interactifs et conviviaux. Je suis capable de travailler en équipe,
            de m'adapter à de nouveaux environnements de travail, de travailler
            sous pression, de manière autonome, et de respecter les délais
            impartis.
          </p>
          <Caroussel />
        </div>
      </div>
      <div id="service" className={style.service}>
        <div className={style.services}>
          <p className={style.title}>SERVICES</p>
          <p className={style.subtitle}>
            Augmenter votre presence en ligne grace a nos services
          </p>
          <p className={style.me_also}>Mes services</p>
          <ServicesComponents />
        </div>
      </div>
      <div id="projets" className={style.projet}>
        <div className={style.projets}>
          <p className={style.title}>PROJETS</p>
          <p className={style.subtitle}>
            Petites,selection de mes recents projets
          </p>
          <Projets />
        </div>
      </div>
      <div id="contacts">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
