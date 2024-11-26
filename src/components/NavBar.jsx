import { useContext } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";

export default function NavBar() {


  const { themeHandler, isDarkTheme } = useContext(ThemeContext)
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navInner}>
        <li className={styles.navItem}>
          <NavLink className={styles.navLink} to='/'>Inicio</NavLink>
        </li>
        <li className={styles.navItem} >

          <NavLink className={styles.navLink} to="/sobre-mi">Quien soy</NavLink>
        </li>
        <li className={styles.navItem}>

          <NavLink className={styles.navLink} to="/formacion">formacion</NavLink>
        </li>
        <li className={styles.navItem} >
          <NavLink className={styles.navLink} to="/proyectos">proyectos</NavLink>
        </li>
        <li className={styles.navItem} >
          <NavLink className={styles.navLink} to="/tecnologias">tecnologias</NavLink>
        </li>
        <li className={styles.navItem} >
          <NavLink className={styles.navLink} to="/contacto">contacto</NavLink>
        </li>
        <li className={styles.navItem} onClick={themeHandler}>
          <div className="toggle-mode">
            {isDarkTheme ? (<span class="material-symbols-outlined">light_mode</span>) : (<span class="material-symbols-outlined">dark_mode</span>)}
          </div>
        </li>
      </ul>



    </nav>
  )
}

