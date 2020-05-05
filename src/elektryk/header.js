import React from "react";
import {Link, Switch,Route,BrowserRouter} from "react-router-dom";
import MainPage from "./MainPage";
import Offer from "./Offer";
import Gallery from "./Gallery";
import Contact from "./Contact";

class Header extends React.Component {


    render() {
        return (
            <div>
                <div className="redline"></div>
                <div className="mainDivHeader header">
                    <div className="logo"></div>
                    <div className="navigation">
                        <nav>
                            <ul className="ulnavigation">
                                <li><Link to="/">Strona główna</Link></li>
                                <li><Link to="/oferta">Oferta</Link></li>
                                <li><Link to="/realizacje">Realizacje</Link></li>
                                <li><Link to="/kontakt">Kontakt</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>

        )
    }
}

export default Header;