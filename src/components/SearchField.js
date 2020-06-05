import React, { Component } from 'react'

export default class SearchField extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: '',
            allowSearch: false
          }
    }    
 
    
    handleOnInputChange = (event) =>{
        this.setState({
            query: event.target.value
        })
        
        if(this.state.query.length > 1)
          this.setState({allowSearch: true}) 
    }    
    
    
    render() {
        const results = this.state.results;
        console.log(results)
        return (
            <div className="div2">
                <div className="input">
                    <input 
                        type="text" 
                        id="input"
                        onChange={(e)=>this.handleOnInputChange(e)}
                        placeholder=" " 
                    />
                </div>

                <div className="input-button">
                    <button 
                        id="button"
                        disabled={this.state.allowSearch ? false : true}
                        onClick={()=>this.props.click(this.state.query)}>search
                    </button>
                </div>

            </div>
        )
    }
}
