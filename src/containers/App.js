import { connect } from 'react-redux'
import App from '../components/app'
function mapStateToProps (state, ownProps) {
  return {
    sideCollapse: state.sideCollapse
  }
}
export default connect(mapStateToProps)(App)
