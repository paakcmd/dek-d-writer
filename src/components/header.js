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
    return (
      <div>

        <div id='story-editor-toolbar' className='state-draft'>
          <div className='btn-action-wrapper float-right'>
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
          <div className='current-chapter-header chapter-state txt-ellipsis state-draft' title='ข้อมูลเบื้องต้นของเรื่องนี้'>ข้อมูลเบื้องต้นของเรื่องนี้</div>
        </div>

      </div>
    )
  }
}
function mapStateToProps (state, ownProps) {
  return {
    readerChapterProps: state.readerChapter,
    remoteSubmit: state.remoteSubmit

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
