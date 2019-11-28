import React from 'react';
class Item extends React.Component{

    handleDelete=(id)=>{
        this.props.onClickDelete(id);

    }
    handleEdit=(item)=>{
       this.props.onClickEdit(item);
    }
	render(){
         
        const item = this.props.item;
        const stt = this.props.index;

		return(
 		   
           <tr>
                <td>{stt+1}  </td>
                <td>{item.name}</td>
                <td>{this.showItemLevel(item.level)}</td>
                <td> 
                    <input type="button" value="Edit" className="btn-warning" onClick={()=>this.handleEdit(item)}/>
                    <input type="button" value="Delete" className="btn-submit" onClick={()=>this.handleDelete(item.id)}/> 
                </td>
            </tr>
       
			);
	}
    showItemLevel(level){
        var   elmlevel=<span name="small">Small</span>;
        if(level===0){
            elmlevel=<span name="small">Small</span>

        }else if(level===1){
            elmlevel=<span name="midium">Midium</span>

        }else {
              elmlevel=<span  name="hight">Hight</span>
        }
        return elmlevel;

    }
}
export default Item;