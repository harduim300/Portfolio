import React, { useState, useEffect } from 'react';
import { BsMouse } from "react-icons/bs";
import { FaLongArrowAltDown } from "react-icons/fa";
import style from './Banner.module.scss';

const words = [
    "Seja bem-vindo !",
    "Desenvolvedor Fullstack",
    "Sou Graduando da UERJ",
    "Futuro Engenheiro da Computação"
];

const Banner = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = isDeleting ? 50 : 100; // Velocidade de digitação e apagamento

    useEffect(() => {
        const currentWord = words[currentWordIndex];

        if (!isDeleting && displayedText === currentWord) {
            setTimeout(() => setIsDeleting(true), 2000); // Pausa de 2 segundos após digitar
            return;
        }

        if (isDeleting && displayedText === '') {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const typingTimeout = setTimeout(() => {
            setDisplayedText((prev) =>
                isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
            );
        }, typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [displayedText, isDeleting, currentWordIndex]);

    return (
        <section id='home-main' className={style.BannerContainer}>
            <div className={style.BannerContentFlex}>
                <div className={style.BannerContent}>
                    <h1 className={style.myName} translate="no">
                        Matheus <span style={{ margin: 15 }} />Harduim
                    </h1>
                    <h2 className={style.myProfession}>
                        <span className={style.textAnimate} translate="no">./{displayedText}</span>
                        <span className={style.cursor}></span>
                    </h2>
                    <h3 className={style.mySentence}>“Aprendendo todos os dias, evoluindo em cada projeto! ”.</h3>
                </div>
            </div>
            <div className={style.mouseScrollIndication}>
                <BsMouse className={style.icon_mouse}/> 
                <FaLongArrowAltDown className={style.arrow_mouse} />
            </div>
        </section>
    );
}

export default Banner;
