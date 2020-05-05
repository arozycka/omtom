import React from "react";

class Offer extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {
                uslugi: ["TECHNIKA ŚWIETLNA /Doświadczenie/",

                    "ELEKTROMONTAŻ /przemyślany i dobry/",

                    "MODERNIZACJA INST. /czysto i schludnie/",

                    "REMONT INST. /estetycznie solidnie dokładnie/",

                    "INTELIGENTNY DOM /innowacyjne rozwiązania/",

                    "DORABIANIE UZIEMIENIA /w funkcjonujących instalacjach/",

                    "WYKONYWANIE PRZYŁĄCZY /kwalifikacje uprawniające/",

                    "INSTALACJE DOMOFONOWE /kontrola dostępu, video, RFID/",

                    "PODŁĄCZANIE PŁYT INDUKCYJNYCH /lepszy standard, na lata/",

                    "MONTAŻ LAMP,PŁYT GRZEWCZYCH ITP. /wyjście na przeciw wyzwaniom/",

                    "MONTAŻ I PODŁĄCZENIE ROZDZIELNIC /odpowiedni osprzęt zapewniony/",
                ],
            }
    }


    render() {
        return (
            <div className="mainDivOffer">
                <div className="headerContact">
                    <p>OFERTA</p>
                </div>
                <div className="offer">
                    <h1>Świadczone usługi:</h1>
                    {
                        this.state.uslugi.map(el => <li className="listaUslug">
                            {el}
                        </li>)
                    }
                </div>

            </div>


        )

    }
}

export default Offer;