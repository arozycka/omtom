import React from "react";
import Offer from "./Offer";
import Gallery from "./Gallery";
import Contact from "./Contact";
import DefaultPage from "./DefaultPage";
import {Switch,Route} from "react-router-dom";


class MainContainer extends React.Component{
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={DefaultPage}/>
                    <Route exact path="/oferta" component={Offer}/>
                    <Route exact path="/realizacje" component={Gallery}/>
                    <Route exact path="/kontakt" component={Contact}/>
                </Switch>
            </div>
        )
    }
}

export default MainContainer;