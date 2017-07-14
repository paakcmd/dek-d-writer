import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { formHasBeenTouched, saveChapter, clearRemoteSubmitTypeIdentify, clearRemoteSubmitReaderChapter, remoteSubmitReaderChapter, openModalSetting } from '../actions/index'
import { store } from './../store'
class SectionReaderChapter extends Component {
  constructor (props) {
    super(props)
    this.state = { edittingTitle: 'No' }
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
  }
  componentDidUpdate (prevProps) {
    if (this.props.remoteSubmit.readerChapter === 1 && prevProps.remoteSubmit.readerChapter === 0) {
      this.setState(() => ({ edittingTitle: 'No' }))
      this.props.clearRemoteSubmitReaderChapter()
    }
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

  sectionReaderChapterEdit () {
    if (this.state.edittingTitle === 'No') {
      this.setState({ edittingTitle: 'Yes' })
    }
  }
  resetCSS () {
    console.log(this.props)
  }
  render () {
    const editClassName = ` ${this.state.edittingTitle === 'Yes' ? '' : 'edit'}`
    const { handleSubmit, formHasbeenTouched } = this.props
    const chapter = this.props.readerChapterProps.novels.chapters[this.props.readerChapterProps.chapterNumber]
    const introNameClassName = `${this.props.readerChapterProps.chapterNumber === 0 ? 'section-reader-chapter displayNone' : 'section-reader-chapter'}`
    const introKumPloyClassName = `${this.props.readerChapterProps.chapterNumber === 0 ? 'section-reader-headbar' : 'displayNone section-reader-headbar'}`
    const codeBlockerClassName = `${this.props.readerChapterProps.novels.staticPublish.length > 0 ? 'code-blocker vertical-middle-wrapper displayNone' : 'code-blocker vertical-middle-wrapper'}`
    const cssFillerBlockClassName = `${this.props.readerChapterProps.chapterNumber === 0 ? '' : 'displayNone'}`
    const abstractOrChapterClassName2 = `${this.props.readerChapterProps.chapterNumber === 0 ? 'displayNone' : 'displayBlock'}`
    return (
      <div>
        <form onSubmit={(e) => {
          this.setState(() => ({ edittingTitle: 'No' }))
          handleSubmit(e)
        }} >

          <div className={introNameClassName} >
            <div className='chapter-name-wrapper editable' onClick={this.sectionReaderChapterEdit.bind(this)}>
              <span className='chapter-count'>ตอนที่ <span className='val'>{this.props.readerChapterProps.chapterNumber }</span> : </span>
              <span className='chapter-name hide-on-edit edit-target'>{chapter.name ? chapter.name : 'ตอนที่ยังไม่ได้ตั้งชื่อ'}</span>
              <div className={editClassName}>

                <Field
                  name='name'
                  component={this.renderField}
                  onChange={() => formHasbeenTouched.touched === 0 ? this.props.formHasBeenTouched(): ''}
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
                  name='publishandsubmit'
                  component='input'
                  type='hidden'
                />
                <button type='submit' className='displayNone'>Submit</button>

              </div>
            </div>
            
            <div className='last-update'>Chapter update : 14 มิ.ย. 2560</div>

          </div>
          <div className='section-reader-content'>
            <div className={introKumPloyClassName}>

              <div onClick={() => { this.props.openModalSetting()  }} className='mainpage-description-wrapper story-header-factor editable-modal displayBlock' >
                <div className='story-img imgLiquid_bgSize imgLiquid_ready mainpage-description-wrapper-bgImg' >
                  <img className='thumb-img displayNone' src='https://www0.dek-d.com/assets/writer/images/tttt.gif' alt='รูปไอคอนบทความ' />
                </div>
                <div className='desc-wrapper'>
                  <div className='desc-header content-header-small displayBlock' >คำโปรย</div>
                  <div className='desc-content'>{this.props.readerChapterProps.novels.abstract === '' ? 'ยังไม่มีคำโปรย' : this.props.readerChapterProps.novels.abstract }</div>
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
                  onChange={() => formHasbeenTouched.touched === 0 ? this.props.formHasBeenTouched(): ''}
                />

              </div>
            </div>
            <div className={cssFillerBlockClassName}>
              <div className='codearea-section'>
                <div className='codearea-header-wrapper'>
                  <div className='codearea-header'>ใส่โค้ดตกแต่งให้หน้าหลัก</div><button type='reset' className='btn-code-reset btn-raised btn-brown-red' onClick={() => { this.resetCSS() }}>reset โค้ด</button>
                  <span className='code-advise float-right textAlignRight'>
                *โค้ดจะไม่เป็น Draft และจะอัพเดททันที<br />
                *ยกเลิกการใช้ &lt;script&gt; ทั้งหมดเพื่อความปลอดภัยของผู้เข้าชม
              </span>
                  <div className='clear-float' />
                </div>
                <div className='richtext-wrapper codearea-rich-wrapper prevent-user-select'>

                  <Field
                    name='codearea'
                    component='textarea'
                    id='codearea'
                    onChange={() => formHasbeenTouched.touched === 0 ? this.props.formHasBeenTouched(): ''}
                  />

                  <div className={codeBlockerClassName}>
                    <span><i className='fa fa-warning' /> จะสามารถใส่โค้ดได้ เมื่อเรื่องนี้ถูก Publish แล้ว</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={abstractOrChapterClassName2}>
        <div className='section-reader-bottom-chapter' >
          <div className='chapter-name-wrapper editable' onClick={this.sectionReaderChapterEdit.bind(this)}>
            <span className='chapter-count'>ตอนที่ <span className='val'>{this.props.readerChapterProps.chapterNumber }</span> : </span>
            <span className='chapter-name hide-on-edit edit-target'>{chapter.name ? chapter.name : 'ตอนที่ยังไม่ได้ตั้งชื่อ'}</span>
            <div className={editClassName}>
              <Field
                  name='name'
                  component={this.renderField}
                  onChange={() => formHasbeenTouched.touched === 0 ? this.props.formHasBeenTouched(): ''}
                />
              <button type='submit' className='displayNone'>Submit</button>

            </div>
          </div>

          <div className='last-update'>Chapter update : 14 มิ.ย. 2560</div>
        </div>
      </div>
        </form>
      </div>

    )
  }
}

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
