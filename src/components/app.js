import React, { Component } from 'react'
import Header from './header'
import SideNav from './side-nav/index'
import SectionContent from '../containers/section-content'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    const pageWrapperClassName = `${this.props.sideCollapse.sideCollapse === 0 ? 'page-wrapper' : 'page-wrapper -side-collapse'}`
    return (
      <div className={pageWrapperClassName}>
        <SideNav />
        <Header />
        <SectionContent />
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
