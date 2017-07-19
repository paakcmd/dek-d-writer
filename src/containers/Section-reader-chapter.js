import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { formHasBeenTouched, saveChapter, clearRemoteSubmitTypeIdentify, clearRemoteSubmitReaderChapter, remoteSubmitReaderChapter, openModalSetting } from '../actions/index'
import { store } from '../store'
import SectionReaderChapter from '../components/section-reader-chapter'


function validate (values) {
  const errors = {}
  // check error in redux form here
  return errors
}
function mapStateToProps (state, ownProps) {
  return {
    readerChapterProps: state.readerChapter,
    initialValues: {
      ...state.readerChapter.novels.chapters[state.readerChapter.chapterNumber],
      index: state.readerChapter.chapterNumber,
      novel: state.readerChapter.novelId,
      publishandsubmit: state.readerChapter.publishandsubmit,
      codearea: state.readerChapter.novels.css
    },
    remoteSubmit: state.remoteSubmit,
    formHasbeenTouched: state.formHasbeenTouched
  }
}

const SectionReaderChapterReduxForm = reduxForm({
  validate,
  form: 'readerChapter',
  onSubmit: (values) => {
    store.dispatch(saveChapter(values))
    // store.dispatch(clearRemoteSubmitTypeIdentify())
  },
  enableReinitialize: true
})(SectionReaderChapter)

export default connect(mapStateToProps, { formHasBeenTouched, clearRemoteSubmitTypeIdentify, saveChapter, clearRemoteSubmitReaderChapter, remoteSubmitReaderChapter, openModalSetting })(SectionReaderChapterReduxForm)
