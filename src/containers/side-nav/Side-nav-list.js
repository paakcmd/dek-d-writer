import { connect } from 'react-redux'
import { createChapter, loadNovel, selectChapter, remoteSubmitReaderChapter } from '../../actions/index'
import { bindActionCreators } from 'redux'
import SideNavList from '../../components/side-nav/side-nav-list'

function mapStateToProps (state) {
  return {
    readerChapterProps: state.readerChapter,
    formHasbeenTouched: state.formHasbeenTouched
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createChapter: bindActionCreators(createChapter, dispatch),
    loadNovel: bindActionCreators(loadNovel, dispatch),
    selectChapter: bindActionCreators(selectChapter, dispatch),
    remoteSubmitReaderChapter: bindActionCreators(remoteSubmitReaderChapter, dispatch),
    dispatch
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SideNavList)
