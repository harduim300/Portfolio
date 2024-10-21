import style from './Footer.module.scss'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
    return (
       <footer id='footer'>
            <div className={style.footerContainer}>
                <div className={style.footerContainerFlexTop}>
                    <div className={style.footerMyInfo}>
                        <h1>Matheus Harduim</h1>
                        <p>| Graduando da UERJ | Angular | Python | PHP | C++ | Git | Tecnologia da Informação | React |</p>
                    </div>
                    <div className={style.footerSocialMedia}>
                        <h1>Social</h1>
                        <div className={style.flexIcons}>
                            <FaLinkedinIn className={style.socialMediaIcons}/>
                            <FaGithub className={style.socialMediaIcons}/>
                            <FaWhatsapp className={style.socialMediaIcons}/>
                        </div>
                    </div>
                </div>
                <div className={style.footerContainerFlexBottom}>
                    <a href="">Home</a><span>-</span>
                    <a href="">Home</a><span>-</span>
                    <a href="">Home</a><span>-</span>
                    <a href="">Home</a><span>-</span>
                    <a href="">Home</a><span>-</span>
                    <a href="">Home</a>

                </div>
            </div>
            <div className={style.madeByMH}>&copy; Desenvolvido por Matheus Harduim</div>
       </footer>
    );
}

export default Footer;