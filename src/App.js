import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import User from './Components/User';
import { MyContext } from './Components/Context';

class MyProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'harry', userData: [],
      name: '',
      userAge: '', userImage: '',
      userLocation: [],
    }
  }
  componentWillMount() {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(userData => {
        //  this.setState({ userData: userData.items, userName: 'david' })
        this.setState({
          userData: userData.results[0],
          userAge: userData.results[0].dob.age,
          userImage: userData.results[0].picture.medium,
          name: userData.results[0].name.first,
          street: userData.results[0].location.street,
          city: userData.results[0].location.city,
          state: userData.results[0].location.state,
          userName: 'david'
        })
        console.log('here is list =')
        console.log(userData.results[0]);
        // console.log('dob down =')
        //   console.log(userData.results[0].dob.age)
        //   console.log(userData.results[0].picture.medium)
      });
  }

  render() {
    return (
      <MyContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <MyProvider value={{ state: this.state }}>
          <Header />
          <User />
        </MyProvider>
      </div>
    );
  }
}

export default App;
