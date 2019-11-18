import React from 'react';
class Sort extends React.Component{
	constructor(props){
		super(props);
		this.state={
				isShowSort:false
		};	
		
	}
 
	handleSort(sortBy,sortDir){
		this.props.onSort(sortBy,sortDir);
	}


	isShowSort=()=>{
		this.setState({
			isShowSort:!this.state.isShowSort
		});

	}

	render(){
		let sortBy = this.props.sortBy;
			let sortDir = this.props.sortDir;
			let strSort= sortBy+"-"+sortDir;
			let isShowSort= null;
			if(this.state.isShowSort===true){
				isShowSort= <div className="dropdown-list">
					<ul className="dropdown">
						<li><a  onClick={()=>this.handleSort('name', 'asc')}>Name ASC</a></li>
						<li><a    onClick={()=>this.handleSort('name', 'desc')}>Name DESC</a></li>
						<li><a    onClick={()=>this.handleSort('level', 'asc')}>level ASC</a></li>
						<li><a   onClick={()=>this.handleSort('level', 'desc')}>level DESC</a></li>
					</ul>
				</div>;
			}
		 
		return(
			<div>
			   <span className="nameSort">{strSort}</span>
				 <span  className="sortby" onClick={this.isShowSort}>Sort by ></span>
				 {isShowSort}
    
			</div>
			);
	}
}
export default Sort;