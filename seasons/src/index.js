import './SeasonDisplay.css'
import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
// ill
class App extends React.Component {
  state = { latitude: null, errorMessage: '' }
  componentDidMount () {
    console.log('component rendered')
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    )
  }
  renderContent () {
    if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>
    } else if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          <SeasonDisplay Season={this.state.latitude} />
        </div>
      )
    } else {
      return (
        <div>
          <Spinner message='Please Accept Location Request' />
        </div>
      )
    }
  }

  render () {
    return <div className='border red'>{this.renderContent()}</div>
  }
}
ReactDOM.render(<App />, document.querySelector('#root'))
