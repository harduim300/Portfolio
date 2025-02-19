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
        <section id="about-me" className={style.AboutMeContainer}>
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
                            Graduando em Engenharia de Computação pela Universidade do Estado do Rio de Janeiro (UERJ), 
                            atuei como estagiário em Desenvolvimento Full-Stack na MAP – Assessoria em Marketplaces, 
                            com foco na criação e manutenção de aplicações web utilizando as 
                            tecnologias <strong>HTML</strong>, <strong>SCSS</strong>, <strong>JavaScript</strong>, <strong>Typescript</strong>, <strong>React</strong>, 
                            <strong> Next.js</strong>, <strong>Tailwind</strong>,  
                            <strong> Express.js</strong> e <strong >Node.js</strong>. Além disso, fui bolsista 
                            de iniciação científica pela UERJ, 
                            tendo recebido menção honrosa na 32ª Semana de Iniciação Científica em 2023, pelo 
                            desenvolvimento de um projeto voltado a estações meteorológicas, no qual utilizei 
                             <strong style={{'marginLeft': 10}}>PHP</strong>, <strong>Arduino</strong>, <strong>Laravel</strong>, <strong>HTML</strong>,
                             <strong> CSS</strong> e <strong>JavaScript</strong>. Possuo fluência em inglês e busco 
                             constantemente aprimorar minhas habilidades linguísticas e técnicas.
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
