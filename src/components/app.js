import React, { Component } from 'react'
import Header from './header'
import SideNav from './side-nav/index'
import SectionContent from '../containers/section-content'
import { connect } from 'react-redux'
import { clearPublishPreviousChapter, clearPublish, clearNotiSave } from '../actions/index'
class App extends Component {
  constructor () {
    super()

    this.state = {
      state: 'loading',
      type: 'warning',
      message: '',
      display: 'show/hide',
      displayPublish: 'show/hide',
      displayPublishPrevious: 'show/hide'
    }
  }
  componentDidUpdate (prevProps) {
    console.log(prevProps)
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
    const pageWrapperClassName = `${this.props.sideCollapse.sideCollapse === 0 ? 'page-wrapper' : 'page-wrapper -side-collapse'}`
    const typeOfAlert = `${this.state.type === 'normal' ? 'alert-result-info' : 'alert-result-success'}`
    const showAlert = `${this.state.display === 'show' ? 'show-alert' : ''}`
    const alert = `${this.state.display === 'show' ? typeOfAlert + ' alert-template-mini ' + showAlert : 'alert-template-mini alert-result-info'}`
    const publishAlert = `${this.state.displayPublish === 'show' ? 'alert-template alert-result-redirect alert-result-success displayBlock' : 'alert-template alert-result-redirect alert-result-success'}`

    return (
      <div>
        <div className={pageWrapperClassName}>
          <SideNav />
          <Header />
          <div className="mockupToolBar"><img src="Screen Shot 2560-07-14 at 3.54.40 PM.png"/></div>
          <SectionContent />
        </div>
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
    sideCollapse: state.sideCollapse,
    notification: state.notification
  }
}
export default connect(mapStateToProps, { clearPublishPreviousChapter, clearPublish, clearNotiSave })(App)
