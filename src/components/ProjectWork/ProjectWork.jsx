import style from './ProjectWork.module.scss'



const ProjectWork = () => {
    return (
        <section className={style.ProjectWork}>
            <div className={style.ProjectWorkContainer}>
                <div className={style.ProjectWorkTitle}>
                    <h1>
                        Projetos Profissionais
                    </h1>
                    <div className={style.inf_bar}/>
                </div>
                <div className={style.ProjectWorkTitle}>
                    <h1>
                        Projetos Learning Time
                    </h1>
                    <div className={style.inf_bar}/>
                </div>
            </div>
        </section>
    );
}

export default ProjectWork;