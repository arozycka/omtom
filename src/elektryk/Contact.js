import React from "react";
import {GoogleMap} from 'google-map-react';

class Contact extends React.Component {


    render() {
        return (
            <div className="mainDivContact">
                <div className="headerContact"><p>KONTAKT</p>
                </div>
                <div className="setMaps">
                    <div className="setKontakt">
                    <spam className="logoKontakt">
                        <p className="dwieLitery">OM</p>
                        <p className="trzyLitery">TOM</p>
                    </spam>
                    <div>
                        <p className="name">Tomasz Żurek</p>
                        <p className="tel">tel: 668 847 119</p>
                        <p className="mail">mail:<a href="mailto:biuro@omtom.pl">biuro@omtom.pl</a></p>
                        <p className="adresKontakt">ul. Morska 1 </p>
                        <p className="adresKontakt">32-089 Biały Kościół</p>
                        <p className="adresKontakt">REGON: 385417240</p>
                        <p className="adresKontakt" id="nip">NIP 5130068329</p>
                    </div>
                </div>
                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2555.5923873345205!2d19.835158215374317!3d50.16875947943751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471657d7284dc803%3A0xabb2669bd5d65d52!2sOMTOM%20Tomasz%20%C5%BBurek!5e0!3m2!1spl!2sch!4v1588704354713!5m2!1spl!2sch"
                            width="600" height="450" frameBorder="0" allowFullScreen=""
                            aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </div>

            </div>


        )

    }
}

export default Contact;