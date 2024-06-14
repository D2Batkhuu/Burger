import React from "react"
import css from "./style.module.css"
import Logo from "../Logo"
import Menu from "../Menu"
import HamburgerMenu from "../HamburgerMenu";

const Toolbar =() => (
<header className={css.Toolbar}>
    <div><HamburgerMenu/></div>
    <Logo/>
    <nav className={css.HideOnMobile}><Menu/></nav>
</header>
);



export default Toolbar;