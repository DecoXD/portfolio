import styles from "./Header.module.css"
import { Link,NavLink } from "react-router-dom"

const Header = () => {
  return (
  <header>
<section className={styles.headerSection}>

<div className={styles.headerLogo}>
  
    <h1><Link to={`/`}>MyPortfoly</Link></h1>

    <div className={styles.scene}>
      <div className={`${styles.cube} ${styles.cube__is_spin}`}>
        <span className={`${styles.cube__face} ${styles.cube__front}`}></span>
        <span className={`${styles.cube__face} ${styles.cube__back}`}></span>
        <span className={`${styles.cube__face} ${styles.cube__right}`}></span>
        <span className={`${styles.cube__face} ${styles.cube__left}`}></span>
        <span className={`${styles.cube__face} ${styles.cube__top}`}></span>
        <span className={`${styles.cube__face} ${styles.cube__bottom}`}></span>
      </div> 
  </div>




</div>

  <label className={styles.toggle} aria-label="Toggle Button ">
    <span className={styles.menu_line}></span>
    <span className={styles.menu_line}></span>
    <span className={styles.menu_line}></span>
    <input type="checkbox" className="d-none" />
    </label>

 <nav className={styles.main_menu} role="navigation" aria-label="Main Menu">
    <NavLink to={'/'} className={styles.menu_item}>
    <i className="bi bi-house f-medium"></i>
      <span>home</span></NavLink>
    <NavLink to={'/about'} className={styles.menu_item}>
    <i className="bi bi-person f-medium"></i>
      <span>about</span></NavLink>
    <NavLink to={'/projects'} className={styles.menu_item}>
    <i className="bi bi-gear f-medium"></i>
      <span>projects</span></NavLink>
 </nav>


</section>

  </header>
  )
}

export default Header