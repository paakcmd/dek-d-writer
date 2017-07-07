import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import { remoteSubmitReaderChapter, publishChapter, remoteSubmitTypeIdentify } from '../actions/index'
import { bindActionCreators } from 'redux'

class Header extends Component {
  componentWillUpdate (nextProps) {
    
  }
  render () {
    
    const novel = this.props.readerChapterProps
    const headerWrapperClassName = `${Object.values(novel.novels.publish).indexOf(novel.chapterNumber ) > -1 ?' state-published':'state-draft'}`
    const headerInsideClassName = `${Object.values(novel.novels.staticPublish).indexOf(novel.chapterNumber ) > -1 ?'btn-action-wrapper float-right is-public':'btn-action-wrapper float-right '}`
    const headerTitleClassName = `${Object.values(novel.novels.publish).indexOf(novel.chapterNumber ) > -1 ?' current-chapter-header chapter-state txt-ellipsis state-published':'current-chapter-header chapter-state txt-ellipsis state-draft'}`
    return (
      <div>
        <div id='story-editor-toolbar' className={headerWrapperClassName}>
          <div className={headerInsideClassName}>
           
            <a className="btn-action-view btn-action btn-raised btn-orange-theme" target="_blank" title="เปิดหน้าอ่านนิยาย" href="https://writer.dek-d.com/dek-d/writer/viewlongc.php?id=1662736&amp;chapter=3"><i className="fa fa-eye"></i></a>
            <button type='button' onClick={() => { this.props.dispatch(submit('readerChapter')); this.props.remoteSubmitReaderChapter()   }} className='btn-action-save btn-action btn-raised btn-orange-theme' title='บันทึกเป็น Draft ไว้ (Ctrl+S)'><i className='fa fa-save' /> บันทึกแบบร่าง</button>
            <button type='button' onClick={() => { this.props.publishChapter(novel.novelId, novel.chapterNumber) }} className='btn-action-publish btn-action btn-raised btn-orange-theme'><i className='fa fa-globe' /> บันทึกและเผยแพร่</button>
            
            <div className='action-autosave-wrapper'>
              <span className='label-txt' title='บันทึกอัตโนมัติ ทุกๆ 2 นาที'>บันทึกอัตโนมัติ : </span>
              <label className='switch switch-green autosave-toggle-switch' title='เปิด/ปิด การบันทึกอัตโนมัติ'>
                <input type='checkbox' className='switch-input js-autosave-story' checked='' />
                <span className='switch-label' data-on='เปิด' data-off='ปิด' />
                <span className='switch-handle' />
              </label>
            </div>
          </div>
          <div className={headerTitleClassName} title='ข้อมูลเบื้องต้นของเรื่องนี้'>{this.props.readerChapterProps.novels.chapters[this.props.readerChapterProps.chapterNumber].name}</div>
        </div>

      </div>
    )
  }
}
function mapStateToProps (state, ownProps) {
  return {
    readerChapterProps: state.readerChapter,
    remoteSubmit: state.remoteSubmit,
    publish: state.publish

  }
}

function mapDispatchToProps (dispatch) {
  return {
    publishChapter: bindActionCreators(publishChapter, dispatch),
    remoteSubmitReaderChapter: bindActionCreators(remoteSubmitReaderChapter, dispatch),
    remoteSubmitTypeIdentify: bindActionCreators(remoteSubmitTypeIdentify, dispatch),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
