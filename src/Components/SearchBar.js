import React, { Component } from 'react';
import axios from 'axios'
import gifcard from './gifcard';

export default class SearchBar extends Component{
    constructor (props) {
        super (props);

        this.state ={
            searchinput: this.props.searchinput,
            gifs: this.props.gifs,
            state: "regular",
            order: "default"
        }