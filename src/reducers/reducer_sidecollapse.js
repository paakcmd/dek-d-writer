import { SIDE_COLLAPSE } from '../actions/index'

const init = {
  sideCollapse: 0
}

export default function (state = init, action) {
  switch (action.type) {
    case SIDE_COLLAPSE:
      if (state.sideCollapse === 0) {
        return { ...state, sideCollapse: 1 }
      } else {
        return { ...state, sideCollapse: 0 }
      }
  }
  return state
}
