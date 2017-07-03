import React, { Component } from 'react';
import Header from './header';
import SideNav from './side-nav/index';
import SectionContent from '../containers/section-content';
export default class App extends Component {
  render() {
    return (
      <div className="">
        <SideNav/>
        <Header/>
        <SectionContent/>
      </div>
    );
  }
}
