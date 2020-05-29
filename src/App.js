import React from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from '../src/components/search-box/search-box.component';
import './App.css';

class App extends React.Component{
constructor(){
  super();
  this.state = {monsters: [],
  searchFiled: ''}
  // this.handleChange = this.handleChange.bind(this);
}

 handleChange= (e)=>{
 this.setState({searchFiled:e.target.value},()=>console.log(this.state))
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
  .then(users=>this.setState({monsters:users}))
}

  render(){
    const {monsters,searchFiled} = this.state;
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchFiled.toLowerCase()));
    return (
    <div className='App'>
      <h1> Monsters Rolodex </h1>
     <SearchBox placeholder='search monster' 
     handleChange= {this.handleChange} />
      <CardList monsters= {filteredMonsters}/>
    </div>
  );
}
}

export default App;
