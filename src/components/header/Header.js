import React, {useState} from 'react';
import PropTypes from 'prop-types';
import style from './header.module.css'

const Header = ({handleOnClick}) => {
    const [linkText, setLinkText] = useState('List');
    const onClick = () => {
        setLinkText(linkText === 'Map' ? 'List' : 'Map');
        handleOnClick();
    };


    return (
        <header className={style.header}>
            <div className={style.logoContainer}>
                <p className={style.logo}>Demo</p>
            </div>
            <div className={style.nav}>
                <button className={style.navBtn} onClick={onClick}>{linkText}</button>
            </div>
        </header>
    );
};

Header.propTypes = {
    handleOnClick: PropTypes.func
};

export default Header;

