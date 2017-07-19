import { checkNovelTitle, updateNovelFromModal, loadNovelList, clearModalSetting } from '../actions/index'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import SectionHeaderBar from '../components/section-header-bar'
function validate (values) {
  const errors = {}
  // check error in redux form here
  return errors
}
function mapStateToProps (state, ownProps) {
  return {
    readerChapterProps: state.readerChapter,
    checkNovel: state.checkNovelTitle,
    initialValues: {
      novelId: state.readerChapter.novelId,
      abstract: state.readerChapter.novels.abstract,
      tags: state.readerChapter.novels.tags,
      category: state.readerChapter.novels.category,
      novelTitle: state.readerChapter.novels.novelTitle
    },
    remoteOpenModal: state.remoteOpenModal
  }
}
const SectionHeaderBarForm = reduxForm({
  validate,
  form: 'modalNovelSetting',
  enableReinitialize: true
})(SectionHeaderBar)

export default connect(mapStateToProps, { checkNovelTitle, updateNovelFromModal, loadNovelList, clearModalSetting })(SectionHeaderBarForm)
