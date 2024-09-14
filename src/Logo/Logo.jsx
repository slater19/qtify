import React from "react";
import LogoImage from "../assets/logo.svg";
import styles from "../Navbar/Navbar.module.css";

export default function Logo() {
   return <div className={styles.logoDiv}><img src={LogoImage} alt="logo" width={67} /></div>;
} 
