import React, { Component } from 'react';
import { connect } from 'react-redux'
import { hideAlert, clearPublish } from  '../actions/index'
class ShowAlert extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const { showalert } = this.props
    const { typeOfAlert, show, message, published, alertDuration } = showalert
    let type = ` alert-result-${typeOfAlert} `
    const showAlert = `${show ? 'show-alert': ''}`
    if(showAlert === 'show-alert'){
      setTimeout(() => { this.props.hideAlert() }, alertDuration);
    }


    if(!published){

      return(
        <div className={' alert-template-mini ' + type + showAlert}>
    			<button type="button" className="close" style={{display:'block'}}>×</button>
    			<div className="alert-content">{message}</div>
  		  </div>
      )
    } else {
      setTimeout(() => { this.props.clearPublish() }, alertDuration);
      return (
        <div className="alert-template alert-result-redirect alert-result-success" style={{display:'block'}}>
        	<div className="process-progress" style={{width:'100%'}}></div>
        	<button type="button" onClick={()=>this.props.clearPublish()} className="close">×</button>
        	<div className="no-support no-content alert-content">
        		<div className="image-icon">
        			<div className="bombom-txt">ต้องตั้งชื่อเรื่องก่อนนะคับ</div>
        		</div>
        		<div className="loading-txt">
        			<div className="label-txt">Publish สำเร็จ!!</div>
        			<div className="publishing-chapter-name">คำนำนักเขียน -คุยกันก่อนอ่านเนอะ-</div>
        		</div>
        		<button className="btn-action btn-raised btn-orange-theme">เปิดหน้าอ่านนิยาย</button>
        		<div id="captcha-wrapper"></div>
        	</div>
        </div>
      )
    }
  }
}

function mapStateToProps (state, ownProps) {
  return {
    showalert: state.showalert
  }
}
export default connect(mapStateToProps, { hideAlert, clearPublish})(ShowAlert)
