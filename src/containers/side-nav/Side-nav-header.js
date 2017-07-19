import { loadNovelList, selectNovelList, remoteSubmitReaderChapter } from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SideNavHeader from '../../components/side-nav/side-nav-header'

function mapStateToProps ({ novelList, readerChapter, formHasbeenTouched }, ownProps) {
  return {
    novelList: novelList,
    currentNovel: readerChapter,
    formHasbeenTouched: formHasbeenTouched
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadNovelList: bindActionCreators(loadNovelList, dispatch),
    selectNovelList: bindActionCreators(selectNovelList, dispatch),
    remoteSubmitReaderChapter: bindActionCreators(remoteSubmitReaderChapter, dispatch),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNavHeader)
