import React from "react";

export class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <div>
        <h1>Hello from Clock!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )

  }

}