import React from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import { Field } from 'redux-form'

export default ({ 
    onSubmit, closeModal, checkNovelTitle, categoryButtonSetStateHandler, 
    novelTitle, onInputChange, categoryButtonClassName, 
    statusNovelTitleClassName, checkNovel, categoryButton,
    categoryTitle, tags, handleDelete, handleAddition, handleDrag,
    handleSubmit, checkSetStateHandler, onPickCategory, renderList

 }) => {
    
    
    
    return (
        <div id='modal-story-settings' className='app-modal modal fixed-footer hide fade in displayBlock'>
            <form onSubmit={handleSubmit(onSubmit)}  className='form-story-settings' acceptCharset='UTF-8'>
              <div className='modal-header'>
                <button onClick={closeModal} type='button' className='close' data-dismiss='modal' aria-hidden='true'>×</button>
                <h3 className='txt-header'><i className='fa fa-cog' /> ตั้งค่าบทความ</h3>
              </div>
              <div className='modal-body'>
                <div className='tiny-scroll-wrapper '>
                  <div style={{height:0}} className='scrollbar disable'>
                    <div style={{height:0}} className='track' >
                      <div style={{height:0}} className='thumb'>
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
                            <a onClick={() => { checkNovelTitle(novelTitle); checkSetStateHandler(1) }} className='btn-storyname-check btn-flat btn-dark'>ตรวจสอบ</a>
                            <span className='section-col label-txt'>ชื่อเรื่อง : </span>
                            <Field
                              name='novelTitle'
                              className='section-col section-input input-txt input-story-name' placeholder='พิมพ์ชื่อเรื่อง' maxLength='200'
                              component='input'
                              value={novelTitle}
                              onChange={event => { onInputChange(event.target.value) }}
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
                              <a tabIndex='-1' onClick={() => { categoryButton === 0 ? categoryButtonSetStateHandler(1): categoryButtonSetStateHandler(0)}} className='btn js-dropdown-toggle btn-category-toggle' data-main-group='1' data-groupa='0'> {categoryTitle} <span className='caret' /></a>
                              <ul className={categoryButtonClassName}>

                                <li className='dropdown-submenu menu-item-outer displayBlock'>
                                  <a tabIndex='-1' className='menu-item main-cat cat-1-0' data-main-group='1' data-groupa='0'>ฟรีสไตล์</a>
                                  <ul className='dropdown-menu popmenu-template popmenu-sub subcategory-dropdown'>
                                    <li className='menu-item header'>นิยายรัก</li>
                                    {
                                        [2,3,4,21,22,1,23].map(index => renderList (1,index))
                                    }
                                    <li className='menu-item divider' />
                                    <li className='menu-item header'>นิยายตื่นเต้น</li>
                                    {
                                        [16,24,18,8,7,17,9,6,12,25].map(index => renderList (1,index))
                                    }
                                    <li className='menu-item divider' />
                                    <li className='menu-item header'>แฟนฟิค</li>
                                    {
                                        [26,27,28,29,30,19].map(index => renderList (1,index))
                                    }
                                    <li className='menu-item divider' />
                                    <li className='menu-item header'>นิยายอื่นๆ</li>
                                    {
                                        [5,11,14,13,10,15,0].map(index => renderList (1,index))
                                    }
                                  </ul>
                                </li>

                                <li className='dropdown-submenu menu-item-outer displayBlock'>
                                  <a tabIndex='-1' className='menu-item main-cat cat-2-0' data-main-group='2' data-groupa='0'>มีสาระ</a>
                                  <ul className='dropdown-menu popmenu-template popmenu-sub subcategory-dropdown'>
                                    {
                                        [5,7,6,3,1,2,4,0].map(index => renderList (2,index))
                                    }
                                  </ul>
                                </li>

                                <li className='dropdown-submenu menu-item-outer displayBlock'>
                                  <a tabIndex='-1' className='menu-item main-cat cat-3-0' data-main-group='3' data-groupa='0'>ไลฟ์สไตล์</a>
                                  <ul className='dropdown-menu popmenu-template popmenu-sub subcategory-dropdown'>
                                    {
                                        [1,5,3,2,7,6,8,4,0].map(index => renderList (3,index))
                                    }
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
                            <div style={{width:'300px',display:'inline-block'}}>

                            <ReactTags tags={tags}
                              handleDelete={handleDelete}
                              handleAddition={handleAddition}
                              handleDrag={handleDrag}
                            />
                            </div>
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
                <button className='btn-flat btn-gray btn-form-cancel' type='button' onClick={closeModal} >ยกเลิก</button>
                <button className='btn-flat btn-green btn-form-submit' type='submit'><i className='fa fa-save' /> บันทึก</button>
              </div>
            </form>
          </div>
    )
}