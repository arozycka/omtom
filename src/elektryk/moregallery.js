import React from "react";
import iframe from "react-iframe";

class MoreGallery extends React.Component {

    render() {
        return(
            // <div style={{width: "500px", height: "500px", overflow: "hidden"}}>
            <div>
            <iframe
                src="https://photos.app.goo.gl/NpEzQg8BfQwLwv797"
                                                width="100%" height="730"></iframe>
            </div>
        )
    }
}

export default MoreGallery;