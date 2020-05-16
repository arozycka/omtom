import React from "react";
import {Link} from "react-router-dom";
import img0 from "../images/20200102_103710.jpg";
import img1 from "../images/20200102_103739.jpg";
import img2 from "../images/20200108_155507.jpg";
import img3 from "../images/20200113_161334.jpg";
import img4 from "../images/sufit2.jpg";
import img5 from "../images/20200113_161618.jpg";
import img6 from "../images/metr.jpg";
import img7 from "../images/20200113_162338.jpg";
import img8 from "../images/20200417_123736.jpg";
import img9 from "../images/panel2.jpg";
import img10 from "../images/strop.jpg";
import img11 from "../images/ziemia.jpg";
import img12 from "../images/do_ziemi.jpg";
import img13 from "../images/sciana2.jpg";
import img14 from "../images/rurki.jpg";
import img15 from "../images/sciana.jpg";
import img16 from "../images/20200415_083900.jpg";
import img17 from "../images/uziemienie.jpg";
import img18 from "../images/dom.jpg";
import img19 from "../images/20200417_161057.jpg";
import img20 from "../images/lazienka.jpg";
import img21 from "../images/kable.jpg";
import img22 from "../images/panel.jpg";
import img23 from "../images/skrzynkasurowa.jpg";





class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                galley: [{src: img0, alt: 'OMTOM-photo0'}, {src: img1, alt: 'OMTOM-photo1'}, {src: img2, alt: 'OMTOM-photo2'}, {src: img3, alt: 'OMTOM-photo3'}],
                galley2: [{src: img4, alt: 'OMTOM-photo4'}, {src: img5, alt: 'OMTOM-photo5'}, {src: img6, alt: 'OMTOM-photo6'}, {src: img7, alt: 'OMTOM-photo7'}],
                galley3: [{src: img8, alt: 'OMTOM-photo8'}, {src: img9, alt: 'OMTOM-photo9'}, {src: img10, alt: 'OMTOM-photo10'}, {src: img11, alt: 'OMTOM-photo11'}],
                galley4: [{src: img12, alt: 'OMTOM-photo12'}, {src: img13, alt: 'OMTOM-photo13'}, {src: img14, alt: 'OMTOM-photo14'}, {src: img15, alt: 'OMTOM-photo15'}],
                galley5: [{src: img16, alt: 'OMTOM-photo16'}, {src: img17, alt: 'OMTOM-photo17'}, {src: img18, alt: 'OMTOM-photo18'}, {src: img19, alt: 'OMTOM-photo19'}],
                galley6: [{src: img20, alt: 'OMTOM-photo20'}, {src: img21, alt: 'OMTOM-photo21'}, {src: img22, alt: 'OMTOM-photo22'}, {src: img23, alt: 'OMTOM-photo23'}],
            }
    }


    render() {
        return (
            <div className="mainDivGallery">
                <div className="headerContact">
                    <p>REALIZACJE</p>
                </div>
                <div className="ustawieniegallery">
                    <div className="listaimages">
                        {
                            this.state.galley.map(el => <div>
                                <img className="img" src={el.src} alt={el.alt}/>
                            </div>)
                        }
                    </div>
                    <div className="listaimages">
                        {
                            this.state.galley2.map(el => <div>
                                <img className="img" src={el.src} alt={el.alt}/>
                            </div>)
                        }
                    </div>
                    <div className="listaimages">
                        {
                            this.state.galley3.map(el => <div>
                                <img className="img" src={el.src} alt={el.alt}/>
                            </div>)
                        }
                    </div>
                    <div className="listaimages">
                        {
                            this.state.galley4.map(el => <div>
                                <img className="img" src={el.src} alt={el.alt}/>
                            </div>)
                        }
                    </div>
                    <div className="listaimages">
                        {
                            this.state.galley5.map(el => <div>
                                <img className="img" src={el.src} alt={el.alt}/>
                            </div>)
                        }
                    </div>
                    <div className="listaimages">
                        {
                            this.state.galley6.map(el => <div>
                                <img className="img" src={el.src} alt={el.alt}/>
                            </div>)
                        }
                    </div>
                </div>
                {/*<Link to="/realizacje/wiecejzdjec" activeStyle={{fontColor: "#E58A20", textDecoration: "none"}}>*/}
                {/*    <div className="buttonGallery">Zobacz więcej zdjęć</div>*/}
                {/*</Link>*/}
            </div>
        )
    }
}

export default Gallery;