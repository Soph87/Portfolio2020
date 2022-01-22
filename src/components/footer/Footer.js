import React from "react";
import { Link } from "react-router-dom";
//CSS
import styles from "./Footer.module.css";
//SVG
import Github from "../SVG/Github";
import LinkedIn from "../SVG/Linkedin";
import Insta from "../SVG/Instagram";

function footer() {
    let date = new Date();

    return (
        <footer>
            <h4 className={styles.titre}>Retrouvez moi aussi sur les réseaux sociaux :</h4>
            <div className={styles.reseaux}>
                <a href='https://github.com/Soph87' target='_blank' rel='noopener noreferrer'>
                    <Github className={styles.icones} />
                </a>
                <a href='https://www.linkedin.com/in/sophie-roche-dev/' target='_blank' rel='noopener noreferrer'>
                    <LinkedIn className={styles.icones} />
                </a>
                <a href='https://www.instagram.com/sombrerosier/' target='_blank' rel='noopener noreferrer'>
                    <Insta className={styles.icones} />
                </a>
            </div>
            <div className={styles.texte}>
                <p>
                    <Link to='/mentions-legales' className={styles.link}>
                        Mention légales
                    </Link>{" "}
                    - Sophie Roche - {date.getFullYear()} - Tout droit réservé
                </p>
            </div>
        </footer>
    );
}

export default footer;
