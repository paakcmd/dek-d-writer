import { connect } from 'react-redux'
import { sideCollapse } from '../../actions/index'
import SideNav from '../../components/side-nav/index'

export default connect(null, { sideCollapse })(SideNav)
