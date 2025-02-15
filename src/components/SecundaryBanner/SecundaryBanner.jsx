import React from 'react';
import style from './SecundaryBanner.module.scss';
import { scrollToId } from '../../handlers/scrollToId';
import Lottie from 'react-lottie-player';
import agreement from '/src/assets/agreement.json';
import thinking from '/src/assets/thinking.json';
import { motion } from 'framer-motion';

const SecundaryBanner = () => {
  return (
    <section id='secundary-banner' className={style.SecundaryBanner}>
      <motion.div
        className={style.SecundaryBannerContainer}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={style.SecundaryBannerContent}>
          <h1>Gostou do meu perfil?</h1>
          <div className={style.animation}>
            <Lottie loop animationData={agreement} play />
          </div>
          <p>
            Estou #OpenToWork para oportunidades de emprego onde eu possa
            contribuir e ter um crescimento como profissional. Caso meu perfil
            se encaixe com a oportunidade entre em contato!
          </p>
          <button
            onClick={() => scrollToId('email-form')}
            className={style.btnSecundaryBanner}
          >
            Contato
          </button>
        </div>

        <div className={style.SecundaryBannerContent}>
          <h1>Deseja saber mais sobre mim?</h1>
          <div className={style.animation}>
            <Lottie loop animationData={thinking} play />
          </div>
          <p>
            Caso queira conhecer mais sobre mim, logo abaixo é apresentado o
            projeto do qual faço parte, como também um pequeno projeto que fiz,
            ressaltando que mais pode ser encontrado no Github.
          </p>
          <button
            onClick={() => scrollToId('projects')}
            className={style.btnSecundaryBanner}
          >
            Ver Projetos
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default SecundaryBanner;
