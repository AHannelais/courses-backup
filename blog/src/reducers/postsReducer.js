export default (state = [], action) => {
  // do not access to extern values !  PURE REDUCERS
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload
    default:
      return state
  }
}
