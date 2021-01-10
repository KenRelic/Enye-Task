import React, { Component } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

import Card from './component/Card';
import Header from './component/Header';
import Paginate from './component/Paginate';


import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      slicedData: [],
      offset: 0,
      perPage: 1,
      currentPage: 0
    }
  }
  
  getData(){
    let state = this.state;
    axios
      .get('http://api.enye.tech/v1/challenge/records')
      .then(res => {
        const data = res.data;
        const profiles = data.records.profiles;
        const slicedData = profiles.slice(state.offset, state.offset + state.perPage)
       console.log(slicedData)
        const postProfiles = slicedData.map(user=> <>
          
        </>
        )
        this.setState({
          slicedData,
          profiles
        })
      })
  }
  async componentDidMount(){
    this.getData();
  }

  render(){
    let data = this.state.slicedData;
    console.log(this.state.profiles, data)
   return (
      <>
        <Header />
        <main>
          <div className="main">
                {data.map((user)=> <Card key={data.indexOf(user)} data={user} />) } 
          </div>          
          <Paginate pageCount={this.state.pageCount} handlePageClick={this.handlePageClick} />
        </main>
      </>
    )
  }
 
}

export default App;
