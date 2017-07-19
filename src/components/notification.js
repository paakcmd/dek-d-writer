import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearPublishPreviousChapter, clearPublish, clearNotiSave } from '../actions/index'
class Notification extends Component {
  constructor () {
    super()
    this.state = {
      type: 'warning',
      message: '',
      display: 'show/hide',
      displayPublish: 'show/hide',
      displayPublishPrevious: 'show/hide'
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.notification.autoSave === 0 && this.props.notification.autoSave === 1) {
      this.setState({ type: 'success', message: 'เปิดการบันทึกอัตโนมัติ', display: 'show' })
      setTimeout(() => { this.setState({ display: 'hide' })}, 3000)
    }
    if (prevProps.notification.autoSave === 1 && this.props.notification.autoSave === 0) {
      this.setState({ type: 'normal', message: 'ปิดการบันทึกอัตโนมัติ', display: 'show' })
      setTimeout(() => { this.setState({ display: 'hide' })}, 3000)
    }
    if (prevProps.notification.saved === 0 && this.props.notification.saved === 1) {
      this.setState({ type: 'success', message: 'บันทึกเรียบร้อยแล้ว', display: 'show' })
      setTimeout(() => { this.setState({ display: 'hide' }); this.props.clearNotiSave() }, 3000)
    }
    if (prevProps.notification.published === 0 && this.props.notification.published === 1) {
      this.setState({displayPublish: 'show'})
      this.setState({ display: 'hide' })
      setTimeout(() => { this.setState({displayPublish: 'hide'}); this.props.clearPublish() }, 3000)
    }
    if (prevProps.notification.publishPrevious === 0 && this.props.notification.publishPrevious === 1) {
      this.setState({display: 'show', type: 'normal', message: 'บันทึกแล้ว แต่ไม่สามารถ Publish ได้เพราะตอนก่อนหน้ายังไม่ได้ Publish'})
      setTimeout(() => { this.setState({ display: 'hide' }); this.props.clearPublishPreviousChapter() }, 3000)
    }
  }

  render () {
    let publishALertCss = 'alert-template alert-result-redirect alert-result-success'
    const typeOfAlert = `${this.state.type === 'normal' ? 'alert-result-info' : 'alert-result-success'}`
    const showAlert = `${this.state.display === 'show' ? 'show-alert' : ''}`
    const alert = `${this.state.display === 'show' ? typeOfAlert + ' alert-template-mini ' + showAlert : ''}`
    const publishAlert = `${this.state.displayPublish === 'show' ? publishALertCss + ' displayBlock' : publishALertCss}`
    console.log(publishAlert)

    return (
      <div>
        <div className={alert}>
          <button type='button' className='close' style={{ display: 'none' }}>×</button>
          <div className='alert-content'>{this.state.message}</div>
        </div>
        <div className={publishAlert} >
          <div className='process-progress' style={{ width: '100%' }} />
          <button onClick={()=>{this.setState({displayPublish: 'hide'})}} type='button' className='close'>×</button>
          <div className='no-support no-content alert-content'>
            <div className='image-icon'>
              <div className='bombom-txt'>ต้องตั้งชื่อเรื่องก่อนนะคับ</div>
            </div>
            <div className='loading-txt'>
              <div className='label-txt'>Publish สำเร็จ!!</div>
              <div className='publishing-chapter-name'>คำนำนักเขียน -คุยกันก่อนอ่านเนอะ-</div>
            </div>
            <button className='btn-action btn-raised btn-orange-theme'>เปิดหน้าอ่านนิยาย</button>
            <div id='captcha-wrapper' /></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    notification: state.notification
  }
}
export default connect(mapStateToProps, { clearPublishPreviousChapter, clearPublish, clearNotiSave })(Notification)
