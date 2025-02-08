import React from 'react';
import style from './SecundaryBanner.module.scss'





const SecundaryBanner = () => {

    const scrollToId = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section id='secundary-banner' className={style.SecundaryBanner}>
            <div className={style.SecundaryBannerContainer}>
                <div className={style.SecundaryBannerContent}>
                    <h1>
                        Gostou do meu perfil?
                    </h1>
                    <p>
                    Estou #OpenToWork para oportunidades de emprego 
                    onde eu possa contribuir e ter um crescimento como profissional. 
                    Caso meu perfil se encaixe com a oportunidade entre contato !
                    </p>
                    <button onClick={() => scrollToId("email-form")} className={style.btnSecundaryBanner}>
                        Contato
                    </button>
                </div>
                <div className={style.SecundaryBannerContent}>
                    <h1>
                        Deseja saber mais sobre mim?
                    </h1>
                    <p>
                    Caso queria conhecer mais sobre mim, logo abaixo 
                    é aprensentado o projeto do qual faço parte como 
                    também um pequeno projeto que fiz, ressaltando 
                    que mais pode ser encontrado no Github
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SecundaryBanner;