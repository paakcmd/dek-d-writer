import React,{ Component } from 'react';
import SideNavHeader from './side-nav-header';
import SideNavList from './side-nav-list';
import { connect } from 'react-redux'

class SideNav extends Component {
  render(){
    return(

      <div id="side-nav" >

        <div id="side-nav-toggle"  title="ซ่อน/เปิดแถบด้านข้าง">
          <i className="fa fa-list-ol"></i>
        </div>
        <SideNavHeader />
        <SideNavList/>
      </div>
      
    )
  }
}
export default connect()(SideNav)
