/**
 * Created by pawan on 10/3/17.
 */
import React from "react";

//Class Component
class ImageBox extends React.Component{
    render(){
        return (
            <div className="jumbotron">
            <img className="img-rounded" src={this.props.url} alt={this.props.title}/>
            </div>
        );
    }
}

export default ImageBox;