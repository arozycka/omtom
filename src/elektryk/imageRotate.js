import React from "react";

class ImageRotate extends React.Component{

    render() {

        return(
            <div className="card" id="imageRotate">
                <div className="mainCard back" id="imageRotateBack">
                    <p>Asia Kowalska</p>
                    <span>Specialistka stylizacji włsow</span>
                </div>
                <div className="mainCard front" id="imageRotateFront">
                </div>
            </div>
        )
    }
}

export default ImageRotate;