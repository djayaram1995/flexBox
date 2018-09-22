import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        width: window.innerWidth
      })
    })
  }

  render() {
    const { width } = this.state;
    return (
      <div className="container">
        {
          width > 720 ?
          <div>
            <div style={{display: "inline-block", border: "1px solid black", width: width/4-20, height: "50px", marginRight: "5px"}}></div>
            <div style={{display: "inline-block", border: "1px solid black", width: width/4-20, height: "50px", marginRight: "5px"}}></div>
            <div style={{display: "inline-block", border: "1px solid black", width: width/4-20, height: "50px", marginRight: "5px"}}></div>
            <div style={{display: "inline-block", border: "1px solid black", width: width/4-20, height: "50px", marginRight: "5px"}}></div>
              </div>: width <= 720 && width >  360?
          <div>
            <div>
          <div style={{display: "inline-block", border: "1px solid black", width: width/2-20, height: "50px", marginRight: "5px"}}></div>
            <div style={{display: "inline-block", border: "1px solid black", width: width/2-20, height: "50px", marginRight: "5px"}}></div>
            </div>
            <div>
            <div style={{display: "inline-block", border: "1px solid black", width: width/2-20, height: "50px", marginRight: "5px"}}></div>
            <div style={{display: "inline-block", border: "1px solid black", width: width/2-20, height: "50px", marginRight: "5px"}}></div>
            </div>
              </div>: width <=  360 ?
            <div>
            <div style={{border: "1px solid black", width: width-20, height: "50px", marginRight: "5px", marginTop: "5px"}}></div>
            <div style={{border: "1px solid black", width: width-20, height: "50px", marginRight: "5px", marginTop: "5px"}}></div>
            <div style={{border: "1px solid black", width: width-20, height: "50px", marginRight: "5px", marginTop: "5px"}}></div>
            <div style={{border: "1px solid black", width: width-20, height: "50px", marginRight: "5px", marginTop: "5px"}}></div>
              </div>: null
        }
      </div>
    );
  }
}

export default App;