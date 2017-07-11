import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { checkNovelTitle, updateNovelFromModal, loadNovelList, clearModalSetting } from '../actions/index'
import Modal from 'react-modal'
import { Field, reduxForm } from 'redux-form'
import { WithContext as ReactTags } from 'react-tag-input'
import { novelCategory, novelMainCategory } from './helper/listOfCategory'

class SectionHeaderBar extends Component {
  constructor () {
    super()
    this.state = {
      modalIsOpen: false,
      novelTitle: '',
      tags: [],
      categoryButton: 0,
      category: { main: '', sub: '', text: '' },
      categoryTitle: 'ฟรีสไตล์ > อื่นๆ',
      checked: 0
    }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleAddition = this.handleAddition.bind(this)
    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidUpdate (prevProps) {
    if (this.props.readerChapterProps.novelId !== prevProps.readerChapterProps.novelId) {
      const category = this.props.initialValues.category
      this.setState({ category: category, tags: this.props.initialValues.tags })
      if (category.main !== '') {
        const maincate = _.find(novelMainCategory, { main: parseInt(category.main) }).title
        const subcate = _.find(novelCategory, { main: parseInt(category.main), sub: parseInt(category.sub) }).title
        this.setState({ categoryTitle: maincate + ' > ' + subcate })
      } else {
        this.setState({ categoryTitle: 'ฟรีสไตล์ > อื่นๆ' })
      }
    }
    if (prevProps.remoteOpenModal.modalSettingNovel === 0 && this.props.remoteOpenModal.modalSettingNovel === 1) {
      this.openModal()
      this.props.clearModalSetting();
    }
  }

  componentDidMount () {
    const category = this.props.initialValues.category
    this.setState({ category: category, tags: this.props.initialValues.tags })
    if (category.main !== '') {
      const maincate = _.find(novelMainCategory, { main: parseInt(category.main) }).title
      const subcate = _.find(novelCategory, { main: parseInt(category.main), sub: parseInt(category.sub) }).title
      this.setState({ categoryTitle: maincate + ' > ' + subcate })
    } else {
      this.setState({ categoryTitle: 'ฟรีสไตล์ > อื่นๆ' })
    }
  }

  openModal () {
    this.setState({ modalIsOpen: true })
  }

  afterOpenModal () {
    // references are now sync'd and can be accessed.
  }
  handleDelete (i) {
    let tags = this.state.tags
    tags.splice(i, 1)
    this.setState({
      tags: tags
    })
  }

  handleAddition (tag) {
    let tags = this.state.tags
    tags.push({
      id: tags.length + 1,
      text: tag
    })
    this.setState({ tags: tags })
  }
  closeModal () {
    this.setState({ modalIsOpen: false })
  }
  onInputChange (term) {
    this.setState({ novelTitle: term, checked: 0 })
  }
  onPickCategory (main, sub, text) {
    var maintext = ''
    if (main === '1') {
      maintext = 'ฟรีสไตล์ > '
    } else if (main === '2') {
      maintext = 'มีสาระ > '
    } else if (main === '3') {
      maintext = 'ไลฟ์สไตล์ > '
    }
    maintext = maintext + text

    this.setState({ category: { main: main, sub: sub, text: maintext }, categoryButton: 0, categoryTitle: maintext })
  }
  onSubmit (values) {
    if (this.props.checkNovel.novelTitleStatus === 'available') {
      if (this.state.checked === 0) {
        alert('กรุณากดปุ่มตรวจสอบใหม่อีกครั้ง')
      } else {
        values = { ...values, tags: this.state.tags }
        values = { ...values, category: this.state.category }
        this.props.updateNovelFromModal(values)
        this.props.loadNovelList()
        alert('submitted')
        this.closeModal()
      }
    } else if (this.props.checkNovel.novelTitleStatus === 'unavailable') {
      alert('Your novel title is unavailable')
    } else {
      if (this.state.novelTitle === '') {
        alert('please input novel Title')
      } else {
        alert('please press ตรวจสอบ button')
      }
    }
  }
  render () {
    const modalStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        width: '50%',
        height: '70%',
        background: 'none',
        border: 'none'
      }
    }

    const { readerChapterProps, checkNovel } = this.props
    const title = readerChapterProps.novels.novelTitle
    const statusNovelTitleClassName = `${checkNovel.novelTitleStatus === 'available' ? 'secction-col status-handle state-available' : 'secction-col status-handle  state-error '}`
    const categoryButtonClassName = `${this.state.categoryButton === 1 ? 'js-dropdown-menu popmenu-template category-dropdown displayBlock' : 'js-dropdown-menu popmenu-template category-dropdown'}`
    return (
      <div>
        <div className='section-header-bar' onClick={this.openModal}>
          <h1 className='section-reader-header txt-ellipsis'>
            <span id='story-name' className='story-header-factor editable-modal light' title='ยังไม่มีชื่อเรื่อง'>{title || 'ยังไม่มีชื่อเรื่อง'}</span>
          </h1>
          <a className='story-setting-toggle story-header-factor editable-modal light' title='ตั้งค่าบทความ' href='javascript:void(0)'><i className='fa fa-cog' /></a>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={modalStyles}
        >
          <div id='modal-story-settings' className='app-modal modal fixed-footer hide fade in displayBlock'>
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='form-story-settings' acceptCharset='UTF-8'>
              <div className='modal-header'>
                <button onClick={this.closeModal} type='button' className='close' data-dismiss='modal' aria-hidden='true'>×</button>
                <h3 className='txt-header'><i className='fa fa-cog' /> ตั้งค่าบทความ</h3>
              </div>
              <div className='modal-body'>
                <div className='tiny-scroll-wrapper '>
                  <div className='scrollbar disable height0'>
                    <div className='track height0' >
                      <div className='thumb height0'>
                        <div className='end' />
                      </div>
                    </div>
                  </div>
                  <div className='viewport'>
                    <div className='js-tinyscroll overview top0'>
                      <div className='tab-section story-main-detail'>
                        <div className='section-header'>ข้อมูลหลัก</div>
                        <div className='section-content'>
                          <div className='section-row story-name'>
                            <a onClick={() => { this.props.checkNovelTitle(this.state.novelTitle); this.setState({ checked: 1 }) }} className='btn-storyname-check btn-flat btn-dark'>ตรวจสอบ</a>
                            <span className='section-col label-txt'>ชื่อเรื่อง : </span>
                            <Field
                              name='novelTitle'
                              className='section-col section-input input-txt input-story-name' placeholder='พิมพ์ชื่อเรื่อง' maxLength='200'
                              component='input'
                              value={this.state.novelTitle}
                              onChange={event => { this.onInputChange(event.target.value) }}
                            />
                            <Field
                              name='novelId'
                              component='input'
                              type='hidden'
                            />

                            <span className='section-col label-txt' />
                            <span className={statusNovelTitleClassName}>{checkNovel.novelTitleStatus === '' ? 'กรุณาระบุชื่อนิยาย' : checkNovel.novelTitleStatus} </span>
                          </div>
                          <div className='section-row story-category'>
                            <span className='section-col label-txt'>หมวดหมู่ : </span>
                            <div className='btn-group btn-category-wrapper'>
                              <a tabIndex='-1' onClick={() => { this.state.categoryButton === 0 ? this.setState({ categoryButton: 1 }) : this.setState({ categoryButton: 0 }) }} className='btn js-dropdown-toggle btn-category-toggle' data-main-group='1' data-groupa='0'> {this.state.categoryTitle} <span className='caret' /></a>
                              <ul className={categoryButtonClassName}>

                                <li className='dropdown-submenu menu-item-outer displayBlock'>
                                  <a tabIndex='-1' className='menu-item main-cat cat-1-0' data-main-group='1' data-groupa='0'>ฟรีสไตล์</a>
                                  <ul className='dropdown-menu popmenu-template popmenu-sub subcategory-dropdown'>
                                    <li className='menu-item header'>นิยายรัก</li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-2' data-main-group='1' data-groupa='2'> นิยายรักหวานแหวว</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-3' data-main-group='1' data-groupa='3'>นิยายซึ้งกินใจ</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-4' data-main-group='1' data-groupa='4'>นิยายรักดราม่า</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-21' data-main-group='1' data-groupa='21'>นิยายรักคอมเมดี้</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-22' data-main-group='1' data-groupa='22'>นิยายรักแฟนตาซี</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-1' data-main-group='1' data-groupa='1'>นิยายวาย</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-23' data-main-group='1' data-groupa='23'>นิยายรักสีเทา</a></li>
                                    <li className='menu-item divider' />
                                    <li className='menu-item header'>นิยายตื่นเต้น</li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-16' data-main-group='1' data-groupa='16'>นิยายแฟนตาซี</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-24' data-main-group='1' data-groupa='24'>นิยายเกมออนไลน์</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-18' data-main-group='1' data-groupa='18'>นิยายวิทยาศาสตร์</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-8' data-main-group='1' data-groupa='8'>นิยายระทึกขวัญ</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-7' data-main-group='1' data-groupa='7'>นิยายสืบสวน</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-17' data-main-group='1' data-groupa='17'>นิยายกำลังภายใน</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-9' data-main-group='1' data-groupa='9'>นิยายสงคราม</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-6' data-main-group='1' data-groupa='6'>นิยายผจญภัย</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-12' data-main-group='1' data-groupa='12'>นิยายอดีต ปัจจุบัน อนาคต</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-25' data-main-group='1' data-groupa='25'>นิยายบู๊ แอ๊คชั่น</a></li>
                                    <li className='menu-item divider' />
                                    <li className='menu-item header'>แฟนฟิค</li>
                                    <li><a tabIndex='-1' onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} className='menu-item sub-cat cat-1-26' data-main-group='1' data-groupa='26'>แฟนฟิคเกาหลี</a></li>
                                    <li><a tabIndex='-1' onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} className='menu-item sub-cat cat-1-27' data-main-group='1' data-groupa='27'>แฟนฟิคไทย</a></li>
                                    <li><a tabIndex='-1' onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} className='menu-item sub-cat cat-1-28' data-main-group='1' data-groupa='28'>แฟนฟิคเอเชีย</a></li>
                                    <li><a tabIndex='-1' onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} className='menu-item sub-cat cat-1-29' data-main-group='1' data-groupa='29'>แฟนฟิคฝรั่ง</a></li>
                                    <li><a tabIndex='-1' onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} className='menu-item sub-cat cat-1-30' data-main-group='1' data-groupa='30'>แฟนฟิคนิยาย การ์ตูน เกม</a></li>
                                    <li><a tabIndex='-1' onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} className='menu-item sub-cat cat-1-19' data-main-group='1' data-groupa='19'>แฟนฟิคอื่นๆ</a></li>
                                    <li className='menu-item divider' />
                                    <li className='menu-item header'>นิยายอื่นๆ</li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-5' data-main-group='1' data-groupa='5'>นิทาน วรรณกรรม</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-11' data-main-group='1' data-groupa='11'>กลอน</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-14' data-main-group='1' data-groupa='14'>สังคม</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-13' data-main-group='1' data-groupa='13'>จิตวิทยา</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-10' data-main-group='1' data-groupa='10'>ตลก-ขบขัน</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-15' data-main-group='1' data-groupa='15'>นิยายหักมุม</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-1-0' data-main-group='1' data-groupa='0'>อื่น ๆ</a></li>
                                  </ul>
                                </li>

                                <li className='dropdown-submenu menu-item-outer displayBlock'>
                                  <a tabIndex='-1' className='menu-item main-cat cat-2-0' data-main-group='2' data-groupa='0'>มีสาระ</a>
                                  <ul className='dropdown-menu popmenu-template popmenu-sub subcategory-dropdown'>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-2-5' data-main-group='2' data-groupa='5'>ความรู้แอดมิชชั่น</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-2-7' data-main-group='2' data-groupa='7'>เกร็ดท่องเที่ยว</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-2-6' data-main-group='2' data-groupa='6'>ความรู้กลเม็ด,เทคนิค</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-2-3' data-main-group='2' data-groupa='3'>เกร็ดประวัติศาสตร์</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-2-1' data-main-group='2' data-groupa='1'>ความรู้รอบตัว</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-2-2' data-main-group='2' data-groupa='2'>ความรู้เพื่อดำเนินชีวิต</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-2-4' data-main-group='2' data-groupa='4'>ความรู้เรื่องเรียน</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-2-0' data-main-group='2' data-groupa='0'>อื่นๆ</a></li>
                                  </ul>
                                </li>

                                <li className='dropdown-submenu menu-item-outer displayBlock'>
                                  <a tabIndex='-1' className='menu-item main-cat cat-3-0' data-main-group='3' data-groupa='0'>ไลฟ์สไตล์</a>
                                  <ul className='dropdown-menu popmenu-template popmenu-sub subcategory-dropdown'>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-3-1' data-main-group='3' data-groupa='1'>สุขภาพความงาม</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-3-5' data-main-group='3' data-groupa='5'>ดีไซน์ กราฟิก</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-3-3' data-main-group='3' data-groupa='3'>ตามติดคนดัง</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-3-2' data-main-group='3' data-groupa='2'>ของอินเทรนด์</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-3-7' data-main-group='3' data-groupa='7'>ไอที เทคโนโลยี</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-3-6' data-main-group='3' data-groupa='6'>การ์ตูน  เกมส์</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-3-8' data-main-group='3' data-groupa='8'>ประสบการณ์ต่างแดน</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-3-4' data-main-group='3' data-groupa='4'>ดนตรี เพลง หนัง</a></li>
                                    <li><a onClick={(e) => { this.onPickCategory(e.target.getAttribute('data-main-group'), e.target.getAttribute('data-groupa'), e.target.innerHTML) }} tabIndex='-1' className='menu-item sub-cat cat-3-0' data-main-group='3' data-groupa='0'>อื่นๆ</a></li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <span className='section-col label-txt' />
                              <span className='section-col status-handle'>*เมื่อเปลี่ยนหมวด จะเปลี่ยนได้อีกครั้งใน 30 วันถัดไป</span>
                            </div>
                          </div>
                          <div className='section-row story-icon'>
                            <span className='section-col label-txt'>รูปไอคอน : </span>
                            <span className='preview-story-icon imgLiquid_bgSize imgLiquid_ready modal-story-icon-dek-d-writer' data-id='0'>
                              <img className='thumb-img displayNone' src='https://www0.dek-d.com/assets/writer/images/tttt.gif' />
                              <span className='btn-change-storyicon' title='อัพโหลดรูปไอคอน'><i className='fa fa-cloud-upload upload-icon' /></span>
                            </span>
                          </div>

                        </div>

                      </div>

                      <div className='tab-section story-additional-detail'>
                        <div className='section-header'>นิยายจะถูกหาได้เจอได้ง่ายขึ้น</div>
                        <div className='section-content'>
                          <div className='section-row story-description'>
                            <span className='section-col label-txt'>คำโปรย : </span>
                            <Field
                              name='abstract'
                              className='story-search-description section-input input-area'
                              component='textarea'
                              maxLength='200'
                              placeholder='คำโปรยดึงคนเข้าเรื่อง'
                            />
                          </div>
                          <div className='section-row story-tags'>
                            <span className='section-col label-txt'>Tags : </span>
                            <ReactTags tags={this.state.tags}
                              handleDelete={this.handleDelete}
                              handleAddition={this.handleAddition}
                              handleDrag={this.handleDrag}
                            />
                            <span className='section-col label-txt' />
                            <span className='secction-col status-handle'>*กด Enter เพื่อใส่ tag ตัวต่อไป<br />ยกตัวอย่างเช่น ลูก (Enter) ภรรยา (Enter) หัวใจ (Enter) แอบรัก </span>
                          </div>
                        </div>
                        <div className='caution-txt'>* การตั้งค่าบทความจะถูกอัพเดททันที ไม่เกี่ยวข้องกับสถานะของตอน</div>
                        <div className='caution-txt'>** สามารถตั้งค่าเพิ่มเติมได้ในหน้าจัดการแต่ละบทความ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='form-footer'>
                <button className='btn-flat btn-gray btn-form-cancel' type='button' onClick={this.closeModal} >ยกเลิก</button>
                <button className='btn-flat btn-green btn-form-submit' type='submit'><i className='fa fa-save' /> บันทึก</button>
              </div>
            </form>
          </div>
        </Modal>
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
