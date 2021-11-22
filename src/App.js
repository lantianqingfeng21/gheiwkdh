
import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <clock/>
    </div>
    
  );
}
const Clock=()=>{
  //1時間：分：秒　出力する
  //２setintevat();
  //3stateを導入する
  var now=new Date().toLocaleTimeString();
  return(
    <P>
      {now}
    </P>
  );
}
class clock extends React.Component{
  constructor(props){
    super(props);
    this.state={time:new Date().toLocaleTimeString()}
  }
}
render(){
  return(
   <P>{this.state.time}</P>
  );
}
ComponentDidMount(){
  setInterval(()=>)
}
setInterval(()=>this.refresh,1000);

const refresh=()=>{
  this.state(()=>this.setInterval)
}
export default App;
