import React from 'react';
import Item from './Item';

class ListTask extends React.Component{
	constructor(props){
		super(props);
		this.state={

		}
		
	}



	render(){
		 
		 const elementItem = this.props.items.map((item,index)=>{
		 	return(
		 			 <Item onClickEdit={this.props.onClickEdit} onClickDelete={this.props.onClickDelete} key={index} item={item} index={index}/>
		 		);
		 });
     
		return(
 		<div>
          <div>List Task</div>
          <table width="1340" height="20"  border='1'>
           <tbody>
	            <tr>
	              <th width="30" >STT</th>
	               <th>Task</th>
	               <th>Level</th>
	              <th>Action</th>
	            </tr>
	         	 {elementItem}
	         	  
             </tbody>
          </table>

        </div>
			);
	}
}
export default ListTask;