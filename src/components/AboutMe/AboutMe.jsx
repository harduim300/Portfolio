import React, { useEffect, useRef } from 'react';
import style from './AboutMe.module.scss';

const AboutMeSkillCard = ({NameSkill}) => (
    <div className={style.AboutMeCard}>
        <span>{NameSkill}</span>
    </div>
);

const nameMySkills = ['html','css','javascript', 'react', 'angular', 'arduino', 'php', 'django', 'SQL', 'Laravel', 'Git/Github', 'python', 'C++', 'SCSS']

const AboutMe = () => {
    const aboutMeRef = useRef(null); // Usar useRef para referenciar a div

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Adiciona a animação quando a div estiver visível
                    entry.target.style.animation = `${style.bouncingAnimationDiv} 2s ease-in-out`;
                } else {
                    // Remove a animação quando a div não estiver visível
                    entry.target.style.animation = 'none';
                }
            });
        }, {
            threshold: 0.5 // Quando 10% da div estiver visível
        });

        if (aboutMeRef.current) {
            observer.observe(aboutMeRef.current);
        }

        return () => {
            if (aboutMeRef.current) {
                observer.unobserve(aboutMeRef.current);
            }
        };
    }, []);

    return (
        <section id="aboutMe" className={style.AboutMeContainer}>
            <div ref={aboutMeRef} className={style.AboutMeBoxBoard}>
                <div className={style.AboutMeFlex}>
                    <div className={style.AboutMeIntro}>
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
                                {nameMySkills.map((nameMySkill, key) => (
                                    <AboutMeSkillCard key={key} NameSkill={nameMySkill}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
