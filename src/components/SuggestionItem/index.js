// Write your code here
import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  render() {
    const {searchItem, suggestedValue} = this.props
    const suggestedValueFun = () => {
      suggestedValue(searchItem.suggestion)
    }
    return (
      <li>
        <p>{searchItem.suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          onClick={suggestedValueFun}
        />
      </li>
    )
  }
}

export default SuggestionItem
