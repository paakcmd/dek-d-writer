import { CLEARREMOTESUBMIT_TYPEIDENTIFY, CLEARREMOTESUBMIT_READERCHAPTER, REMOTESUBMIT_READERCHAPTER, REMOTESUBMIT_TYPEIDENTIFY } from '../actions/index'

const init = {
  readerChapter: 0,
  typeOfSubmit: ''
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
  }
  return state
}
