import { scrollToId } from "../../handlers/scrollToId";
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
                <nav className={style.menu_nav}>
                    <ul className={style.menu_list}>
                        <li><button onClick={() => scrollToId('home-main')}>Home</button></li>
                        <li><button onClick={() => scrollToId('about-me')}>Sobre Mim</button></li>
                        <li><button onClick={() => scrollToId('projects')}>Projetos</button></li>
                        <li><button onClick={() => scrollToId('email-form')}>Contato</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;