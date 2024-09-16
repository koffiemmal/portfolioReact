import React from 'react'
import style from './Home.module.css'
import ProjetsComponents from './ProjetsComponents';
import testImages from "../assets/images/testprojets.jpeg";

const Projets = () => {
  return (
    <div className={style.gridProjets}>
      <ProjetsComponents
        images={
          <img
            style={{
              height: "100%",
              width: "100%",
            }}
            src={testImages}
          />
        }
        titre="Mon portfolio "
        description="cree avec react avec du css et deployer sur render "
        link=""
      />
      <ProjetsComponents
        images={
          <img
            style={{
              height: "100%",
              width: "100%",
            }}
            src={testImages}
          />
        }
        titre="Mon portfolio "
        description="cree avec react avec du css et deployer sur render "
        link=""
      />
      <ProjetsComponents
        images={
          <img
            style={{
              height: "100%",
              width: "100%",
            }}
            src={testImages}
          />
        }
        titre="Mon portfolio "
        description="cree avec react avec du css et deployer sur render "
        link=""
      />
      <ProjetsComponents
        images={
          <img
            style={{
              height: "100%",
              width: "100%",
            }}
            src={testImages}
          />
        }
        titre="Mon portfolio "
        description="cree avec react avec du css et deployer sur render "
        link=""
      />
      <ProjetsComponents
        images={
          <img
            style={{
              height: "100%",
              width: "100%",
            }}
            src={testImages}
          />
        }
        titre="Mon portfolio "
        description="cree avec react avec du css et deployer sur render "
        link=""
      />
      <ProjetsComponents
        images={
          <img
            style={{
              height: "100%",
              width: "100%",
            }}
            src={testImages}
          />
        }
        titre="Mon portfolio "
        description="cree avec react avec du css et deployer sur render "
        link=""
      />
    </div>
  );
}

export default Projets
