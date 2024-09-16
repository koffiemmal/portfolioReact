import React from 'react'
import style from "./Home.module.css";

const Services = ( {images , icones , titre}  ) => {
  return (
    <div className={style.servicesComponents} >
        <article className={style.imgs}  >
          {images}
        </article>
      <article className={style.circle}> {icones} </article>
      <p  >
        {titre}
      </p>
    </div>
  )
}

export default Services
