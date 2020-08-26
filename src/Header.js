import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";



// ES6 ARROW function
function Header({ backButton }) {
    const history = useHistory();
    return (
        //BEM
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header__icon" />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon fontSize="large" className="header__icon" />
                </IconButton>
            )}
            <IconButton>
            </IconButton>
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://media3.giphy.com/media/4NcRoXBtemK2QHkLVd/giphy.gif"
                    alt="tinder logo"
                />
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}


export default Header