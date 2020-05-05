import React from "react";
import {GoogleMap} from 'google-map-react';

class Contact extends React.Component {


    render() {
        return (
            <div className="mainDivContact">
                <div className="headerContact"><p>KONTAKT</p>
                </div>
                <div className="setKontakt">
                    <spam className="logoKontakt">
                        <p className="dwieLitery">OM</p>
                        <p className="trzyLitery">TOM</p>
                        <p className="name"> - Tomasz Żurek</p>
                    </spam>
                    <div>
                        <p className="tel">tel: 668 847 119</p>
                        <p className="mail">mail: biuro@omtom.pl</p>
                        <p className="adresKontakt">ul. Morska 1 </p>
                        <p className="adresKontakt">32-089 Biały Kościół</p>
                        <p className="adresKontakt">REGON: 385417240</p>
                        <p className="adresKontakt" id="nip">NIP 5130068329</p>
                    </div>
                </div>
                < div className="contact-map">
                    {/*<iframe*/}
                    {/*    src="https://www.google.com/maps/place/OMTOM+Tomasz+%C5%BBurek/@50.1687629,19.8351582,17z/data=!3m1!4b1!4m5!3m4!1s0x471657d7284dc803:0xabb2669bd5d65d52!8m2!3d50.1687595!4d19.8373469"*/}
                    {/*    width="400" height="400"></iframe>*/}
                </div>
            </div>


        )

    }
}

export default Contact;