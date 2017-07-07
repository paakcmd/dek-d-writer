import React from 'react'

export default ({ cName }) => {
  return (
    <div className={cName}>
      <div className='section-reader-bottom-chapter' >
        <div className='chapter-name-wrapper editable'>
          <span className='chapter-count'>ตอนที่ <span className='val'>-1</span> : </span>
          <span className='chapter-name hide-on-edit edit-target'>ยังไม่มีชื่อเรื่อง</span>
          <div className='edit'>
            <input className='edit-field edit-heavy text-center single-line' value='ตอนที่ยังไม่ได้ตั้งชื่อ' type='text' />
          </div>
        </div>
        <div className='last-update'>Chapter update : 14 มิ.ย. 2560</div>
      </div>
    </div>
  )
}
