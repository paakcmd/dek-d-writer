import React, { Component } from 'react'
import Header from './header'
import SideNav from './side-nav/index'
import SectionContent from '../containers/section-content'
import { connect } from 'react-redux'
import { clearNotiSave } from '../actions/index'
class App extends Component {
  constructor () {
    super()

    this.state = {
      state: 'loading',
      type: 'warning',
      message: '',
      display: 'show/hide'
    }

  }
  componentDidUpdate (prevProps) {
    console.log(prevProps)
    if ( prevProps.notification.autoSave === 0 && this.props.notification.autoSave === 1 ){
      this.setState({ type: 'success', message: 'เปิดการบันทึกอัตโนมัติ', display: 'show' })
      setTimeout(() => { this.setState({display:'hide'});}, 5000)
    }
    if ( prevProps.notification.autoSave === 1 && this.props.notification.autoSave === 0 ){
      this.setState({ type: 'normal', message: 'ปิดการบันทึกอัตโนมัติ', display: 'show' })
      setTimeout(() => { this.setState({display:'hide'});}, 5000)
    } 
    if( prevProps.notification.saved === 0 && this.props.notification.saved === 1) {
      this.setState({type: 'success', message: 'บันทึกเรียบร้อยแล้ว', display:'show' })
      setTimeout(() => { this.setState({display:'hide'}); this.props.clearNotiSave()}, 5000)
      
    }
    
  }
  render () {
    
    const pageWrapperClassName = `${this.props.sideCollapse.sideCollapse === 0 ? 'page-wrapper' : 'page-wrapper -side-collapse'}`
    const typeOfAlert = `${this.state.type === 'normal' ? 'alert-result-info' : 'alert-result-success'}`
    const showAlert = `${this.state.display === 'show' ? 'show-alert' : ''}`
    const alert = `${this.state.display === 'show' ? typeOfAlert + ' alert-template-mini ' + showAlert : 'alert-template-mini alert-result-info'}`

    return (
      <div>
        <div className={pageWrapperClassName}>
          <SideNav />
          <Header />
          <SectionContent />
        </div>
        <div className={alert}>
          <button type="button" className="close" style={{display: 'none'}}>×</button>
          <div className="alert-content">{this.state.message}</div>
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
export default connect(mapStateToProps, { clearNotiSave })(App)
