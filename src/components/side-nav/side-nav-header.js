import React, { Component } from 'react'
import { loadNovelList, selectNovelList } from '../../actions/index'
import { connect } from 'react-redux'
import _ from 'lodash'

class SideNavHeader extends Component {
  constructor (props) {
    super(props)
    this.state = { selectedValue: this.props.novelList.novels[0].novelId }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ selectedValue: event.target.value })
    this.props.selectNovelList(event.target.value, this.props.currentNovel)
  }

  componentWillMount () {
    this.props.loadNovelList()
  }

  renderOption () {
    return _.map(this.props.novelList.novels, novel => {
      return (
        <option key={novel.novelId} value={novel.novelId}>{novel.novelTitle}</option>
      )
    })
  }
  
  render () {
    
    return (
      <div className='side-nav-header'>
        <a className='logo float-left' href='https://my.dek-d.com/dekdee/control/writer3/story-editor.php?story_id=d-423793&amp;chapter=-1'>
          <img src='https://www0.dek-d.com/assets/toolbar/images/mobile_logo_2x.png' />
        </a>
        <a className='btn-goback float-right' href='https://my.dek-d.com/dekdee/control/writer3/?p=story_manage&amp;story_id=d-423793'><i className='fa fa-arrow-left' /> หน้าจัดการบทความ</a>
        <div className='clear-float' />
        <select className='story-select' value={this.state.selectedValue} onChange={this.handleChange}>
          {this.renderOption()}
        </select>
      </div>
    )
  }
}

function mapStateToProps ({ novelList, readerChapter }, ownProps) {
  return {
    novelList: novelList,
    currentNovel: readerChapter
  }
}
export default connect(mapStateToProps, { loadNovelList, selectNovelList })(SideNavHeader)
