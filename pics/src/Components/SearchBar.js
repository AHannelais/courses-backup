import React from 'react'
class SearchBar extends React.Component {
  state = { term: '' }
  onFormSubmit = event => {
    // arrow fonction autamaticly bind  to "this" instance of the component

    event.preventDefault()
    this.props.onSubmit(this.state.term)
  }
  render () {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Image Search </label>
            <input
              type='text'
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })} // if we want to acess the input text, we always reefer to the react data instead of html
            />
          </div>
        </form>
      </div>
    )
  }
}
export default SearchBar
