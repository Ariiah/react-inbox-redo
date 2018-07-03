import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import emails from './db.json'
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      emails: emails
    }
  }


  render() {
    return (
      <div>
        <Toolbar />
        <MessageList emails={this.state.emails} />
      </div>
    )
  }
}

export default App
