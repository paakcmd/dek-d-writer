import React, { Component } from 'react'
import Header from '../containers/Header'
import SideNav from '../containers/side-nav'
import SectionContent from '../containers/Section-content'
import ShowAlert from '../containers/show-alert'

export default class App extends Component {

  render () {
    const pageWrapperClassName = `${this.props.sideCollapse.sideCollapse === 0 ? 'page-wrapper' : 'page-wrapper -side-collapse'}`

    return (
      <div>
        <div id="page-wrapper" className={pageWrapperClassName}>
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
