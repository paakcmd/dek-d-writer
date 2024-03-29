import { connect } from 'react-redux'
import { hideAlert, clearPublish } from  '../actions/index'
import ShowAlert from '../components/show-alert'

function mapStateToProps (state, ownProps) {
  return {
    showalert: state.showalert
  }
}
export default connect(mapStateToProps, { hideAlert, clearPublish})(ShowAlert)
