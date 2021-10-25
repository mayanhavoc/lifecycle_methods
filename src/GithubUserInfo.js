import React, { Component } from 'react';
import axios from 'axios';
import './Loader.css';

class GithubUserInfo extends Component {
    constructor(props){
        super(props);
        this.state={
            imgUrl: '', 
            name: '',
            isLoaded: false,
        };
    }
    async componentDidMount(){
        const url = `https://api.github.com/users/${this.props.username}`;
        let response = await axios.get(url);
        let data = response.data;
        this.setState({ imgUrl: data.avatar_url, name: data.name, isLoaded: true });
    }
    render() {
        return (
            <div>
                {this.state.isLoaded ? (
                    <div>
                        <h1>Github user: {this.state.name}</h1>
                        <img src={this.state.imgUrl} alt="" />
                    </div>
                ) : (
                    <div className="loader"></div>
                )}
            </div>
        )
    }
}

export default GithubUserInfo;
