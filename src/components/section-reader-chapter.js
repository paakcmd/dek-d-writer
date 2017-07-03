import React, { Component } from 'react'
import { Field, reduxForm, submit } from 'redux-form'
import { connect } from 'react-redux'
import { editChapter, clearRemoteSubmitTypeIdentify, clearRemoteSubmitReaderChapter, remoteSubmitReaderChapter } from '../actions/index'
import { store } from './../store'
class SectionReaderChapter extends Component {
  constructor (props) {
    super(props)
    this.state = { edittingTitle: 'No' }
    // this.onSubmit = this.onSubmit.bind(this)
    this.componentWillUpdate = this.componentWillUpdate.bind(this)
  }
  componentWillUpdate (nextProps) {
    if (this.props.remoteSubmit.readerChapter === 0 && nextProps.remoteSubmit.readerChapter === 1) {
      this.setState(() => ({ edittingTitle: 'No' }))
      this.props.clearRemoteSubmitReaderChapter()
    }

  }
  componentDidUpdate (prevProps) {
    // if ( this.props.remoteSubmit.typeOfSubmit === 'submit' && prevProps.remoteSubmit.typeOfSubmit === '') {
    //   console.log("sub")
    //   this.props.dispatch(submit('readerChapter'))
    //   this.props.remoteSubmitReaderChapter()
    // } else if ( this.props.remoteSubmit.typeOfSubmit === 'submitpublish' && prevProps.remoteSubmit.typeOfSubmit === '') {
    //   console.log("subpub")
    //   this.props.dispatch(submit('readerChapter'))
    //   this.props.remoteSubmitReaderChapter()
    // }
  }

  renderField2 (field) {
    const { meta: { touched, error } } = field
    return (
      <div>
        <textarea
          name={field.name}
          {...field.input}
             />
        <div className='text-help'>{touched ? error : ''}</div>
      </div>
    )
  }
  renderField3 (field) {
    const { meta: { touched, error } } = field
    return (
      <div>
        <input
          className='edit-field edit-heavy text-center single-line'
          name={field.name}
          {...field.input}
          value={field.propsvalue}

          />
        <div className='text-help'>{touched ? error : ''}</div>
      </div>
    )
  }
  renderField (field) {
    const { meta: { touched, error } } = field
    return (
      <div>
        <input
          className='edit-field edit-heavy text-center single-line'
          name={field.name}
          {...field.input}
            />
        <div className='text-help'>{touched ? error : ''}</div>
      </div>
    )
  }

  // onSubmit (values) {
  //   this.setState({ edittingTitle: 'No' })
  //   this.props.editChapter(values, this.props.readerChapterProps.chapterNumber)
  // }

  sectionReaderChapterEdit () {
    if (this.state.edittingTitle === 'No') {
      this.setState({ edittingTitle: 'Yes' })
    }
  }

  render () {
    const editClassName = ` ${this.state.edittingTitle === 'Yes' ? '' : 'edit'}`
    const { handleSubmit } = this.props
    const chapter = this.props.readerChapterProps.novels.chapters[this.props.readerChapterProps.chapterNumber]
    return (
      <div>
        <form onSubmit={(e) => {
          this.setState(() => ({ edittingTitle: 'No' }))
          handleSubmit(e)
        }} >

          <div className='section-reader-chapter' >
            <div className='chapter-name-wrapper editable' onClick={this.sectionReaderChapterEdit.bind(this)}>
              <span className='chapter-count'>ตอนที่ <span className='val'>{this.props.readerChapterProps.chapterNumber + 1}</span> : </span>
              <span className='chapter-name hide-on-edit edit-target'>{chapter ? chapter.name : 'ยังไม่มีชื่อเรื่อง'}</span>
              <div className={editClassName}>

                <Field
                  name='name'
                  component={this.renderField}
                />

                <Field
                  name='index'
                  component='input'
                  type='hidden'
                />

                <Field
                  name='novel'
                  component='input'
                  type='hidden'
                />

                <Field
                  name='typeOfSubmit'
                  component='input'
                  type='hidden'
                />
                <button type='submit' className='displayNone'>Submit</button>
              </div>
            </div>
            <div className='last-update'>Chapter update : 14 มิ.ย. 2560</div>

          </div>
          <div className='section-reader-content'>
            <div className='section-reader-headbar displayNone'>

              <div className='mainpage-description-wrapper story-header-factor editable-modal displayBlock' >
                <div className='story-img imgLiquid_bgSize imgLiquid_ready mainpage-description-wrapper-bgImg' >
                  <img className='thumb-img displayNone' src='./Story Editor _ Writer_files/tttt.gif' alt='รูปไอคอนบทความ' />
                </div>
                <div className='desc-wrapper'>
                  <div className='desc-header content-header-small displayBlock' >คำโปรย</div>
                  <div className='desc-content'>ยังไม่มีคำโปรย</div>
                </div>
              </div>
              <p className='noJavaScript'>*ยกเลิกการใช้ &lt;script&gt; ทั้งหมดเพื่อความปลอดภัยของผู้เข้าชม</p>
              <div className='short-story-header displayNone'>
                <span className='label-txt'>เรื่องในตอนนี้</span><span className='time-update'>อัพเดท 14 มิ.ย. 2560</span>
              </div>
            </div>
            <div className='richtext-wrapper rich-content-1'>
              <div className='richtext-header content-header-small'>ข้อมูลเบื้องต้นของเรื่องนี้</div>
              <div className='richtext-space'>

                <Field
                  name='content'
                  component={this.renderField2}
                />

              </div>
            </div>

            <div className='codearea-section'>
              <div className='codearea-header-wrapper'>
                <div className='codearea-header'>ใส่โค้ดตกแต่งให้หน้าหลัก</div><button className='btn-code-reset btn-raised btn-brown-red' type='reset'>reset โค้ด</button>
                <span className='code-advise float-right textAlignRight'>
              *โค้ดจะไม่เป็น Draft และจะอัพเดททันที<br />
              *ยกเลิกการใช้ &lt;script&gt; ทั้งหมดเพื่อความปลอดภัยของผู้เข้าชม
            </span>
                <div className='clear-float' />
              </div>
              <div className='richtext-wrapper codearea-rich-wrapper prevent-user-select'>
                <div className='code-blocker vertical-middle-wrapper'>
                  <span><i className='fa fa-warning' /> จะสามารถใส่โค้ดได้ เมื่อเรื่องนี้ถูก Publish แล้ว</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

    )
  }
}

function validate (values) {
  const errors = {}
  return errors
}
function mapStateToProps (state, ownProps) {
  return {
    readerChapterProps: state.readerChapter,
    initialValues: {
      ...state.readerChapter.novels.chapters[state.readerChapter.chapterNumber],
      index: state.readerChapter.chapterNumber,
      novel: state.readerChapter.novelId,
      typeOfSubmit: state.remoteSubmit.typeOfSubmit
    },
    remoteSubmit: state.remoteSubmit
  }
}

const SectionReaderChapterReduxForm = reduxForm({
  validate,
  form: 'readerChapter',
  onSubmit: (values) => {
    store.dispatch(editChapter(values))
    // store.dispatch(clearRemoteSubmitTypeIdentify())
  },
  enableReinitialize: true
})(SectionReaderChapter)

export default connect(mapStateToProps, { clearRemoteSubmitTypeIdentify, editChapter, clearRemoteSubmitReaderChapter, remoteSubmitReaderChapter })(SectionReaderChapterReduxForm)
