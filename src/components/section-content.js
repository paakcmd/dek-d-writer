import React, { Component } from 'react'

import SectionHeaderBar from '../containers/Section-header-bar'
import SectionReaderChapter from '../containers/section-reader-chapter'
import SectionReaderBottombar from './section-reader-bottombar'
import SectionHeaderBarBottom from './section-header-bar-bottom'

export default class SectionContent extends Component {
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
