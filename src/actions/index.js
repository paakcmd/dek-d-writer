import axios from 'axios'
import _ from 'lodash'
export const SAVE_CHAPTER = 'save_chapter'
export const LOAD_NOVEL = 'load_novelitem'
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
export const OPENMODAL_SETTING = 'openmodal_setting'
export const CLEARMODAL_SETTING = 'clearmodal_setting'
export const SIDE_COLLAPSE = 'side_collapse'
export const FORM_HASBEENTOUCHED = 'form_hasbeentouched'
export const AUTO_SAVE = 'auto_save'
export const SAVE_CHAPTERNAME = 'save_chaptername'
export const CLEAR_PUBANDSUB = 'clear_pubandsub'
export const SET_PUBANDSUB = 'set_pubandsub'
export const CLEAR_NOTISAVE = 'clear_notisave'
export const CLEAR_PUBLISH = 'clear_publish'
export const PUBLISH_PREVIOUS_CHAPTER = 'publish_previous_chapter'
export const CLEAR_PUBLISH_PREVIOUS_CHAPTER = 'clear_publish_previous_chapter'
export const HIDE_ALERT = 'hide_alert'
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
    autoSave: 0,
    chapterNumber: 0,
    overAllLastUpdate: '',
    novels: {
      novelTitle: 'Example0',
      abstract: '',
      tags: [],
      category: { main: '', sub: '' },
      publish: [],
      staticPublish: [],
      css: '',
      chapters: [{ name: 'ข้อมูลเบื้องต้นของเรื่องนี้', content: '', chapterLastUpdate: '' }, { name: 'name0', content: 'content0', chapterLastUpdate: '' }]
    }

  },
  {
    novelId: 1,
    autoSave: 0,
    chapterNumber: 0,
    novels: {
      novelTitle: 'Example1',
      abstract: '',
      tags: [],
      category: { main: '', sub: '' },
      publish: [],
      staticPublish: [],
      css: '',
      chapters: [{ name: 'ข้อมูลเบื้องต้นของเรื่องนี้', content: '', chapterLastUpdate: '' }, { name: 'name1', content: 'content1', chapterLastUpdate: '' }]
    }

  },
  {
    novelId: 2,
    autoSave: 0,
    chapterNumber: 0,
    novels: {
      novelTitle: 'Example2',
      abstract: '',
      tags: [],
      category: { main: '', sub: '' },
      publish: [],
      staticPublish: [],
      css: '',
      chapters: [{ name: 'ข้อมูลเบื้องต้นของเรื่องนี้', content: '', chapterLastUpdate: '' }, { name: 'name2', content: 'content2', chapterLastUpdate: '' }]
    }

  },
  {
    novelId: 3,
    autoSave: 0,
    chapterNumber: 0,
    novels: {
      novelTitle: 'Example3',
      abstract: '',
      tags: [],
      category: { main: '', sub: '' },
      publish: [],
      staticPublish: [],
      css: '',
      chapters: [{ name: 'ข้อมูลเบื้องต้นของเรื่องนี้', content: '', chapterLastUpdate: '' }, { name: 'name3', content: 'content3', chapterLastUpdate: '' }]
    }

  },
  {
    novelId: 4,
    autoSave: 0,
    chapterNumber: 0,
    novels: {
      novelTitle: 'Example4',
      abstract: '',
      tags: [],
      category: { main: '', sub: '' },
      publish: [],
      staticPublish: [],
      css: '',
      chapters: [{ name: 'ข้อมูลเบื้องต้นของเรื่องนี้', content: '', chapterLastUpdate: '' }, { name: 'name4', content: 'content4', chapterLastUpdate: '' }]
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
  novels[value.novel].codearea = value.codearea
  if (novels[value.novel].novels.staticPublish.length === 0 && value.codearea !== '') {
    alert('โปรด Publish ก่อนใส่ CSS ')
    return ''
  }

  var newPub = ''
  // check if publish here
  if (Object.values(novels[value.novel].novels.publish).indexOf(value.index) > -1) {
    const oldPub = novels[value.novel].novels.publish
    const index = oldPub.indexOf(chapterIndex)

    newPub = oldPub
    newPub.splice(index, 1)
    novels[value.novel].novels.publish = newPub
  }

  localStorage.setItem('novels', JSON.stringify(novels))
  // return updated timestamp for each novel

  // validate status with server then tell users if saving success or fail
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
  const newChapter = { name: '', content: '', chapterLastUpdate: '' }

  const novels = JSON.parse(localStorage.getItem('novels'))
  novels[novelId].novels.chapters.push(newChapter)
  localStorage.setItem('novels', JSON.stringify(novels))

  return {
    type: CREATE_CHAPTER,
    payload: newChapter
  }
}

export function updateNovelFromModal (values) {
  // start backend mockup

  const novels = JSON.parse(localStorage.getItem('novels'))
  const novelId = values.novelId
  const category = values.category
  delete category['text']
  novels[novelId].novels.novelTitle = values.novelTitle
  novels[novelId].novels.abstract = values.abstract
  novels[novelId].novels.tags = values.tags
  novels[novelId].novels.category = category
  localStorage.setItem('novels', JSON.stringify(novels))

  // end backend mockup

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
  // load novelList from db  not a transformed version like this prototype
  // const novelList = JSON.parse(localStorage.getItem('novelList'))
  const novels = JSON.parse(localStorage.getItem('novels'))
  const preNovelList = novels.map(novel => { return { "novelId": novel.novelId, novelTitle: novel.novels.novelTitle  } })
  const novelList = { novels: preNovelList }


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
  if (chapterId === 1 || chapterId === 0) {
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
        // need to publish previous chapter
      } else {
        return {
          type: PUBLISH_PREVIOUS_CHAPTER
        }
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

export function openModalSetting () {
  return {
    type: OPENMODAL_SETTING
  }
}

export function clearModalSetting () {
  return {
    type: CLEARMODAL_SETTING
  }
}

export function sideCollapse () {
  return {
    type: SIDE_COLLAPSE
  }
}

export function formHasBeenTouched () {
  return {
    type: FORM_HASBEENTOUCHED
  }
}

export function autoSave () {
  return {
    type: AUTO_SAVE
  }
}

export function setPubandSub () {
  return {
    type: SET_PUBANDSUB
  }
}
export function clearPubandSub () {
  return {
    type: CLEAR_PUBANDSUB
  }
}

export function clearNotiSave () {
  return {
    type: CLEAR_NOTISAVE
  }
}

export function clearPublish () {
  return {
    type: CLEAR_PUBLISH
  }
}

export function clearPublishPreviousChapter () {
  return {
    type: CLEAR_PUBLISH_PREVIOUS_CHAPTER
  }
}
export function hideAlert () {
  return {
    type: HIDE_ALERT
  }
}
