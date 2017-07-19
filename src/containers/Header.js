import { connect } from 'react-redux'
import { setPubandSub, clearPubandSub, autoSave, remoteSubmitReaderChapter, publishChapter, remoteSubmitTypeIdentify } from '../actions/index'
import { bindActionCreators } from 'redux'
import Header from '../components/header'
function mapStateToProps (state, ownProps) {
  return {
    readerChapterProps: state.readerChapter,
    remoteSubmit: state.remoteSubmit,
    notification: state.notification

  }
}

function mapDispatchToProps (dispatch) {
  return {
    publishChapter: bindActionCreators(publishChapter, dispatch),
    remoteSubmitReaderChapter: bindActionCreators(remoteSubmitReaderChapter, dispatch),
    remoteSubmitTypeIdentify: bindActionCreators(remoteSubmitTypeIdentify, dispatch),
    autoSave: bindActionCreators(autoSave, dispatch),
    setPubandSub: bindActionCreators(setPubandSub, dispatch),
    clearPubandSub: bindActionCreators(clearPubandSub, dispatch),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
