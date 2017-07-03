import React,{ Component } from 'react';
import { Connect } from 'react-redux';
import SectionHeaderBar from '../components/section-header-bar';
import SectionReaderChapter from '../components/section-reader-chapter';
import SectionReaderBottomChapter from '../components/section-reader-bottom-chapter';
import SectionReaderBottombar from '../components/section-reader-bottombar';
import SectionHeaderBarBottom from '../components/section-header-bar-bottom';


export default class SectionContent extends Component{

    constructor(props) {
      super(props);

    }


    render(){
      return(
        <div>
          {/*<AutoSaveBtn/>*/}
          <div className="main-container-wrapper">
            <div className="main-container">
              <div className="section-content">

                  <div className="section-reader">
                    <SectionHeaderBar />
                    <SectionReaderChapter/>
                    <SectionReaderBottomChapter/>
                    <SectionReaderBottombar/>
                    <SectionHeaderBarBottom/>
                  </div>

              </div>
            </div>
          </div>
        </div>
      )
  }
}
