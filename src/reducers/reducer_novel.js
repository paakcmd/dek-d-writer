import { LOAD_NOVELLIST, UPDATENOVEL_FROMMODAL, PUBLISH_CHAPTER, SELECT_NOVELLIST, CREATE_CHAPTER, LOAD_NOVEL, SELECT_CHAPTER, SAVE_CHAPTER } from '../actions/index'

const init_state = {
  novelId: 0,
  chapterNumber: 0,
  novels: {
    novelTitle: '',
    abstract: '',
    tags: [],
    category: { main: '', sub: '', text: '' },
    publish: [],
    staticPublish: [],
    css: '',
    chapters: [{ name: 'ข้อมูลเบื้องต้นของเรื่องนี้', content: '' }, { name: '', content: '' }]
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
      return state

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
      if (action.payload.chapterId === 1 || action.payload.chapterId === 0) {
        if (Object.values(prevStaticPublish).indexOf(action.payload.chapterId) === -1) {
          prevStaticPublish.push(action.payload.chapterId)
          state = { ...state, novels: { ...state.novels, staticPublish: prevStaticPublish } }
        }
        if (Object.values(prevPublish).indexOf(action.payload.chapterId) > -1) {
          return state
        } else {
          prevPublish.push(action.payload.chapterId)
          return { ...state, novels: { ...state.novels, publish: prevPublish } }
        }
      } else {
        if (Object.values(prevStaticPublish).indexOf(action.payload.chapterId) === -1 && Object.values(prevStaticPublish).indexOf(action.payload.chapterId - 1) > -1) {
          prevStaticPublish.push(action.payload.chapterId)
          state = { ...state, novels: { ...state.novels, staticPublish: prevStaticPublish } }
        }
        if (Object.values(prevPublish).indexOf(action.payload.chapterId) > -1) {
          return state
        }
        if (Object.values(prevPublish).indexOf(action.payload.chapterId) === -1 && Object.values(prevPublish).indexOf(action.payload.chapterId - 1) > -1) {
          prevPublish.push(action.payload.chapterId)
          return { ...state, novels: { ...state.novels, publish: prevPublish } }
        }
      }
  }

  return state
}
