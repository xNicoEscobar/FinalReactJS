import { Fragment } from "react";

import HeaderCartButton from "./headerCartButton";
import fotoComidas from '../Assets/meals.jpg';
import classes from './Header.module.css'

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Niconí Food</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={fotoComidas} alt="Mesa con comidas" />
        </div>
    </Fragment>
};

export default Header;