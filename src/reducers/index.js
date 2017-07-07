import { combineReducers } from 'redux'
import readerChapterReducer from './reducer_novel'
import novelList from './reducer_novelList'
import remoteSubmit from './reducer_remoteSubmit'
import checkNovelTitle from './reducer_checkNovelTItle'
import user from './reducer_user'

import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer,
  readerChapter: readerChapterReducer,
  novelList: novelList,
  remoteSubmit: remoteSubmit,
  checkNovelTitle: checkNovelTitle,
  user: user
})

export default rootReducer
