/**
 * Created by pawan on 10/3/17.
 */
import React from "react";

//Class Component
export default class CityButton extends React.Component {
    onButtonClick(event){
        // console.log("I was clicked");
        // console.log(this.props.title)
        this.props.setCurrent(this.props.url, this.props.title);
    }
    render() {
        return (
            <span style={{marginLeft: "20px", marginRight: "20px"}}>
            <button onClick={this.onButtonClick.bind(this)} className="btn btn-lg btn-default">{this.props.title}</button>
            </span>
        );
    }
}
