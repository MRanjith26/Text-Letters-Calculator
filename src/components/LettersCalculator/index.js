// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {textInput: ''}

  onText = event => {
    this.setState({
      textInput: event.target.value,
    })
    console.log(event.target.value)
  }

  render() {
    const {textInput} = this.state
    return (
      <div className="bg-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="watch-img"
          />
        </div>
        <div className="content-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-container">
            <label className="para" htmlFor="input">
              Enter the phrase
            </label>
            <input
              id="input"
              type="text"
              value={textInput}
              className="context"
              onChange={this.onText}
              placeholder="Enter the phrase"
            />
          </div>
          <div className="count-card">
            <p className="count">No.of letters: {textInput.length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
