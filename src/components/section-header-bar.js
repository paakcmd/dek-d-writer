import React, { Component } from 'react'
import _ from 'lodash'
import Modal from 'react-modal'
import { novelCategory, novelMainCategory } from './config/listOfCategory'
import StorySettingModal from './story-setting-modal'

export default class SectionHeaderBar extends Component {
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
    this.checkSetStateHandler = this.checkSetStateHandler.bind(this)
    this.categoryButtonSetStateHandler = this.categoryButtonSetStateHandler.bind(this)
    this.onPickCategory = this.onPickCategory.bind(this)
    this.renderList = this.renderList.bind(this)
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
    console.log(typeof(modalIsOpen))
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
    console.log("main")
    var maintext = ''
    if (main === 1) {
      maintext = 'ฟรีสไตล์ > '
    } else if (main === 2) {
      maintext = 'มีสาระ > '
    } else if (main === 3) {
      maintext = 'ไลฟ์สไตล์ > '
    }
    maintext = maintext + text

    this.setState({ category: { main: main, sub: sub, text: maintext }, categoryButton: 0, categoryTitle: maintext })
  }
  checkSetStateHandler(val) {
    this.setState({ checked: val })

  }
  categoryButtonSetStateHandler(val){
    this.setState({ categoryButton: val })
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
  renderList(maingroup,index){
    const title = _.find(novelCategory, { main: parseInt(maingroup), sub: parseInt(index) }).title
    return (
      <li>
          <a onClick={(e) => { this.onPickCategory(maingroup,index, title) }} tabIndex='-1' className={`menu-item sub-cat cat-${maingroup}-${index}`} data-main-group={maingroup} data-groupa={index}> {title}
          </a>
      </li>
    )
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
        border: 'none',
        zIndex:999
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
          contentLabel="Modal"
        >
          <StorySettingModal 
          
            categoryButtonSetStateHandler={this.categoryButtonSetStateHandler}
            checkSetStateHandler={this.checkSetStateHandler}
            handleSubmit={this.props.handleSubmit}
            onSubmit={this.onSubmit} 
            closeModal={this.closeModal}
            checkNovelTitle={this.props.checkNovelTitle}
            setStateHandler={this.setStateHandler}
            novelTitle={this.state.novelTitle}
            onInputChange={this.onInputChange}
            statusNovelTitleClassName={statusNovelTitleClassName}
            categoryButtonClassName={categoryButtonClassName}
            checkNovel={checkNovel}
            categoryButton={this.state.categoryButton}
            categoryTitle={this.state.categoryTitle}
            onPickCategory={this.onPickCategory}
            tags={this.state.tags}
            handleDelete={this.handleDelete}
            handleAddition={this.handleAddition}
            handleDrag={this.handleDrag}
            renderList={this.renderList}
          />
          
        </Modal>
      </div>
    )
  }
}
