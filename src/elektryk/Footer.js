import React from "react";

class Footer extends React.Component{


    render() {
        return(
            <div>
                <div className="mainDivFooter footer">
                    <div className="footerAdres">
                        <h3>Adres:</h3>
                        <p>Tomasz Żurek</p>
                        <p>ul. Morska 1 </p>
                        <p>32-089 Biały Kościół</p>
                        <p>REGON: 385417240</p>
                        <p>NIP 5130068329</p>
                    </div>
                    <div className="footerKontakt">
                        <h3>Kontakt:</h3>
                        <p>TEL: 668 847 119</p>
                        <p>mail:biuro@omtom.pl</p>
                    </div>
                    <div className="logo2"></div>
                </div>
                <div className="blackLine"><p>Made by A.Różycka</p></div>
            </div>
        )
    }
}

export default Footer;