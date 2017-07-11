import { OPENMODAL_SETTING, CLEARMODAL_SETTING } from '../actions/index'

const init_state = {
  modalSettingNovel: 0,
  modalPublishRegulation: 0
}

export default function (state = init_state, action) {
  switch (action.type) {
    case OPENMODAL_SETTING:
      return { ...state, modalSettingNovel: 1 }
    case CLEARMODAL_SETTING:
      return { ...state, modalSettingNovel: 0 }
  }

  return state
}
