import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { apiResponse: "ff" };
  }

  callAPI(){
    fetch("http://localhost:9000/home")
      .then(res => res.text())
      .then(data => this.setState({apiResponse: data}));
    console.log(this.state.apiResponse)
  }

  componentDidMount(){
    this.callAPI();
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome to the Bruin Entrepreneurs Dashboard</p>
          <p className="App-intro">{this.state.apiResponse}</p>
        </header>
      </div>
    );
  }
}

export default App;
