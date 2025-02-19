import { motion } from 'framer-motion';
import style from './ProjectWork.module.scss';
import mktexp1 from '/marketplace_experience1.png'
import mktexp2 from '/marketplace_experience2.png'
import estacao1 from '/estacaoMeteorologicaIPRJ1.png'
import estacao2 from '/estacaoMeteorologicaIPRJ2.png'
import monitorAmb1 from '/monitor_ambiente1.png'
import monitorAmb2 from '/monitor_ambiente2.png'





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
            <h1 className={style.projectSubTitle}>Marketplace Experience 2025</h1>
            <div className={style.flex_projetctWork}>
              <div className={style.textProjetctWork}>
                Fui responsável pelo desenvolvimento da página do Marketplace Experience 2025, o maior evento de e-commerce do Estado do Rio de Janeiro, organizado pela MAP Educação em Marketplaces. O evento reúne grandes players do mercado, incluindo AliExpress, Mercado Livre e Amazon, entre outros.
                <br />
                Tecnologias utilizadas: <strong>React</strong>, <strong>Node.js</strong>, <strong>Git</strong>, <strong>SCSS</strong>, <strong>Express.js</strong>,
                <strong> HTML</strong>, <strong>JavaScript</strong>
                <br />
                Acesse a página do evento:
                <div className={style.link_project}>
                  <a href='https://mapmarketplaces.com/marketplace-experience/' target='_blank' rel='noopener noreferrer'>
                    https://mapmarketplaces.com/<br className={style.disableDesktop}/>marketplace-experience/
                  </a>
                </div>
              </div>
              <div className={style.container_images}>
                <img className={style.image_1} src={mktexp1} alt='Projeto Marketplace 1' />
                <img className={style.image_2} src={mktexp2} alt='Projeto Marketplace 2' />
              </div>
            </div>
          </div>
        </div>

        {/* Projeto Estações Meteorológicas */}
        <div className={style.ProjectWorkTitle}>
          <h1>Projetos Learning Time</h1>
          <div className={style.inf_bar} />
          <div className={style.alling_content_projects}>
            <h1 className={style.projectSubTitle}>Projeto de Estações Meteorológicas</h1>
            <div className={style.flex_projetctWork}>
              <div className={style.textProjetctWork}>
                Atuei como bolsista de iniciação científica no Projeto de Estações Meteorológicas na Região Serrana do Rio de Janeiro, onde fui responsável pelo gerenciamento do site (desenvolvido em Laravel) e pela manutenção das estações meteorológicas, que utilizam microcontroladores ESP8266.
                <br />
                Esse trabalho me rendeu uma Menção Honrosa na 32ª Semana de Iniciação Científica da UERJ (2023).
                <br />
                Participei principalmente do desenvolvimento da página que expõem dados pluviometricos conforme o modelo CBMERJ.
                <br />
                Tecnologias utilizadas: <strong>PHP</strong>, <strong>Arduino</strong>, <strong>Laravel</strong>, <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>
                <br />
                Acesse a página do projeto:
                <div className={style.link_project}>
                  <a href='http://tempo.iprj.uerj.br/' target='_blank' rel='noopener noreferrer'>
                    http://tempo.iprj.uerj.br/
                  </a>
                </div>
              </div>
              <div className={style.container_images}>
                <img className={style.image_1} src={estacao1} alt='Projeto Estações 1' />
                <img className={style.image_2} src={estacao2} alt='Projeto Estações 2' />
              </div>
            </div>
          </div>
        </div>

        {/* Projeto Monitor Ambiente */}
        <div className={style.ProjectWorkTitle}>
          <div className={style.alling_content_projects}>
            <h1 className={style.projectSubTitle}>Projeto Monitor Ambiente</h1>
            <div className={style.flex_projetctWork}>
              <div className={style.textProjetctWork}>
                Um dos meus primeiros projetos pessoais desenvolvido como fundo de aprendizagem. Tem como princípio chave o monitoramento em tempo real usando Socket.io. O sistema conta com um Front-End simples com medidores que expõem temperatura e umidade usando Angular, e com Back-End desenvolvido com framework em Python (Django). Por último, um microcontrolador Arduino Uno usando portas seriais para a comunicação.
                <br />
                Tecnologias utilizadas: <strong>Angular</strong>, <strong>Django</strong>, <strong>Arduino</strong>, <strong>Python</strong>, <strong>HTML</strong>, <strong>CSS</strong>  e <strong>Typescript</strong>
                <br />
                Repositório do projeto:
                <div className={style.link_project}>
                  <a href='https://github.com/harduim300/MonitorAmbiente' target='_blank' rel='noopener noreferrer'>
                    https://github.com/harduim300/<br className={style.disableDesktop}/>MonitorAmbiente
                  </a>
                </div>
              </div>
              <div className={style.container_images}>
                <img className={style.image_1} src={monitorAmb1} alt='Projeto Ambiente 1' />
                <img className={style.image_2} src={monitorAmb2} alt='Projeto Ambiente 2' />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectWork;
