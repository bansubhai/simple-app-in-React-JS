//import react and reactDom

// var React = require('react');
// import React from "react";
import * as React from "react";
// var ReactDom = require('react-dom');
// import ReactDom from "react-dom";
import * as ReactDom from "react-dom";

//create a react component for our hello world

class HelloComponent extends React.Component {
    render() {
        return <div> Hello World from React! </div>;
    }
}

//create an object of this class
var my_hello_world_object = <HelloComponent/>;
var node = document.getElementById("app");

ReactDom.render(my_hello_world_object, node);
