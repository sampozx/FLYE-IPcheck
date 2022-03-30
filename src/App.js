import './App.css';
import React from 'react';


export default class App extends React.Component {
  state = {
    loading: true,
    city: null,
    ip: null,
    country_name: null,
    time_zone: null

  }
  async componentDidMount(){
    const url = "https://freegeoip.app/json/"
    const response = await fetch(url);
    const data = await response.json();
    this.setState({city: data.city, ip:data.ip, country_name: data.country_name, time_zone: data.time_zone, loading: false})
    console.log(data.city);
  }

  render(){
    return(
      <div>
        <h1>MY IP DATA:</h1>
        {this.state.loading ?
         <h2>loading...</h2> : 
         <h2>{this.state.ip} <br></br> {this.state.country_name}<br></br> {this.state.city}<br></br> {this.state.time_zone}</h2>}
      </div>
    )
  }
}
