import { PUBLISH_CHAPTER, SELECT_NOVELLIST, CREATE_CHAPTER, LOAD_NOVEL, SELECT_CHAPTER, EDIT_CHAPTER } from '../actions/index'

const init_state = {
  novelId: 0,
  chapterNumber: 0,
  novels: {
    basicDetail: { detail: '' },
    publish: [],
    chapters: [{ name: '', content: '' }]
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

    case EDIT_CHAPTER:
      const updateChapter = { name: action.payload.value.name, content: action.payload.value.content }
      const previousChapter = state.novels.chapters
      const index = action.payload.index
      previousChapter[index] = updateChapter
      if(action.payload.newPub !== ''){
        state = { ...state, novels: { ...state.novels, publish: action.payload.newPub } }
      }
      console.log(state)
      state = { ...state, novels: { ...state.novels, chapters: previousChapter } }
     
      return state

    case SELECT_NOVELLIST:
      return action.payload

    case PUBLISH_CHAPTER:
      const prevPublish = [...state.novels.publish]
      if(Object.values(prevPublish).indexOf(action.payload.chapterId ) > -1){
        return state
      }
      else {
        prevPublish.push(action.payload.chapterId)
        return { ...state, novels: { ...state.novels, publish: prevPublish } }
      }
  }

  return state
}
