import style from "./Header.module.scss"
import fotoPerfil from "/perfil.png"


const Header = () => {
    return (
        <header>
            <div className={style.headerContainer}>
                <div className={style.logo}>
                    <img className={style.logoPerfil} src={fotoPerfil} alt="" />
                    <h1>MCH</h1>
                </div>
                <nav className={style.headerNav}>
                    <ul>
                        <li>Sobre Mim</li>
                        <li>Projetos</li>
                        <li>Contato</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;