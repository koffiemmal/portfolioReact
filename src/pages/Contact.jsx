import React from "react";
import style from "./Home.module.css";
import Logo from "../assets/images/logo.png";
import pti3d from "../assets/images/contactus.png";
import frm from "../assets/images/frm.png";
const Contact = () => {
  return (
    <div className={style.contact}>
      <p className={style.title}>CONTACTS</p>
      <div className={style.contacts}>
        <section>
          <button className={style.btn_contacts_usus}>Contactez - moi</button>
          <p className={style.me_also}>
            Une idée, un projet, ou une simple question ? Je suis à votre écoute
            ! Remplissez le formulaire ci-dessous, et je vous répondrai
            rapidement. Hâte de découvrir ce que nous pourrions créer ensemble !
          </p>
          <article className={style.cont}>
            <img className={style.logocontact} src={Logo} alt="" />
            <img className={style.ptit3d} src={pti3d} alt="" />
          </article>
        </section>
        <section className={style.form}>
          <section className={style.fromblur}>
            <form action="">
              <h2>Entrer en Contact</h2>
              <table>
                <tbody>
                  <tr>
                    {" "}
                    <td>
                      {" "}
                      <label htmlFor="">Email</label>
                    </td>
                  </tr>
                  <tr>
                    <input type="email" placeholder="entrer votre email" />
                  </tr>
                  <tr>
                    {" "}
                    <td>
                      {" "}
                      <label htmlFor="">Message</label>
                    </td>
                  </tr>
                  <tr>
                    <textarea
                      name=""
                      id=""
                      placeholder="entrer votre message"
                    ></textarea>
                  </tr>
                  <tr className={style.ntn_hover}>
                    <button>Valider</button>
                  </tr>
                </tbody>
              </table>
            </form>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Contact;
