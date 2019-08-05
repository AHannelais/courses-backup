import React from 'react'
import ReactDOM from 'react-dom'
const getbuttonText = () => {
  return 'Click me !!:'
}
const App = () => {
  return (
    <div>
      <label className='label' htmlfor='name'>
        Enter Name :
      </label>
      <input id='name' type='text' />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {getbuttonText()}
      </button>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
