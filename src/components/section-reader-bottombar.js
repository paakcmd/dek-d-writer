import React from 'react'

export default ({ cName }) => {
  return (
    <div className={cName}>
      <div className='section-reader-bottombar'>
        <div className='short-story-header displayBlock' >
          <span className='label-txt'>ตอนทั้งหมด</span><span className='time-update'>อัพเดท 14 มิ.ย. 2560</span>
        </div>
        <div className='chapter-index-wrapper displayBlock' >
          <table className='chapter-index-table'>
            <tbody>
              <tr className='table-header'>
                <th className='table-header-item col-chapter-count'>ตอน</th>
                <th className='table-header-item col-chapter-name'>ชื่อตอน</th>
                <th className='table-header-item col-chapter-update'>อัพเดท</th>
              </tr>
              <tr className='first-row-margin' />
              <tr className='table-row'>
                <td className='table-col col-chapter-count'>1</td>
                <td className='table-col col-chapter-name'>ตอนที่ยังไม่ได้ตั้งชื่อ</td>
                <td className='table-col col-chapter-update'>14 มิ.ย. 2560</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
