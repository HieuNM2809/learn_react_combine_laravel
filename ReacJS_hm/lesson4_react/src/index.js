import React from 'react';
import ReactDOM from 'react-dom';
import Car from './Car.js';
import './css/index.css';

class Hieu extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1 style={{color:"red"}} >NGUYEN MINH HIEU {this.state.color}</h1>
        <button  onClick={()=>this.changeColor()}>OK</button>  

        <p>Ho Va Ten: {this.props.hoVaTen}</p>
      </div>
    );
  }
}
// render
if( document.getElementById('root')){ 
  ReactDOM.render( 
    <div>
      <Hieu hoVaTen="Nguyen Minh Hieu"></Hieu>
      <Car/>
      <p className="chuIn">Chữ In</p>
    </div>, 
    document.getElementById('root'));
}




// ref

// class Inputref extends React.Component{
//   constructor(props){
//     super(props);
//     this.showtt = this.showtt.bind(this);
//   }
//   showtt(){
//     var text = this.textInput.value;
//     alert(text);
//   }
//   render(){
//     return(
//       <div>
//         <input type="text" ref={(input) => { this.textInput = input; }}/>
//         <button onClick={this.showtt}>Hiển thị</button>
//       </div>
//     );
//   }
// }