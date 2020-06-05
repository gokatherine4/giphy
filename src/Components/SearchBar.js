import React, { Component } from 'react';
import axios from 'axios'
import gifcard from './gifcard';
import PropTypes from 'prop-types';

export class SearchBar extends Component{
    constructor (props) {
        super (props);

        this.state ={
            searchinput: this.props.searchinput,
            gifs: this.props.gifs,
            state: "Trending",
            order: "default"


    