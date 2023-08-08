import React from 'react'
import styles from "./Footer.module.css"
import{Link} from "react-router-dom"
const Footer = () => {
  return (
  
 
<section className={styles.footer}>
  

<article className={styles.contacts} >

<div  className={styles.contacts__item}>
  <i class="bi bi-geo-alt"></i>
  <h5>Location</h5>
  <p>IRENIO DA SILVA RIBEIRO 77st - Alagoinhas - BA</p>
</div>

<div className={styles.contacts__item} >
  <i class="bi bi-telephone-fill"></i>
  <h5>Phone</h5>
  <p>+ 55 (71) 9 9607-6480</p>
</div>

<div  className={styles.contacts__item}>
  <i class="bi bi-envelope"></i>
  <h5>E-mail</h5>
  <p>andre.devfront@gmail.com</p>
</div>

<div  className={styles.contacts__item}>
<i class="bi bi-globe"></i>
<h5>Social Media</h5>
<div className={styles.icons}>
<a href="https://www.instagram.com/deco.xd/" target='_blank'><i class="bi bi-instagram"></i></a>
<a href=""><i class="bi bi-facebook"></i></a>
<a href="https://www.linkedin.com/in/andre-pinheiro-54a5a1237/" target='_blank'><i class="bi bi-linkedin"></i></a>
<a href="https://twitter.com/GerencieV" target='_blank'><i class="bi bi-twitter"></i></a>
<a href="https://github.com/DecoXD" target='_blank'><i class="bi bi-github"></i></a>
</div>
</div>



</article>

</section>
  )
}

export default Footer