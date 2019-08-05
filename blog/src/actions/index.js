import _ from 'lodash'
import jsonplaceholder from '../apis/jsonplaceholder'

export const fetchPostandUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
}
export const fetchPosts = () => async dispatch => {
  // getState
  const response = await jsonplaceholder.get('/posts')
  dispatch({ type: 'FETCH_POSTS', payload: response.data })
}
export const fetchUser = id => async dispatch => {
  const response = await jsonplaceholder.get(`/users/${id}`)
  dispatch({ type: 'FECTH_USER', payload: response.data })
}

/* Using Memoize function from Lodash

export const fetchUser = id => dispatch => _fetchUser(id, dispatch)

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`)
  dispatch({ type: 'FECTH_USER', payload: response.data })
}) */
