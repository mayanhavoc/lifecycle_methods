import React, { Component } from 'react';
import axios from 'axios';
import './Loader.css';

class ZenQuote extends Component {
    constructor(props){
        super(props);
        this.state = {
            quote: '',
            isLoaded: false,
        }
    };
    componentDidMount(){
        axios.get("https://api.github.com/zen").then(response => {
        // load data
        setTimeout(
            function() {
                // Set state with data
                this.setState({ quote: response.data, isLoaded: true });
            }.bind(this),
            1000
        );
        });
    };
    componentDidUpdate(){
        
    }
    render() {
        return (
            <div>
                {this.state.isLoaded ? (
                <div>
                    <h1>Always remember</h1>
                    <p>{this.state.quote}</p>
                </div> ) : (
                <div className="loader"/>)}
            </div>
        );
    }
}

export default ZenQuote;