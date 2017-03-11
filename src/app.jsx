import * as React from "react";
import * as ReactDOM from "react-dom";

import data from "./data.js";
import ImageBox from "./components/image-box.jsx";
import CityButton from "./components/city-button.jsx";

//data = [{title, url},{},{},{}]

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentURL: this.props.data[0].url, currentTitle: this.props.data[0].title};

        this.setCurrent = this.setCurrent.bind(this);
    }

    setCurrent(url, title) {
        this.setState({currentURL: url, currentTitle: title});

    }

    render() {
        return (<div>
            <ImageBox url={this.state.currentURL} title={this.state.currentTitle}/>

            {
                this.props.data.map(function (object) {
                    return (<CityButton setCurrent={this.setCurrent} key={object.title} url={object.url}
                                        title={object.title}/>);
                }.bind(this))
            }

        </div>);
    }

}

//React element from a react Component app
var app = <App data={data}/>

//find out root node for the React app
var node = document.getElementById("app");

//Inject React Element App into root node
ReactDOM.render(app, node);