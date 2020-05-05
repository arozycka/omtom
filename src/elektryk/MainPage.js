import React from "react";
import ImageRotate from "./imageRotate";
import Header from "./header";
import MainContainer from "./MainContainer";
import Footer from "./Footer";

class MainPage extends React.Component {


    render() {
        return (
            <div className="wrapper">
                <Header/>
                <MainContainer/>
                <Footer/>
            </div>
        )

    }
}

export default MainPage;