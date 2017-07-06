import axios from 'axios'
import _ from 'lodash'
export const SAVE_CHAPTER = 'save_chapter'
export const LOAD_NOVEL = 'load_novelitem'
export const CHANGE_CHAPTER = 'change_chapter'
export const CREATE_CHAPTER = 'create_chapter'
export const LOAD_CHAPTER = 'load_chapter'
export const SELECT_CHAPTER = 'select_chapter'
export const TYPE_INPUT = 'type_input'
export const TYPE_TEXTAREA = 'type_textarea'
export const LOAD_NOVELLIST = 'load_novellist'
export const SELECT_NOVELLIST = 'select_novellist'
export const REMOTESUBMIT_READERCHAPTER = 'remotesubmit_readerchapter'
export const CLEARREMOTESUBMIT_READERCHAPTER = 'clearremotesubmit_readerchapter'
export const PUBLISH_CHAPTER = 'publish_chapter'
export const REMOTESUBMIT_TYPEIDENTIFY = 'remotesubmit_typeidentify'
export const CLEARREMOTESUBMIT_TYPEIDENTIFY = 'clearremotesubmit_typeidentify'
export const CHECK_NOVELTITLE = 'check_noveltitle'
export const UPDATENOVEL_FROMMODAL = 'updatenovel_frommodal'
// Mock up information
const novelList = {
  novels: [{
    novelId: 0,
    novelTitle: 'Example0'
  }, {
    novelId: 1,
    novelTitle: 'Example1'
  }, {
    novelId: 2,
    novelTitle: 'Example2'
  }, {
    novelId: 3,
    novelTitle: 'Example3'
  }, {
    novelId: 4,
    novelTitle: 'Example4'
  }
  ]
}

localStorage.setItem('novelList', JSON.stringify(novelList))

const novels = [
  {
    novelId: 0,
    chapterNumber: 0,
    novels: {
      novelTitle: '',
      abstract: '',
      tags: [],
      category: { main: '', sub: '' },
      publish: [],
      staticPublish: [],
      chapters: [{ name: 'ข้อมูลเบื้องต้นของเรื่องนี้', content: '' }, { name: 'name0', content: 'content0' }]
    }

  },
  {
    novelId: 1,
    chapterNumber: 0,
    novels: {
      novelTitle: '',
      abstract: '',
      tags: [],
      category: { main: '', sub: '' },
      publish: [],
      staticPublish: [],
      chapters: [{ name: 'ข้อมูลเบื้องต้นของเรื่องนี้', content: '' }, { name: 'name1', content: 'content1' }]
    }

  },
  {
    novelId: 2,
    chapterNumber: 0,
    novels: {
      novelTitle: '',
      abstract: '',
      tags: [],
      category: { main: '', sub: '' },
      publish: [],
      staticPublish: [],
      chapters: [{ name: 'ข้อมูลเบื้องต้นของเรื่องนี้', content: '' }, { name: 'name2', content: 'content2' }]
    }

  },
  {
    novelId: 3,
    chapterNumber: 0,
    novels: {
      novelTitle: '',
      abstract: '',
      tags: [],
      category: { main: '', sub: '' },
      publish: [],
      staticPublish: [],
      chapters: [{ name: 'ข้อมูลเบื้องต้นของเรื่องนี้', content: '' }, { name: 'name3', content: 'content3' }]
    }

  },
  {
    novelId: 4,
    chapterNumber: 0,
    novels: {
      novelTitle: '',
      abstract: '',
      tags: [],
      category: { main: '', sub: '' },
      publish: [],
      staticPublish: [],
      chapters: [{ name: 'ข้อมูลเบื้องต้นของเรื่องนี้', content: '' }, { name: 'name4', content: 'content4' }]
    }

  }
]

localStorage.setItem('novels', JSON.stringify(novels))

export function saveChapter (value) {
  const novels = JSON.parse(localStorage.getItem('novels'))
  const chapter = { name: value.name, content: value.content }
  const chapterIndex = value.index
  novels[value.novel].novels.chapters[value.index] = chapter
  novels[value.novel].chapterNumber = value.index
  var newPub = ''
  if (Object.values(novels[value.novel].novels.publish).indexOf(value.index) > -1) {
    const oldPub = novels[value.novel].novels.publish
    const index = oldPub.indexOf(chapterIndex)
    newPub = oldPub
    newPub.splice(index, 1)
    novels[value.novel].novels.publish = newPub
    localStorage.setItem('novels', JSON.stringify(novels))
  }

  localStorage.setItem('novels', JSON.stringify(novels))

  // validate status with server then tell users if saving success or fail
  alert('saved')
  const objectEdit =
    {
      value: value,
      newPub: newPub,
      index: value.index
    }
  return {
    type: SAVE_CHAPTER,
    payload: objectEdit
  }
  // }
}

export function createChapter (novelId) {
  const newChapter = { name: '', content: '' }

  const novels = JSON.parse(localStorage.getItem('novels'))
  novels[novelId].novels.chapters.push(newChapter)
  localStorage.setItem('novels', JSON.stringify(novels))

  return {
    type: CREATE_CHAPTER,
    payload: newChapter
  }
}

export function updateNovelFromModal (values) {

  //start backend mockup

  const novels = JSON.parse(localStorage.getItem('novels'))
  const novelId = values.novelId
  const category = values.category
  delete category['text']
  novels[novelId].novels.novelTitle = values.novelTitle
  novels[novelId].novels.abstract = values.abstract
  novels[novelId].novels.tags = values.tags
  novels[novelId].novels.category = category
  localStorage.setItem('novels', JSON.stringify(novels))

  //end backend mockup

  return {
    type: UPDATENOVEL_FROMMODAL,
    payload: values
  }
  
}

export function selectChapter (selectChapterId) {
  return {
    type: SELECT_CHAPTER,
    payload: selectChapterId
  }
}

export function loadNovel () {
  // load novels from db
  const novels = JSON.parse(localStorage.getItem('novels'))

  return {
    type: LOAD_NOVEL,
    payload: novels[0].novels
  }
}

export function loadNovelList () {
  // load novelList from db
  const novelList = JSON.parse(localStorage.getItem('novelList'))
  return {
    type: LOAD_NOVELLIST,
    payload: novelList
  }
}

export function selectNovelList (novelId, currentNovel) {
  // load novels from db
  const novels = JSON.parse(localStorage.getItem('novels'))

  const novelIdInt = parseInt(novelId)
  const novel = _.find(novels, { 'novelId': novelIdInt })

  const currentNovelId = currentNovel.novelId
  const originalNovel = _.find(novels, { 'novelId': currentNovelId })
  
  if (JSON.stringify(originalNovel.novels) === JSON.stringify(currentNovel.novels)) {

  } else {
    var confirmSave = confirm('คุณต้องการบันทึกสิ่งที่แก้ไขไปหรือไม่?')
    if (confirmSave) {
      novels[currentNovelId] = currentNovel

      localStorage.setItem('novels', JSON.stringify(novels))
    }
  }

  if (confirmSave) {
    // update currentNovel to DB
  } else {
    // do nothing
  }

  return {
    type: SELECT_NOVELLIST,
    payload: novel
  }
}
export function remoteSubmitReaderChapter () {
  return {
    type: REMOTESUBMIT_READERCHAPTER
  }
}

export function remoteSubmitTypeIdentify (type) {
  return {
    type: REMOTESUBMIT_TYPEIDENTIFY,
    payload: type
  }
}

export function clearRemoteSubmitTypeIdentify () {
  return {
    type: CLEARREMOTESUBMIT_TYPEIDENTIFY
  }
}

export function clearRemoteSubmitReaderChapter () {
  return {
    type: CLEARREMOTESUBMIT_READERCHAPTER
  }
}

export function publishChapter (novelId, chapterId) {
  const obj = { chapterId: chapterId, novelId: novelId }
  const novels = JSON.parse(localStorage.getItem('novels'))

  if (chapterId === 1 || chapterId === 0 ) {
    if (!(Object.values(novels[novelId].novels.publish).indexOf(chapterId) > -1)) {
      novels[novelId].novels.publish.push(chapterId)
      localStorage.setItem('novels', JSON.stringify(novels))
    }
    if (!(Object.values(novels[novelId].novels.staticPublish).indexOf(chapterId) > -1)) {
      novels[novelId].novels.staticPublish.push(chapterId)
      localStorage.setItem('novels', JSON.stringify(novels))
    }
  } else {
    if (!(Object.values(novels[novelId].novels.publish).indexOf(chapterId) > -1) && (Object.values(novels[novelId].novels.publish).indexOf(chapterId - 1) > -1)) {
      novels[novelId].novels.publish.push(chapterId)
      localStorage.setItem('novels', JSON.stringify(novels))
    }
    if (!(Object.values(novels[novelId].novels.staticPublish).indexOf(chapterId) > -1) && (Object.values(novels[novelId].novels.staticPublish).indexOf(chapterId - 1) > -1)) {
      novels[novelId].novels.staticPublish.push(chapterId)
      localStorage.setItem('novels', JSON.stringify(novels))
    } else {
      if ((Object.values(novels[novelId].novels.staticPublish).indexOf(chapterId) > -1)) {
        // already published
      } else {
        alert('Please publish previous chapter (start from chapter 1)')
      }
    }
  }

  return {
    type: PUBLISH_CHAPTER,
    payload: obj
  }
}

export function checkNovelTitle (Name) {
  // result = axios.get(api dek-d ) check with sv
  // the result should be available or unavailable
  var result = Math.random() < 0.5 ? 'available' : 'unavailable'
  return {
    type: CHECK_NOVELTITLE,
    payload: result
  }
}