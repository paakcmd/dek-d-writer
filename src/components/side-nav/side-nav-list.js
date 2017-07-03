import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createChapter, loadNovel, selectChapter } from '../../actions/index'

class SideNavList extends Component {
  componentWillMount () {
    this.props.loadNovel()
  }

  render () {
    if (!this.props.readerChapterProps) {
      return <div>loading...</div>
    }

    const { novels } = this.props.readerChapterProps
    
    
    const { chapters } = novels
    return (

      <div className='chapter-li-wrapper'><div className='chapter-li-section section-mainpage'><div id='chapter-0' className='chapter-wrapper' data-chapter='0'><a className='chapter-item chapter-state content-mainpage list-chapter-0 active state-draft' data-chapter_state='published' title=''><span className='chapter-name'>ข้อมูลเบื้องต้นของเรื่องนี้</span><span className='link-chapter' title='เปิดหน้าอ่านนิยาย'><i className='fa fa-eye' /></span></a></div></div>
        <div className='chapter-li-section all-chapter-header'>
          <a className='btn-add-chapter' onClick={() => this.props.createChapter(this.props.readerChapterProps.novelId)}>+ เพิ่มตอน</a>
          <div className='chapter-count'>ตอนทั้งหมด <span className='badge'>{chapters.length}</span></div>
        </div>
        <div className='chapter-li-section section-all-chapter'>
          <div className='tiny-scroll-wrapper '>
            <div className='scrollbar disable height405'><div className='track height405' >
              <div className='thumb top0 height50' >
                <div className='end' />
              </div>
            </div>
            </div>
            <div className='viewport height405'>
              <div className='js-tinyscroll overview top0' >
                {chapters.length > 0

                            ? chapters.map((chapter, index) => {
                              
                              const wrapperChapterListClassName = `${Object.values(novels.publish).indexOf(index) > -1?'is-public chapter-wrapper':'chapter-wrapper'}`
                              const chapterListClassNam = `${Object.values(novels.publish).indexOf(index) > -1? 'chapter-item chapter-state content-mainpage state-published':'chapter-item chapter-state content-mainpage state-draft'}`

                              return (
                                <div key={index} onClick={() => this.props.selectChapter(index)}id='chapter-1' className={wrapperChapterListClassName}  data-chapter='1'>
                                  <a className={chapterListClassNam}  title='ตอนที่ยังไม่ได้ตั้งชื่อ'>
                                    <span className='chapter-name'>#{index + 1} | {chapter.name.length > 0 ? chapter.name : 'ตอนที่ยังไม่ได้ตั้งชื่อ'}</span>
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
  return { readerChapterProps: state.readerChapter }
}
export default connect(mapStateToProps, { createChapter, loadNovel, selectChapter })(SideNavList)
