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
    const [typingSpeed, setTypingSpeed] = useState(100); // Velocidade inicial de escrita

    useEffect(() => {
        let typingTimeout;
        const currentWord = words[currentWordIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                // Escrevendo a palavra
                setDisplayedText(currentWord.slice(0, displayedText.length + 1));
                setTypingSpeed(100); // Velocidade de digitação normal
                if (displayedText === currentWord) {
                    // Pausa ao terminar de escrever a palavra
                    setTimeout(() => setIsDeleting(true), 2000); // Pausa de 2 segundos com a palavra completa
                }
            } else {
                // Apagando a palavra
                setDisplayedText(currentWord.slice(0, displayedText.length - 1));
                setTypingSpeed(50); // Aumenta a velocidade de apagamento
                if (displayedText === '') {
                    // Troca para a próxima palavra e começa a escrever novamente
                    setIsDeleting(false);
                    setDisplayedText("")
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        };

        // Timeout que controla a velocidade da digitação
        typingTimeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimeout); // Limpa o timeout ao desmontar o componente
    }, [displayedText, isDeleting, typingSpeed, currentWordIndex]);

    return (
        <section id='home-main' className={style.BannerContainer}>
            <div className={style.BannerContentFlex}>
                <div className={style.BannerContent}>
                    <h1 className={style.myName}>
                        Matheus <span style={{ margin: 15 }} />Harduim
                    </h1>
                    <h2 className={style.myProfession}>
                        <span className={style.textAnimate}>./{displayedText}</span>
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
