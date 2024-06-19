

import style from '../assets/style/header.module.css'
import Canvas from './header/Canvas'

const Header = () => {
  

    return (
        <header className={style.header}>
            <nav className="container">
                <h5>House Of Gamers</h5>
                <Canvas/>
            </nav>
        </header>
    )
}

export default Header