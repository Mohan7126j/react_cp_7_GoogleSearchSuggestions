// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInputValue: '',
    inputValue: '',
  }

  onChangeInputValue = event => {
    if (event.target.value === '') {
      this.setState({
        searchInputValue: '',
        inputValue: '',
      })
    } else {
      this.setState({
        searchInputValue: event.target.value,
        inputValue: event.target.value,
      })
    }
  }

  suggestedValue = searchValue => {
    this.setState({inputValue: searchValue})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInputValue, inputValue} = this.state

    const filteredValue = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(searchInputValue.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="container">
          <img
            className="google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-bar-container">
            <div className="search-bar">
              <label htmlFor="search-input">
                <img
                  className="search-icon"
                  src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                  alt="search Icon"
                />
              </label>
              <input
                id="search-input"
                type="search"
                placeholder="Search Google"
                onChange={this.onChangeInputValue}
                value={inputValue}
              />
            </div>
            <ul>
              {filteredValue.map(item => (
                <SuggestionItem
                  searchItem={item}
                  key={item.id}
                  suggestedValue={this.suggestedValue}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
