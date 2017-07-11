import { FORM_HASBEENTOUCHED, SAVE_CHAPTER } from '../actions/index'

const init = {
  touched: 0
}

export default function (state = init, action) {
  switch (action.type) {
    case FORM_HASBEENTOUCHED:
      return { ...state, touched: 1 }
    case SAVE_CHAPTER:
      return { ...state, touched: 0 }
  }
  return state
}
