import { motion } from 'framer-motion';
import style from './ProjectWork.module.scss';

const ProjectWork = () => {
  return (
    <section id='projects' className={style.ProjectWork}>
      <motion.div
        className={style.ProjectWorkContainer}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Projeto Marketplace Experience */}
        <div className={style.ProjectWorkTitle}>
          <h1>Projetos Profissionais</h1>
          <div className={style.inf_bar} />
          <div className={style.alling_content_projects}>
            <h1>Marketplace Experience 2025</h1>
            <div className={style.flex_projetctWork}>
              <div className={style.textProjetctWork}>
                Fui responsável pelo desenvolvimento da página do Marketplace Experience 2025, o maior evento de e-commerce do Estado do Rio de Janeiro, organizado pela MAP Educação em Marketplaces. O evento reúne grandes players do mercado, incluindo AliExpress, Mercado Livre e Amazon, entre outros.
                <br />
                Tecnologias utilizadas: React, Node.js, Git, SCSS
                <br />
                Acesse a página do evento:
                <div className={style.link_project}>
                  <a href='https://mapmarketplaces.com/marketplace-experience/' target='_blank' rel='noopener noreferrer'>
                    https://mapmarketplaces.com/marketplace-experience/
                  </a>
                </div>
              </div>
              <div className={style.container_images}>
                <img className={style.image_1} src='https://i.imgur.com/sFq8qbn.png' alt='Projeto Marketplace 1' />
                <img className={style.image_2} src='https://i.imgur.com/wGKVnly.png' alt='Projeto Marketplace 2' />
              </div>
            </div>
          </div>
        </div>

        {/* Projeto Estações Meteorológicas */}
        <div className={style.ProjectWorkTitle}>
          <h1>Projetos Learning Time</h1>
          <div className={style.inf_bar} />
          <div className={style.alling_content_projects}>
            <h1>Projeto de Estações Meteorológicas</h1>
            <div className={style.flex_projetctWork}>
              <div className={style.textProjetctWork}>
                Atuei como bolsista de iniciação científica no Projeto de Estações Meteorológicas na Região Serrana do Rio de Janeiro, onde fui responsável pelo gerenciamento do site (desenvolvido em Laravel) e pela manutenção das estações meteorológicas, que utilizam microcontroladores ESP8266.
                <br />
                Esse trabalho me rendeu uma Menção Honrosa na 32ª Semana de Iniciação Científica da UERJ (2023).
                <br />
                Tecnologias utilizadas: PHP, Laravel, Javascript, Git, Arduino
                <br />
                Acesse a página do projeto:
                <div className={style.link_project}>
                  <a href='http://tempo.iprj.uerj.br/' target='_blank' rel='noopener noreferrer'>
                    http://tempo.iprj.uerj.br/
                  </a>
                </div>
              </div>
              <div className={style.container_images}>
                <img className={style.image_1} src='https://i.imgur.com/UtEhl70.png' alt='Projeto Estações 1' />
                <img className={style.image_2} src='https://i.imgur.com/9cTs8bg.png' alt='Projeto Estações 2' />
              </div>
            </div>
          </div>
        </div>

        {/* Projeto Monitor Ambiente */}
        <div className={style.ProjectWorkTitle}>
          <div className={style.alling_content_projects}>
            <h1>Projeto Monitor Ambiente</h1>
            <div className={style.flex_projetctWork}>
              <div className={style.textProjetctWork}>
                Um dos meus primeiros projetos pessoais desenvolvido como fundo de aprendizagem. Tem como princípio chave o monitoramento em tempo real usando Socket.io. O sistema conta com um Front-End simples com medidores que expõem temperatura e umidade usando Angular, e com Back-End desenvolvido com framework em Python (Django). Por último, um microcontrolador Arduino Uno usando portas seriais para a comunicação.
                <br />
                Tecnologias utilizadas: Angular, Django, Arduino, Python
                <br />
                Repositório do projeto:
                <div className={style.link_project}>
                  <a href='https://github.com/harduim300/MonitorAmbiente' target='_blank' rel='noopener noreferrer'>
                    https://github.com/harduim300/MonitorAmbiente
                  </a>
                </div>
              </div>
              <div className={style.container_images}>
                <img className={style.image_1} src='https://i.imgur.com/n06CJFZ.png' alt='Projeto Ambiente 1' />
                <img className={style.image_2} src='https://i.imgur.com/vhmEo1M.png' alt='Projeto Ambiente 2' />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectWork;
