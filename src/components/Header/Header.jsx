import style from "./Header.module.scss"

const Header = () => {
    return (
        <header>
            <div className={style.headerContainer}>
                <h1>Olá Header</h1>
            </div>
        </header>
    );
}

export default Header;