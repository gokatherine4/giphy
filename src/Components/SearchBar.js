import React, { Component } from 'react';
import axios from 'axios'
import gifcard from './gifcard';
import PropTypes from 'prop-types';

class SearchBar extends Component{
    constructor (props) {
        super (props);

        this.state ={
            searchinput: this.props.searchinput,
            gifs: this.props.gifs,
            state: "Trending",
            order: "default"
        }
    }
newest = (e) => {
    this.setState({order: "newest"});
};
oldest = (e) =>{
    this.setState({order: "older"});
};
setSearchinput = (e) => {
    this.setState({searchinput : e.target.value});
};
componentDidMount(){
    search = (e) =>  axios.get.apply ("http://api.giphy.com/v1/gifs/search?q=" + (this.state.searchinput)+"&api_key=Y57vdnPo1r3npopJkOoTM5rMYpsI2pad").then((repsonse) => {
            this.setState ( {gifs: response.data ["data"], state :"searching"});
            this.state.gifs.forEach((element) => {
                console.log(element.ratings);
            });

SearchBar.propTypes = {
    searchInput: PropTypes.string,
    gifs: PropTypes.array
};           
SearchBar.defaultProps = {
    gifs:[]
};
return (
    <div>
        <h1> Search Giphy</h1>
        <input id = "inputSearch" onChange = {this.setSearchInput}></input>
        <button onClick = {this.search}>search</button>
    </div>
);
    }
}
}

export default SearchBar;
