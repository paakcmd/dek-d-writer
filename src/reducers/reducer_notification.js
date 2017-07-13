import { CLEAR_NOTISAVE, SAVE_CHAPTER, AUTO_SAVE } from '../actions/index'

const init = {
  saved: 0,
  published: 0,
  autoSave: 0

}

export default function (state = init, action) {
  switch (action.type) {
    case AUTO_SAVE:
      if (state.autoSave === 0) {
        return { ...state, autoSave: 1 }
      }
      if (state.autoSave === 1) {
        return { ...state, autoSave: 0 }
      }
    case SAVE_CHAPTER:
      return { ...state, saved: 1 }
    case CLEAR_NOTISAVE:
      return { ...state, saved: 0 }
  }
  return state
}
