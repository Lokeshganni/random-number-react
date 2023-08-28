// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  generateNum = () => {
    let number
    number = Math.random() * 100
    number = Math.ceil(number)
    this.setState({num: number})
  }

  render() {
    const {num} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btn" onClick={this.generateNum}>
            Generate
          </button>
          <p className="num-para">{num}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
