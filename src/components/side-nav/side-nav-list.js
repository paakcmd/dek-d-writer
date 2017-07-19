import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createChapter, loadNovel, selectChapter, remoteSubmitReaderChapter } from '../../actions/index'
import { submit } from 'redux-form'
import { bindActionCreators } from 'redux'

class SideNavList extends Component {
  componentWillMount () {
    this.props.loadNovel()
  }
  ComponentWillUpdate (nextProps) {
  }
  onSelectChapter (index) {
    if (this.props.formHasbeenTouched.touched === 1) {
      var r = confirm('คุณต้องการบันทึกสิ่งที่แก้ไขไปหรือไม่')
      if (r) {
        this.props.dispatch(submit('readerChapter'))
        this.props.remoteSubmitReaderChapter()
      }
    }
    this.props.selectChapter(index)
  }
  render () {
    if (!this.props.readerChapterProps) {
      return <div>loading...</div>
    }

    const { novels } = this.props.readerChapterProps
    const { chapters } = novels

    const introNovelWrapperClassName = `${novels.staticPublish.length > 0 ? 'is-public chapter-wrapper' : 'chapter-wrapper'}`
    var introNovelClassName = `${novels.staticPublish.length > 0 ? 'chapter-item chapter-state content-mainpage list-chapter-0 state-published' : 'chapter-item chapter-state content-mainpage list-chapter-0  state-draft'}`
    if(this.props.readerChapterProps.chapterNumber === 0){
      introNovelClassName = `${introNovelClassName} active`
    }
    return (

      <div className='chapter-li-wrapper'>
        <div className='chapter-li-section section-mainpage'>
          <div onClick={() => this.onSelectChapter(0)} id='chapter-0' className={introNovelWrapperClassName} data-chapter='0'>
            <a className={introNovelClassName} data-chapter_state='published' title=''>
              <span className='chapter-name'>ข้อมูลเบื้องต้นของเรื่องนี้</span><span className='link-chapter' title='เปิดหน้าอ่านนิยาย'>
                <i className='fa fa-eye' />
              </span>
            </a>
          </div>
        </div>
        <div className='chapter-li-section all-chapter-header'>
          <a className='btn-add-chapter' onClick={() => { this.props.createChapter(this.props.readerChapterProps.novelId); this.props.selectChapter(this.props.readerChapterProps.novels.chapters.length)} }>+ เพิ่มตอน</a>
          <div className='chapter-count'>ตอนทั้งหมด <span className='badge'>{chapters.length -1 }</span></div>
        </div>
        <div className='chapter-li-section section-all-chapter'>
          <div className='tiny-scroll-wrapper '>
            <div className='scrollbar disable' style={{height:405}}><div style={{height:405}} className='track' >
              <div style={{height:50, top:0}} className='thumb' >
                <div className='end' />
              </div>
            </div>
            </div>
            <div style={{height:405}} className='viewport'>
              <div style={{top:0}} className='js-tinyscroll overview' >
                {chapters.length > 0

                            ? chapters.map((chapter, index) => {
                              const wrapperChapterListClassName = `${Object.values(novels.publish).indexOf(index) > -1 ? 'is-public chapter-wrapper' : 'chapter-wrapper'}`
                              var chapterListClassName = `${Object.values(novels.publish).indexOf(index) > -1 ? 'chapter-item chapter-state content-mainpage state-published' : 'chapter-item chapter-state content-mainpage state-draft'}`

                              if(this.props.readerChapterProps.chapterNumber === index){
                                chapterListClassName = `${chapterListClassName} active`
                              }
                              if (index === 0) {
                                return ''
                              }
                              return (
                                <div key={index} onClick={() => this.onSelectChapter(index)} id='chapter-1' className={wrapperChapterListClassName} data-chapter='1'>
                                  <a className={chapterListClassName} title='ตอนที่ยังไม่ได้ตั้งชื่อ'>
                                    <span className='chapter-name'>#{index } | {chapter.name.length > 0 ? chapter.name : 'ตอนที่ยังไม่ได้ตั้งชื่อ'}</span>
                                    <span className='link-chapter' title='เปิดหน้าอ่านนิยาย'>
                                      <i className='fa fa-eye' />
                                    </span>
                                  </a>
                                </div>
                              )
                            }) : null
                          }

              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

function mapStateToProps (state) {
  return {
    readerChapterProps: state.readerChapter,
    formHasbeenTouched: state.formHasbeenTouched
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createChapter: bindActionCreators(createChapter, dispatch),
    loadNovel: bindActionCreators(loadNovel, dispatch),
    selectChapter: bindActionCreators(selectChapter, dispatch),
    remoteSubmitReaderChapter: bindActionCreators(remoteSubmitReaderChapter, dispatch),
    dispatch
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SideNavList)
