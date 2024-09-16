import { Github, Instagram, Linkedin } from 'lucide-react'
import React from 'react'
import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
       <img src={Logo} alt="" />
        <p>
            Suivez nous sur
        </p>
        <section>

        <Instagram color='white' />
<Linkedin color='white' />
<Github color='white' />
        </section>
        <article>

        </article>
<p>
    Copyright@2024DarkDevs
</p>





    </footer>
  )
}

export default Footer
