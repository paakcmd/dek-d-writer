import React, { Component } from 'react'
import Header from './header'
import SideNav from './side-nav/index'
import SectionContent from '../containers/section-content'
import ShowAlert from './showAlert'
import { connect } from 'react-redux'
class App extends Component {

  render () {
    const pageWrapperClassName = `${this.props.sideCollapse.sideCollapse === 0 ? 'page-wrapper' : 'page-wrapper -side-collapse'}`

    return (
      <div>
        <div className={pageWrapperClassName}>
          <SideNav />
          <Header />
          <div className="mockupToolBar"><img src="Screen Shot 2560-07-14 at 3.54.40 PM.png"/></div>
          <SectionContent />
        </div>
        <ShowAlert />
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    sideCollapse: state.sideCollapse
  }
}
export default connect(mapStateToProps)(App)
