import React, { Component } from 'react';
import axios from 'axios';

import Card from './component/Card';
import FilterSearch from './component/Filter';
import Header from './component/Header';
import Paginate from './component/Paginate';


import './App.css';

let filteredResult = null;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      slicedData: [],
      offset: 0,
      perPage: 5,
      currentPage: 0,
      paymentMethod:'All payment method',
      gender: 'All gender'
    }
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handlePaymentChange = this.handlePaymentChange.bind(this);
    this.displayProfiles = this.displayProfiles.bind(this);
  }
  
  getData(){
    let state = this.state;
    axios
      .get('http://api.enye.tech/v1/challenge/records')
      .then(res => {
        const data = res.data;
        const profiles = data.records.profiles;
        const slicedData = profiles.slice(state.offset, state.offset + state.perPage)
       
        this.setState({
          pageCount: Math.ceil(profiles.length / this.state.perPage),
          slicedData,
          profiles         
        })    
      })
  }

  displayProfiles(data){
    this.setState({slicedData: data.slice(this.state.offset, this.state.offset + this.state.perPage)})
  }

  handlePageClick(e){
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.displayProfiles(this.state.profiles)
        });
  }

  handleGenderChange(value){
    let state = this.state;
    debugger
    
    
    filteredResult = state.profiles.filter((profile) => (value === 'All gender' ? true : profile.Gender === value) && (state.paymentMethod === 'All payment method'? true : profile.PaymentMethod === state.paymentMethod ? true : false));

    this.setState({
      gender:value,  
      offset:0,
      currentPage:0,
      pageCount: Math.ceil(filteredResult.length / this.state.perPage)},
       ()=> this.displayProfiles(filteredResult));
  }

  handlePaymentChange(value){
    let state = this.state;
    debugger
    filteredResult = state.profiles.filter((profile) => (value === 'All payment method' ? true : profile.PaymentMethod === value) && (state.gender === 'All gender'? true : profile.Gender === state.gender ? true : false));

    this.setState({
      paymentMethod:value,  
      offset:0,
      currentPage:0,
      pageCount: Math.ceil(filteredResult.length / this.state.perPage)},
       ()=> this.displayProfiles(filteredResult));
  }

   componentDidMount(){
    this.getData();
  }

  render(){
    let data = this.state.slicedData;
    console.log(this.state.profiles, data)
   return (
      <>
        <Header />
        <main>
          <FilterSearch 
          profiles={this.state.profiles}
          slicedData = {this.state.slicedData}
          gender = {this.state.gender}
          paymentMethod = {this.state.paymentMethod}
          handleStateChange = {[this.handleGenderChange, this.handlePaymentChange]}
          />
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