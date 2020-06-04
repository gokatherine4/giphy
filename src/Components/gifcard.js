import React, { Component } from 'react';
import axios from 'axios'

export default class gifcard extends Component{
    constructor(props) {
        super (props);
    }

    render() {
        return(
            <div>
                <img src = { this.props.url } />
            </div>
        );
    }
}
    gifcard.propTypes = {
    url: this.propTypes.string,
    }
