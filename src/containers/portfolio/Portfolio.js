import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player/youtube";
//Components
import Page from "../../components/page/Page";
import Titre from "../../components/UI/h2/Titre2";
import SousTitre from "../../components/UI/soustitre/Soustitre";
import Projet from "../../components/projet/Projet";
import Bouton from "../../components/UI/boutons/Bouton";
import Modal from "../../components/modal/Modal";
//CSS
import styles from "./Portfolio.module.css";

function Portfolio(props) {
    const [projets, setProjets] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [videoLink, setVideoLink] = useState("#");

    useEffect(() => {
        axios.get("/api/tousprojets").then((response) => {
            setProjets(Object.values(response.data));
        });
    }, []);

    //Charge le bonne vidéo puis ouvre la modale
    const handleProjetClick = (video) => {
        setVideoLink(video);
        setIsOpen(true);
    };

    //Ferme la modale
    const handleFermeModal = () => {
        setIsOpen(false);
    };

    return (
        <Page
            titre='Welcome sur mon portfolio'
            soustitre="Voici quelques projets sur lesquels j'ai pu travailler, liste non exhaustive&nbsp;!"
            headerheight={props.headerheight}>
            {projets &&
                projets.map((projet, index) => {
                    return <Projet key={projet.id} data={projet} index={index} handleClickParent={handleProjetClick} />;
                })}
            <section className={styles.codepen}>
                <Titre>Quand y en a plus, y en a encore&nbsp;!</Titre>
                <div className={styles.center}>
                    <SousTitre className={styles.widthmax}>
                        J'aime bien tester tout plein de choses et faire du code expérimental. Vous pouvez voir mes
                        petites expériences sur mon{" "}
                        <a href='https://codepen.io/soph87' className={styles.liensOndule} target='blank'>
                            codepen
                        </a>
                    </SousTitre>
                </div>
            </section>
            <section className={styles.bottom}>
                <Titre>Mon profil vous plait&nbsp;? Entrons vite en contact alors&nbsp;!</Titre>
                <div className={styles.cta}>
                    <Bouton couleur='rose' link='/contact'>
                        <span>YES&nbsp;!</span>Au formulaire de contact SVP
                    </Bouton>
                </div>
            </section>
            {isOpen && (
                <Modal handleFermeParent={handleFermeModal}>
                    <div className='playerWrap'>
                        <ReactPlayer className='player' url={videoLink} width='100%' height='100%' controls={true} />
                    </div>
                </Modal>
            )}
        </Page>
    );
}

export default Portfolio;
