import React, { Component } from 'react'
<<<<<<< HEAD
import Header from '../containers/Header'
import SideNav from '../containers/side-nav'
import SectionContent from '../containers/Section-content'
import ShowAlert from '../containers/ShowAlert'
=======
import Header from './header'
import SideNav from './side-nav/index'
import SectionContent from '../containers/section-content'
import Notification from './notification'
>>>>>>> daff4f2af6ee504c08241b92a788b461149a4217
import { connect } from 'react-redux'


export default class App extends Component {
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
        <Notification />
      </div>
    )
  }
}


