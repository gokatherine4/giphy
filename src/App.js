import React, {Component} from 'react';
import './App.css';
import SearchField from './components/SearchField';
import GifCard from './components/GifCard';
import axios from 'axios'
class App extends Component{
  constructor(){
    super();

    this.state = {
      gifs: {},
      body: 'no search',
    }

  }

  async search(val){
    let gifs = {}
    const searchURL = `http://api.giphy.com/v1/gifs/search?q=${val}&api_key=00zuj7OdWW91q1Iwgz0bpOXg3cSfd2kG&limit=9`
    await axios.get(`${searchURL}`)  
      .then(res => {
          let data = res.data.data  
          console.log(data)
          gifs = data.map(d => {
            return {
              image_url: d.images.fixed_height.url,
              embed_url: d.embed_url,
              title: d.title,
            }
          })
          this.setState({
            gifs: gifs,
            body: 'search'
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  async default(){
    let gifs = {}
    const searchURL = `http://api.giphy.com/v1/gifs/trending?api_key=00zuj7OdWW91q1Iwgz0bpOXg3cSfd2kG&limit=9`
    await axios.get(`${searchURL}`)  
      .then(res => {
          let data = res.data.data  
          console.log(data)
          gifs = data.map(d => {
            return {
              image_url: d.images.fixed_height.url,
              embed_url: d.embed_url,
              title: d.title,
            }
          })
          this.setState({
            gifs: gifs,
            body: 'search'
          })
      })
      .catch(err => {
        console.log(err)
      })

      return <GifCard gifs={this.state.gifs}/>
  }

  componentDidMount(){
    this.default()
  }

  render(){
    return (
      <>
      <div className="App">
        <SearchField
        click={(val)=>this.search(val)} 
        />
      
        <div className="parent">
          {(this.state.body === 'search')?
             <GifCard gifs={this.state.gifs} />
              : this.componentDidMount() }
        </div>
      </div>
      </>
    );
  }

}

export default App;
