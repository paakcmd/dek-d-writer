import { CLEAR_PUBANDSUB, AUTO_SAVE, UPDATENOVEL_FROMMODAL, PUBLISH_CHAPTER, SELECT_NOVELLIST, CREATE_CHAPTER, LOAD_NOVEL, SELECT_CHAPTER, SAVE_CHAPTER } from '../actions/index'

const init_state = {
  reRender: 0,
  saveDone: 0,
  autoSave: 0,
  novelId: 0,
  chapterNumber: 0,
  overAllLastUpdate: '',
  novels: {
    novelTitle: '',
    abstract: '',
    tags: [],
    category: { main: '', sub: '', text: '' },
    publish: [],
    staticPublish: [],
    css: '',
    chapters: [{ name: 'ข้อมูลเบื้องต้นของเรื่องนี้', content: '', chapterLastUpdate: '' }, { name: '', content: '', chapterLastUpdate: '' }]
  }
}

export default function (state = init_state, action) {
  switch (action.type) {
    case LOAD_NOVEL:
      return { ...state, novels: action.payload }

    case CREATE_CHAPTER:
      const newChapters = [...state.novels.chapters, action.payload]
      return { ...state, novels: { ...state.novels, chapters: newChapters } }
    case SELECT_CHAPTER:
      return { ...state, chapterNumber: action.payload }
    case AUTO_SAVE:
      if (state.autoSave === 0) {
        return { ...state, autoSave: 1 }
      }
      if (state.autoSave === 1) {
        return { ...state, autoSave: 0 }
      }

    case SAVE_CHAPTER:
      const updateChapter = { name: action.payload.value.name, content: action.payload.value.content }
      const previousChapter = state.novels.chapters
      const index = action.payload.index
      previousChapter[index] = updateChapter
      if (action.payload.newPub !== '') {
        state = { ...state, novels: { ...state.novels, publish: action.payload.newPub } }
      }
      state = { ...state, novels: { ...state.novels, chapters: previousChapter } }
      state = { ...state, novels: { ...state.novels, codearea: action.payload.value.codearea } }
      return { ...state, saveDone: 1 }

    case SELECT_NOVELLIST:
      return action.payload

    case UPDATENOVEL_FROMMODAL:
      state = { ...state, novels: { ...state.novels, novelTitle: action.payload.novelTitle } }
      state = { ...state, novels: { ...state.novels, abstract: action.payload.abstract } }
      state = { ...state, novels: { ...state.novels, tags: action.payload.tags } }
      return { ...state, novels: { ...state.novels, category: action.payload.category } }
    case PUBLISH_CHAPTER:
      const prevPublish = [...state.novels.publish]
      const prevStaticPublish = [...state.novels.staticPublish]
      state =  { ...state, saveDone: 0 } 
      if (action.payload.chapterId === 1 || action.payload.chapterId === 0) {
        if (Object.values(prevStaticPublish).indexOf(action.payload.chapterId) === -1) {
          prevStaticPublish.push(action.payload.chapterId)
          state = { ...state, novels: { ...state.novels, staticPublish: prevStaticPublish } }
        }
        if (Object.values(prevPublish).indexOf(action.payload.chapterId) === -1) {
          prevPublish.push(action.payload.chapterId)
          return { ...state, novels: { ...state.novels, publish: prevPublish } } 
        }
      } else {
        if (Object.values(prevStaticPublish).indexOf(action.payload.chapterId) === -1 && Object.values(prevStaticPublish).indexOf(action.payload.chapterId - 1) > -1) {
          prevStaticPublish.push(action.payload.chapterId)
          state = { ...state, novels: { ...state.novels, staticPublish: prevStaticPublish } }
        }
        if (Object.values(prevPublish).indexOf(action.payload.chapterId) === -1 && Object.values(prevStaticPublish).indexOf(action.payload.chapterId - 1) > -1) {
          prevPublish.push(action.payload.chapterId)
          return { ...state, novels: { ...state.novels, publish: prevPublish } }
        }
      }
  }

  return state
}
