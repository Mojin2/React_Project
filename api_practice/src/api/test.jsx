import React from 'react';

class Test extends React.Component {

  state = {
    events: []
  }
  
  componentDidMount() {
      this.requestData()
  }

  requestData = ()=> {
    const xhr = new XMLHttpRequest(); 
    xhr.open('GET', 'https://developer-lostark.game.onstove.com/news/events', true)
    xhr.setRequestHeader('authorization', 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMjk0ODkifQ.NURDZVT-PbtrOayT0RzsGCWTcvFzaUaGn1NRYzMqH8V-81pDu2-ivT-AhuHN5LpJ4Lm_4qN1R5q6WDnB0zmtKp1PUGHTMgXfPy-ae5DW-c9Pgi2nlqQysH_A5CIt_Qf79X85I15IuEeRTsUHcCbtnxmIjAsnK_xFXiz1VIRYUtabmpQmqLKGVRZut8K_0K8NhPmEASXlioIBwQR2K-SNekWprmhfuoAchQ6o4ZzYN-gZW0_wy_WDXT5FwE2J9-dpf6pvnAYO9TXn0uN0ek-RG6cgXWINhAy0OQqZwoqXDoJNZhNPTeXhX1J50HTQ9cMZ46KaAXCgPkb8lG9peZenhA');
    xhr.setRequestHeader('accept', 'application/json');
    xhr.onreadystatechange = () => { };
    xhr.onload = () => {
      if(xhr.status===200) {
        const events = JSON.parse(xhr.response)
        console.log(events)
        this.setState({
          events
        })
      }
    }
    xhr.send(null)
  }

  render () {    
    const events = this.state.events.map(event=> (
      <div key={event.Title}>
        <h4>{event.Title}</h4>
      </div>
    ))
    return (
      <> 
        {events}
      </> 
    )
  }
}

export default Test;