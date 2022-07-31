import React from "react";
import images from "../exports/images";
import { Navbar } from "../styles/stylesApp";


const Nav = () => {
    // const hamb = document.getElementById('ham')
    // const x = document.getElementById('close')
    // const [current, setCurrent] = useState(0)

    const showMenu = () => {
    const n_bar = document.getElementById('nb')
    const hamb = document.getElementById('ham')
    const x = document.getElementById('close')
    const m_list = document.getElementById('menu_list')
    const bd = document.getElementById('bd')

    n_bar.classList.toggle('nav_bg')
    hamb.classList.toggle('s_menu')
    x.classList.toggle('s_menu')
    m_list.classList.toggle('s_menu')
    bd.classList.toggle('active')



    }


    return (
        <Navbar id='nb'>
        <img src={images.icons.ham} alt="menu" className="menu" id="ham" onClick={ showMenu }/>
        <img src={images.icons.close} alt="X" className="s_menu" id="close" onClick={ showMenu }/>
        <ul id="menu_list" className="s_menu">
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
        </ul>
        </Navbar>
    )
}

export default Nav