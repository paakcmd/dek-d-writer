import React, { Component } from 'react'
import { connect } from 'react-redux'
import SectionHeaderBar from '../components/section-header-bar'
import SectionReaderChapter from '../components/section-reader-chapter'
import SectionReaderBottomChapter from '../components/section-reader-bottom-chapter'
import SectionReaderBottombar from '../components/section-reader-bottombar'
import SectionHeaderBarBottom from '../components/section-header-bar-bottom'

class SectionContent extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const abstractOrChapterClassName1 = `${this.props.readerChapterProps.chapterNumber === 0 ? 'displayBlock' : 'displayNone'}`
    const abstractOrChapterClassName2 = `${this.props.readerChapterProps.chapterNumber === 0 ? 'displayNone' : 'displayBlock'}`
    return (
        <div>
          {/* <AutoSaveBtn/> */}
          <div className='main-container-wrapper'>
            <div className='main-container'>
              <div className='section-content'>

                <div className='section-reader'>
                  <SectionHeaderBar />
                  <SectionReaderChapter />
                  <SectionReaderBottomChapter cName={abstractOrChapterClassName2} />
                  <SectionReaderBottombar cName={abstractOrChapterClassName1} />
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
