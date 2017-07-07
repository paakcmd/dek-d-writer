import { LOAD_NOVELLIST } from '../actions/index'

const init_state = {
  novels: [{
    novelId: '',
    novelTitle: 'ยังไม่มีชื่อเรื่อง'
  }
  ]
}

export default function (state = init_state, action) {
  switch (action.type) {
    case LOAD_NOVELLIST:
      return { ...state, novels: action.payload.novels }
  }
  return state
}
