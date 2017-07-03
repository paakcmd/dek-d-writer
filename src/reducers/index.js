import { combineReducers } from 'redux'
import readerChapterReducer from './reducer_novel'
import novelList from './reducer_novelList'
import remoteSubmit from './reducer_remoteSubmit'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer,
  readerChapter: readerChapterReducer,
  novelList: novelList,
  remoteSubmit: remoteSubmit
})

export default rootReducer
