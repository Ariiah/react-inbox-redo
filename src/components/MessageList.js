import React, { Component } from 'react'
import Message from './Message'

export default class MessageList extends Component {
  render() {
    return(
      <div>
        {this.props.emails.map((email, i) => ( <Message
        key={i}
        email={email}
        emails={this.props.emails}/>
      ))}
      </div>
    )
  }
}
