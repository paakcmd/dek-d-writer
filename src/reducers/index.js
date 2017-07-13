import { combineReducers } from 'redux'
import readerChapterReducer from './reducer_novel'
import novelList from './reducer_novelList'
import remoteSubmit from './reducer_remoteSubmit'
import checkNovelTitle from './reducer_checknoveltitle'
import remoteOpenModal from './reducer_remoteopenmodal'
import formHasbeenTouched from './reducer_formhasbeentouch'
import notification from './reducer_notification'
import user from './reducer_user'
import sideCollapse from './reducer_sidecollapse'
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
  form: formReducer,
  readerChapter: readerChapterReducer,
  novelList: novelList,
  remoteSubmit: remoteSubmit,
  checkNovelTitle: checkNovelTitle,
  remoteOpenModal: remoteOpenModal,
  user: user,
  sideCollapse: sideCollapse,
  formHasbeenTouched: formHasbeenTouched,
  notification: notification
})

export default rootReducer
