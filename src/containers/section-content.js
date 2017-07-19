import { connect } from 'react-redux'
import SectionContent from '../components/section-content'
function mapStateToProps (state, ownProps) {
  return {
    readerChapterProps: state.readerChapter
  }
}

export default connect(mapStateToProps)(SectionContent)
