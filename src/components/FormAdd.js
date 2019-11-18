import React from 'react';
class FormAdd extends React.Component{
	 constructor(props){
	 	super(props);
	 	this.state={
	 		task_name:'',
	 		task_level:0
	 	};
	 }

	 
	 onHandleChange=(evt)=>{
	 	let target = evt.target;
	 	let value = target.value;
	 	let name = target.name;
	 	this.setState({[name]:value});
	 }
	  onHandleSubmit=(evt)=>{
	  	let items={
	  		 name:this.state.task_name,
	  		level:this.state.task_level
	  	}
	  	this.props.onClickSubmitForm(items);
	 	evt.preventDefault();
	 	 
	 }

	 onCancelForm=()=>{
	 	this.props.cancelForm();
	 }
	 render(){
		return( 
			<div className="add-task-form">
		           <form onSubmit={this.onHandleSubmit}>
			           <input type="text" value={this.state.task_name} name="task_name"  onChange={this.onHandleChange} placeholder="Task Name"/>
				          <select value={this.state.task_level} onChange={this.onHandleChange} name="task_level">
				              <option value={0}>Small</option>
				              <option value={1}>Midium</option>
					            <option value={2}>Hight</option>
					          </select>
					          <input type="submit" value="Submit" className="btn-info"/>
					     <input type="button" value="Cancel" className="btn-submit" onClick={this.onCancelForm}/>
				</form>
	 	   </div>
  	  );
	}
}

export default FormAdd;
 
