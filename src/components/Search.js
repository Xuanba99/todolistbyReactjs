import React from 'react';
 class Search extends React.Component{
 	constructor(props){
 		super(props);
 			this.state={
 				strSearch:''
 			}
 		
 	}

 	handleSearch=()=>{
 		// console.log(this.state.strSearch);
 		this.props.onHandleSearchControl(this.state.strSearch);
 	}
 	handleClear=()=>{
 		this.setState({strSearch:''});
 		this.props.onHandleSearchControl(""); //set cho thành rỗng sau khi đã setState ở trên
 	}
 	handChange=(evt)=>{
 		this.setState({
 			strSearch:evt.target.value
 		});
 	}
  render(){
    return(
          <div className="inputgroup">
            <input type='text' value={this.state.strSearch} onChange={this.handChange} className="txtSeacrh" placeholder="Seacrh for..."/>
            <button type="button" onClick={this.handleSearch} className="btn btn-info">Search!</button>
               <button type="button" onClick={this.handleClear} className="btn btn-Clear">Clear</button>
          </div>
        
      );
  }
 }
 export default Search;