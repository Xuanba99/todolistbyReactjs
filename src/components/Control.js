import React from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends React.Component   {
	showForm=()=>{
		this.props.onShowhandlForm(); //vì bên kia là một phương thức nên phải gọi là ()
	}

	render(){
		    let {sortBy, sortDir}=this.props;
		   
		let element =   <button type="button" className="btn btn-info addtask"  onClick={this.showForm}>Add task</button>;
		if(this.props.onCLoseForm===true){
				element=	  <button type="button" className="btn btn-success addtasks"  onClick={this.showForm}>Close task</button>
		}

		 return (
		    <div>
	          <Search   onHandleSearchControl={this.props.onSearch}/>
	          <Sort onSort={this.props.onSortControl} sortBy={sortBy}  sortDir={sortDir} />
	          {element}
		     </div>
		  );
 
	}
	 
  
}

export default Control;
