import React, { Component } from 'react'
import { submit } from 'redux-form'
import Modal from 'react-modal'
import SwitchButton from 'react-switch-button'
import AgreementModal from './agreement-modal'

export default class Header extends Component {
  constructor () {
    super()

    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this)

    this.closeModal = this.closeModal.bind(this)
  }
  componentDidUpdate (prevProps) {
    if (prevProps.readerChapterProps.autoSave === 0 && this.props.readerChapterProps.autoSave === 1) {
      window.interval = setInterval(()=> { this.props.dispatch(submit('readerChapter')) }, 5000)
    }
    if (prevProps.readerChapterProps.autoSave === 1 && this.props.readerChapterProps.autoSave === 0) {
      clearInterval(window.interval)
    }
  }
  componentWillUpdate(nextProps) {
    if (this.props.remoteSubmit.publishandsubmit === 0 && nextProps.remoteSubmit.publishandsubmit === 1){
      this.props.dispatch(submit('readerChapter'))
      this.props.remoteSubmitReaderChapter()
    }
    if ( nextProps.readerChapterProps.saveDone === 1 && this.props.remoteSubmit.publishandsubmit === 1){
      this.props.publishChapter(this.props.readerChapterProps.novelId, this.props.readerChapterProps.chapterNumber)
    }
  }
  openModal () {
    this.setState({ modalIsOpen: true })
  }
  onAutoSave () {
    this.props.autoSave()
  }
  closeModal () {
    this.setState({ modalIsOpen: false })
  }
  allowPublish (novelId, chapterNumber) {
    this.props.setPubandSub()
    this.closeModal()
  }
  onPublish (novelId, chapterNumber) {

    if (this.props.readerChapterProps.novels.staticPublish.length > 0) {
      this.props.setPubandSub()

    } else {
      this.openModal()
    }
  }
  render () {
    const novel = this.props.readerChapterProps
    const headerWrapperClassName = `${Object.values(novel.novels.publish).indexOf(novel.chapterNumber) > -1 ? ' state-published' : 'state-draft'}`
    const headerInsideClassName = `${Object.values(novel.novels.staticPublish).indexOf(novel.chapterNumber) > -1 ? 'btn-action-wrapper float-right is-public' : 'btn-action-wrapper float-right '}`
    const headerTitleClassName = `${Object.values(novel.novels.publish).indexOf(novel.chapterNumber) > -1 ? ' current-chapter-header chapter-state txt-ellipsis state-published' : 'current-chapter-header chapter-state txt-ellipsis state-draft'}`
    const modalStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        width: '50%',
        height: '70%',
        background: 'none',
        border: 'none'
      }
    }

    return (

      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={modalStyles}
          contentLabel="Modal"
        >
          
          <AgreementModal closeModal={this.closeModal} allowPublish={this.allowPublish}/>
        </Modal>
        <div id='story-editor-toolbar' className={headerWrapperClassName}>
          <div className={headerInsideClassName}>

            <a className='btn-action-view btn-action btn-raised btn-orange-theme' target='_blank' title='เปิดหน้าอ่านนิยาย' href='https://writer.dek-d.com/dek-d/writer/viewlongc.php?id=1662736&amp;chapter=3'><i className='fa fa-eye' /></a>
            <button type='button' onClick={() => { this.props.dispatch(submit('readerChapter')); this.props.remoteSubmitReaderChapter() }} className='btn-action-save btn-action btn-raised btn-orange-theme' title='บันทึกเป็น Draft ไว้ (Ctrl+S)'><i className='fa fa-save' /> บันทึกแบบร่าง</button>
            <button type='button' onClick={() => { this.onPublish(novel.novelId, novel.chapterNumber) }} className='btn-action-publish btn-action btn-raised btn-orange-theme'><i className='fa fa-globe' /> บันทึกและเผยแพร่</button>

            <div className='action-autosave-wrapper'>
              <SwitchButton onChange={() => this.onAutoSave()} className='switch-green' name='switch-3' label='บันทึกอัตโนมัติ :' defaultChecked={false} />

            </div>

          </div>
          <div className={headerTitleClassName} title='ข้อมูลเบื้องต้นของเรื่องนี้'>{this.props.readerChapterProps.novels.chapters[this.props.readerChapterProps.chapterNumber].name ? this.props.readerChapterProps.novels.chapters[this.props.readerChapterProps.chapterNumber].name : 'ตอนที่ยังไม่ได้ตั้งชื่อ'}</div>
        </div>

      </div>
    )
  }
}
