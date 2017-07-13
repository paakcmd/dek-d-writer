import { SET_PUBANDSUB, CLEAR_PUBANDSUB, PUBLISH_CHAPTER, CLEARREMOTESUBMIT_TYPEIDENTIFY, CLEARREMOTESUBMIT_READERCHAPTER, REMOTESUBMIT_READERCHAPTER, REMOTESUBMIT_TYPEIDENTIFY } from '../actions/index'

const init = {
  readerChapter: 0,
  typeOfSubmit: '',
  publishandsubmit: 0
}

export default function (state = init, action) {
  switch (action.type) {
    case REMOTESUBMIT_READERCHAPTER:
      return { ...state, readerChapter: 1 }
    case CLEARREMOTESUBMIT_READERCHAPTER:
      return { ...state, readerChapter: 0 }
    case REMOTESUBMIT_TYPEIDENTIFY:
      return { ...state, typeOfSubmit: action.payload }
    case CLEARREMOTESUBMIT_TYPEIDENTIFY:
      return { ...state, typeOfSubmit: '' }
    case SET_PUBANDSUB:
      return { ...state, publishandsubmit: 1 }
    case PUBLISH_CHAPTER:
      return { ...state, publishandsubmit: 0 }
  }
  return state
}
