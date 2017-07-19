import React, { Component } from 'react'
import { connect } from 'react-redux'
import SectionHeaderBar from '../components/section-header-bar'
import SectionReaderChapter from '../components/section-reader-chapter'

import SectionReaderBottombar from '../components/section-reader-bottombar'
import SectionHeaderBarBottom from '../components/section-header-bar-bottom'

class SectionContent extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const abstractOrChapterClassName1 = `${this.props.readerChapterProps.chapterNumber === 0 ? 'displayBlock' : 'displayNone'}`
    
    const chapters = this.props.readerChapterProps.novels.chapters
    return (
        <div>
          <div className='main-container-wrapper'>
            <div className='main-container'>
              <div className='section-content'>

                <div className='section-reader'>
                  <SectionHeaderBar />
                  <SectionReaderChapter />
                  <SectionReaderBottombar cName={abstractOrChapterClassName1} chapters={chapters} />
                  <SectionHeaderBarBottom />
                </div>

              </div>
            </div>
          </div>
        </div>
      )
  }
}
function mapStateToProps (state, ownProps) {
  return {
    readerChapterProps: state.readerChapter
  }
}

export default connect(mapStateToProps)(SectionContent)
