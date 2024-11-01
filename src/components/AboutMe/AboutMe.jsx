import React  from 'react';
import style from './AboutMe.module.scss';
import animationDev from '/src/assets/AnimationDev.json';
import Lottie from 'react-lottie-player';
import { FaCss3Alt } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io5";
import { FaAngular } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { SiArduino } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import fotoPerfil from "/perfil.png"

const AboutMeSkillCard = ({NameSkill}) => (
    <div className={style.AboutMeCard}>
        <span>{NameSkill}</span>
    </div>
);


const AboutMe = () => {
    

    return (
        <section id="aboutMe" className={style.AboutMeContainer}>
            <div className={style.AboutMeBoxBoard}>
                <div className={style.AboutMeFlex}>
                    <div className={style.AboutMeIntro}>
                        <img src={fotoPerfil} alt="matheusPerfil" className={style.imgPerfil}/>
                        <div>
                            <h1>Sobre mim</h1>
                        </div>
                        <div className={style.AMITextIntro}>
                            <h2>Logo abaixo estão algumas informações sobre mim e algumas de minhas habilidades</h2>
                        </div>
                    </div>
                    <div className={style.AboutMeFlexContent}>
                        <div className={style.textAboutMe}>
                            <h2>
                            Conhecendo me melhor
                            </h2>
                            <p className={style.textAMDescription}>
                            Eu sou um estudante Bacharel que possui conhecimentos de Desenvolvimento Web Full-Stack, 
                            como também uso de sistemas embarcados por meio da utilização de microcontroladores. 
                            Além disso, tenho conhecimentos por meio das cadeiras eletivas da Universidade 
                            em Modelagem e Simulação de Reservatórios de Petróleo como também em Inteligencia Artificial.
                            </p>
                        </div>
                        <div className={style.mySkillBoard}>
                            <h2>Minhas Skills</h2>
                            <div className={style.mySkillBoardCards}>
                                <TiHtml5 style={{fontSize: '80px', color: '#e5532d'}}/>
                                <FaCss3Alt style={{fontSize: '60px', color: '#2d53e5', paddingTop: '18px'}}/>
                                <IoLogoJavascript style={{fontSize: '60px', color: '#f7e025', paddingTop: '15px'}}/>
                                <FaReact style={{fontSize: '60px', color: '#65dafb', paddingTop: '15px'}}/>
                                <FaAngular style={{fontSize: '60px', color: '#de0837', paddingTop: '15px'}}/>
                                <FaPython style={{fontSize: '60px', color: '#48c2fb', paddingTop: '15px'}}/>
                                <FaGithub style={{fontSize: '50px', color: '#FFF', paddingTop: '20px'}}/>
                                <DiDjango style={{fontSize: '80px', color: '#113527', paddingTop: '8px'}}/>
                                <SiArduino style={{fontSize: '80px', color: '#089aa0', paddingTop: '8px'}}/>
                                <SiPhp style={{fontSize: '80px', color: '#7b7fb5', paddingTop: '8px'}}/>
                            </div>
                            <h3>Palavras-chave:<br/> HTML5, CSS, JAVASCRIPT, REACT, ANGULAR, PYTHON, GIT/GITHUB, DJANGO, ARDUINO, PHP</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.animationDev}>
            <Lottie
                loop
                animationData={animationDev}
                play
            />
            </div>
        </section>
    );
};

export default AboutMe;
