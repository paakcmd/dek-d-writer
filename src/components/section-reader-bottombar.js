import React from 'react'

export default ({ cName, chapters }) => {
  return (
    <div className={cName}>
      <div className='section-reader-bottombar'>
        <div className='short-story-header displayBlock' >
          <span className='label-txt'>ตอนทั้งหมด</span><span className='time-update'>อัพเดท 14 มิ.ย. 2560</span>
        </div>
        <div className='chapter-index-wrapper displayBlock' >
          <table className='chapter-index-table'>
            <thead>
              <tr className='table-header'>
                <th className='table-header-item col-chapter-count'>ตอน</th>
                <th className='table-header-item col-chapter-name'>ชื่อตอน</th>
                <th className='table-header-item col-chapter-update'>อัพเดท</th>
              </tr>
            </thead>
            <tbody>
              <tr className='first-row-margin' />
              {chapters.length > 0
                ? chapters.map((chapter, index) => {
                  if (index === 0) {
                    return null
                  }
                  return (
                    <tr className='table-row' key={index}>
                      <td className='table-col col-chapter-count'>{index}</td>
                      <td className='table-col col-chapter-name'>{chapter.name === '' ? 'ตอนที่ยังไม่ตั้งชื่อ' : chapter.name}</td>
                      <td className='table-col col-chapter-update'>14 มิ.ย. 2560</td>
                    </tr>
                  )
                }) : null
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
