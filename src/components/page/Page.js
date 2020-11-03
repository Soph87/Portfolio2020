import React from "react";
import { motion } from "framer-motion";
//Components
import Titre from "../UI/h2/Titre2";
import SousTitre from "../UI/soustitre/Soustitre";
import Footer from "../footer/Footer";
//CSS
import styles from "./Page.module.css";

function Page(props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeInOut", delay: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            className='mainContainer'>
            <main style={{ paddingTop: `${props.headerheight}px` }}>
                <section className={[styles.section, "container"].join(" ")}>
                    <div className={styles.top}>
                        <Titre>{props.titre}</Titre>
                        <SousTitre>{props.soustitre}</SousTitre>
                    </div>
                    <div>{props.children}</div>
                </section>
            </main>
            <Footer />
        </motion.div>
    );
}

export default Page;
