import { combineReducers } from 'redux'

// Reducers
const songsReducer = () => {
  return [
    {
      title: 'No Scrubs',
      duration: '4:05'
    },
    {
      title: 'Macarena',
      duration: '2:20'
    },
    {
      title: 'All Star',
      duration: '3:35'
    },
    {
      title: 'Smell like Teen Spirit',
      duration: '5:20'
    }
  ]
}

const SelectedSongReducer = (selectSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectSong
}
export default combineReducers({
  songs: songsReducer,
  selectSong: SelectedSongReducer
})
