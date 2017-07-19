import React,{ Component } from 'react'
import SideNavHeader from '../../containers/side-nav/Side-nav-header'
import SideNavList from '../../containers/side-nav/Side-nav-list'


export default class SideNav extends Component {
  render(){
    return(
      <div id="side-nav" >
        <div id="side-nav-toggle" onClick={ ()=> { this.props.sideCollapse() }}  title="ซ่อน/เปิดแถบด้านข้าง">
          <i className="fa fa-list-ol"></i>
        </div>
        <SideNavHeader />
        <SideNavList/>
      </div>      
    )
  }
}

