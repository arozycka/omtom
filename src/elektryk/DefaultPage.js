import React from "react";

class DefaultPage extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {
                uslugi1: ["oświetlenia głównego i awaryjnego oraz iluminacji",
                    "rzucenie nowego światła na codzienność",
                    "instalowanie szynoprzewodów wraz z osprzętem",
                    "wykorzystanie elementów oświetlenia “inteligentny dom”",
                    "montaż i dopasowanie certyfikowanych i sprawdzonych opraw oświetleniowych",
                    "wykonywanie drobnych prac wykończeniowych (sztukateria) związanych z zamontowanym oświetleniem",
                ],
                uslugi2: ["instalacje uziemiające",
                    "bruzdowanie pod przewody",
                    "montaż rozdzielni niskiego napięcia",
                    "wykonywanie zasilania awaryjnego, na bazie agregatów prądotwórczych i UPS",
                ],
                uslugi3: [
                    "elektryczne maty grzejne (Ogrzewanie podłogowe",
                    "podłączanie płyt indukcyjnych",
                    "biały montaż",
                ]
            }
    }

    render() {
        return (
            <div className="mainDivDefault main">
                <div className="mainImage">
                    <p id="title">Instalacje elektryczne Technika świetlna</p>
                </div>
                <div className="mainSets">
                    <div className="sets">
                        <div className="text">
                            <h1>Wykonywanie wewnątrz i na zewnątrz budynku:</h1>
                            {
                                this.state.uslugi1.map(el => <li className="listaUslug">
                                    {el}
                                </li>)
                            }
                        </div>
                        <div className="foto1"></div>
                    </div>
                    <div className="sets">
                        <div className="foto2"></div>
                        <div className="text" id="text">
                            <h1>Elektromontaż/remonty/modernizacje instalacji elektrycznych:</h1>
                            {
                                this.state.uslugi2.map(el => <li className="listaUslug">
                                    {el}
                                </li>)
                            }
                        </div>
                    </div>
                    <div className="sets3">
                        <div className="text">
                            <h1>Ponadto oferuję drobne prace instalatorskie:</h1>
                            {
                                this.state.uslugi3.map(el => <li className="listaUslug">
                                    {el}
                                </li>)
                            }
                        </div>
                        <div className="foto3"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DefaultPage;