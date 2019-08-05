import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          author='past'
          timeAgo='Yesterday at 11:00PM'
          message='ah yeah banana'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>{' '}
      <ApprovalCard>
        <CommentDetail
          author='trufe'
          timeAgo='Today at 6:30AM'
          message='Tu pue'
          avatar={faker.image.avatar()}
        />{' '}
      </ApprovalCard>
    </div>
  )
}
ReactDOM.render(<App />, document.querySelector('#root'))
