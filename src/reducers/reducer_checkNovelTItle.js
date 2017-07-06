
import { CHECK_NOVELTITLE, SELECT_NOVELLIST } from '../actions/index'

const init_state = {
  novelTitleStatus: ''
}

export default function (state = init_state, action) {
  switch (action.type) {
    case CHECK_NOVELTITLE:
      return { ...state, novelTitleStatus: action.payload }
    case SELECT_NOVELLIST:
      return { ...state, novelTitleStatus: '' }
  }
  return state
}
