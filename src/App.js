import React from 'react';
import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import FormAdd from './components/FormAdd';
import ListTask from './components/ListTask';
import {filter,includes,orderBy as funcOrderBy,remove, reject} from 'lodash';
import tasks from './mocks/task';
const uuidv4 = require('uuid/v4');

class App extends React.Component{ 
  constructor(props){
    super(props);

    this.state={
     items:tasks,
     toogleFrom:false,
     strSearch:'',
    sortBy:'name',
    sortDir:'asc',
    istemSelected:null

    };
  }


  onSubmitForm=(item)=>{
  if(item.id!==""){//edit
    this.state.items = reject( this.state.items, { id: item.id });
    this.state.items.push({ id: item.id, name: item.name, level: +item.level });
    
    // this.state.items.forEach((elm,key)=>{
    //   if(elm.id===item.id){
    //     this.state.items[key].name=item.name;
    //     this.state.items[key].level=+item.level;
    //   }
    // })

  }else{//add
    this.state.items.push({
      id:uuidv4(),
      name:item.name,
      level:+item.level
    });
  }
    
    this.setState({
      items:this.state.items,
      toogleFrom:!this.state.toogleFrom
    })


  }
  handleSortApp=(sortBy,sortDir)=>{
      this.setState({
        sortBy: sortBy,
         sortDir:sortDir
      });
  }
  
  handleDelete=(id)=>{
    let items = this.state.items;
    remove(items, (item)=>{
      return item.id===id;
    });
    this.setState({
      items:items
    });
  }
  handleEdit=(item)=>{
    this.setState({
      istemSelected:item,
      toogleFrom: true
    })
  }
  onShowhandlForm=()=>{
    this.setState({
      toogleFrom: !this.state.toogleFrom,
      istemSelected:null
    });
  }

  handleSearchApp=(value)=>{
    this.setState({strSearch:value});
  }
  render(){
    var itemsOrigin = this.state.items;
    let items= [];
    var showFormAdd = null;
    let search = this.state.strSearch;
    let {sortBy, sortDir,istemSelected}= this.state;


      items=filter(itemsOrigin, (item)=>{
        return includes(item.name.toLowerCase(), search.toLowerCase());
      });

      items=funcOrderBy(items, [sortBy],[sortDir]);
     
    // if(search.length>0){ //khi ma ô text search không có giá trị gì thì sẽ thực hiện kiểm tra nếu
    //     itemsOrigin.forEach((item)=>{ //vì độ dài của text là 0 vì chưa nhập gì nên sẽ không thực hiện vế này
    //         if(item.name.toLowerCase().indexOf(search.toLowerCase()) !==-1){
    //           items.push(item);

    //         }
    //     });
    // }else{ //sẽ thực hiện vế này vì lenght của search đang là 0 nên sẽ push hết tất cả giá trị của items từ itemsOgirin
    //   items=itemsOrigin;

     
    // }


    if(this.state.toogleFrom===true){
      showFormAdd=  <FormAdd istemSelected={istemSelected} onClickSubmitForm={this.onSubmitForm} cancelForm={this.onShowhandlForm} />
    }else{

    }
      return (
        <div className='container-main'>
       
            {/*  title components*/}
               <Title/>
               
                <hr/>
                <Control onSortControl={this.handleSortApp} sortBy={sortBy} sortDir={sortDir} onCLoseForm={this.state.toogleFrom} onSearch={this.handleSearchApp} onShowhandlForm={this.onShowhandlForm}/>
             {/*them task*/}
                {showFormAdd}
                <ListTask 
                onClickEdit={this.handleEdit}
                onClickDelete={this.handleDelete} items={items}/>  {/* từ khai báo  let items= [];*/}
          </div>
          );
    }
}
export default App;
// xin chao tat ca cac ban
