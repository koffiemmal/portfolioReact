import React from 'react'
import style from "./Home.module.css";

const ProjetsComponents = ({ images , titre , link , description} ) => {
  return (
    <div  className={style.card} >
      <article className={style.preview} >
      {images}
      </article>

      <p className={style.granTitre}>{titre}</p>
      <p className={style.description} >{description}</p>
      <button>
        Acceder au repo {link}
      </button>





      
    </div>
  )
}

export default ProjetsComponents
