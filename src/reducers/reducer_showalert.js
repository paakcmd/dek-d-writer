import { HIDE_ALERT, PUBLISH_PREVIOUS_CHAPTER, CLEAR_PUBLISH, PUBLISH_CHAPTER, SAVE_CHAPTER, AUTO_SAVE } from '../actions/index'

const init = {
  show: false,
  message: '',
  typeOfAlert: '',
  alertDuration: 3000,
  published: false

}

export default function (state = init, action) {
  switch (action.type) {
    case AUTO_SAVE:
      if (state.autoSave === 0) {
        return { ...state, typeOfAlert:'success', message:'เปิดการบันทึกอัตโนมัติ', show:true, alertDuration:3000 }
      }
      if (state.autoSave === 1) {
        return { ...state, typeOfAlert:'info', message:'ปิดการบันทึกอัตโนมัติ', show:true, alertDuration:3000 }
      }
      break
    case SAVE_CHAPTER:
      return { ...state, typeOfAlert:'success', message:'บันทึกแล้ว', show:true, alertDuration:3000 }
    case PUBLISH_CHAPTER:
      return { ...state, published: true,  alertDuration:3000 }
    case CLEAR_PUBLISH:
      return { ...state, published: false }
    case PUBLISH_PREVIOUS_CHAPTER:
      return { ...state, typeOfAlert:'info', message:'บันทึกแล้ว แต่ไม่สามารถ Publish ได้เพราะตอนก่อนหน้ายังไม่ได้ Publish', show:true, alertDuration:3000 }
    case HIDE_ALERT:
      return { ...state, show:false}
  }
  return state
}
