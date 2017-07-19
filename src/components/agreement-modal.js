import React from 'react'

export default ( {closeModal, allowPublish }) => {
    return (
        <div id='modal-agreement' className='app-modal modal fixed-footer hide fade in displayBlock' aria-hidden='false'>
            <div className='modal-header'>
              <h3 className='txt-header txt-yellow-writer'><i className='fa fa-warning txt-yellow' /> ข้อตกลงเกี่ยวกับบทความ</h3>
            </div>
            <div className='modal-body'>
              <div className='tiny-scroll-wrapper '>
                <div style={{height:192}} className='scrollbar' >
                  <div style={{height:192}} className='track '>
                    <div style={{height:50, top:0.38587}} className='thumb' >
                      <div className='end' />
                    </div>
                  </div>
                </div>
                <div className='viewport'>
                  <div style={{top:-6}} className='js-tinyscroll overview'>
                    <div className='tab-section'>
                      <div className='section-header'>แนวทางควบคุมนิยาย</div>
                      <div className='section-descript'><strong>เนื่องจากเว็บไซต์ Dek-D.com มีผู้ใช้งานเป็นเยาวชนจำนวนมาก จึงขอพิจารณาความเหมาะสมของผลงานในส่วนของ </strong>เนื้อหาในหน้าสารบัญ, เนื้อหาในตอนย่อย, ชื่อเรื่อง, คำโปรย และภาพประกอบเรื่อง ด้วยแนวทางควบคุมดังนี้</div>

                      <ul className='section-content'>
                        <li className='section-row'>
                          <div className='li-head'>
									1 ฉากกิจกรรมทางเพศ สำหรับทุกเพศ </div>
                          <div className='li-description'>
                            <ul className='sub-bullet'>
                              <li className='bullet'>
                                <p className='bullet-txt'>ไม่สามารถลงหรือพรรณนาฉากการร่วมเพศแบบละเอียด, <strong>การถูกทารุณกรรมทางเพศ</strong> ทั้งภายในเว็บไซต์ หรือทำให้เข้าถึงได้ภายนอกเว็บไซต์ (โปรดอ่านข้อ 6)</p>
                              </li>
                              <li className='bullet'>
                                <p className='bullet-txt'><strong>ระดับที่อนุโลมให้ได้คือบรรยายฉาก เปลื้องผ้า จูบ กอด ลูบคลำ และให้ข้ามฉากร่วมเพศไป</strong> (โปรดอ่านข้อ 6)</p>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className='section-row'>
                          <div className='li-head'>
									2 การใช้คำหยาบ </div>
                          <div className='li-description'>
                            <ul className='sub-bullet'>
                              <li className='bullet'>
                                <p className='bullet-txt'><strong>สามารถใช้คำหยาบได้บ้าง แต่ต้องมีจำนวนไม่มากเกินไป</strong> เช่น ความถี่บรรทัดเว้นบรรทัด โดยเฉพาะคำที่ไม่จำเป็นในการดำเนินเนื้อเรื่อง ยกเว้นสรรพนาม กู มึง อนุญาตให้ใช้ได้</p>
                              </li>
                              <li className='bullet'>
                                <p className='bullet-txt'>ไม่สามารถใช้คำหยาบ/คำสบถ ที่เกี่ยวกับเพศหรืออวัยวะเพศได้</p>
                              </li>
                              <li className='bullet'>
                                <p className='bullet-txt'>คำหยาบครอบคลุมทั้งคำหยาบปกติ และคำที่เป็นการเปลี่ยนตัวอักษร-พยัญชนะเพื่อทดแทนคำหยาบใดๆ มีค่าเท่าคำหยาบนั้นๆ</p>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className='section-row'>
                          <div className='li-head'>
									3 การใช้ข้อมูลลิขสิทธิ์ </div>
                          <div className='li-description'>
                            <div className='li-content'>การใช้ข้อมูลที่มีลิขสิทธิ์ เช่น ตัวละคร เนื้อหา รูปภาพ เพลง วีดีโอ ฯลฯ <strong>ต้องอยู่ในขอบเขตที่เจ้าของลิขสิทธิ์อนุญาตเท่านั้น</strong></div>
                          </div>
                        </li>
                        <li className='section-row'>
                          <div className='li-head'>
									4 เนื้อหาที่ขัดต่อกฏหมายของประเทศไทย </div>
                          <div className='li-description'>
                            <div className='li-content'>ไม่สามารถลงเนื้อหาที่ขัดต่อกฏหมายชัดเจน หรือที่แสดงเจตนาชักจูงให้ละเมิดกฎหมาย หรือชี้นำให้เห็นว่าการละเมิดกฎหมายเป็นสิ่งดี</div>
                          </div>
                        </li>
                        <li className='section-row'>
                          <div className='li-head'>
									5 เนื้อหาที่สร้างความเสียหายต่อบุคคลหรือสถาบัน </div>
                          <div className='li-description'>
                            <div className='li-content'>ไม่สามารถลงเนื้อหาที่เป็นเรื่องส่วนตัวที่มีการพาดพิงโดยไม่เหมาะสม หรือมีเนื้อหาที่ยั่วยุให้เกิดการทะเลาะวิวาท ทำให้เกิดความเสียหาย ความไม่สบายใจต่อบุคคลหรือสถาบัน</div>
                          </div>
                        </li>
                        <li className='section-row'>
                          <div className='li-head'>
									6 ไม่อนุญาตให้กระทำการใดๆ ที่ทำให้เข้าสู่เนื้อหาในข้อ 1-5 ในแหล่งอื่นๆ </div>
                          <div className='li-description'>
                            <ul className='sub-bullet'>
                              <li className='bullet'>
                                <p className='bullet-txt'>ไม่อนุญาตให้เปิดเผยวิธีเข้าถึงเนื้อหานั้น ในแหล่งอื่นๆ อย่างเป็นสาธารณะ เช่น แจกลิงก์เว็บไซต์ ลิงก์ดาวน์โหลด , แจกคีย์เวิร์ดค้นหาผ่าน Google, แจกรหัสผ่านเว็บ/กลุ่มปิด หรือแนะนำ Social Media ใดๆ ที่ใช้แจ้งวิธีเข้าถึงเนื้อหาเหล่านั้น</p>
                              </li>
                              <li className='bullet'>
                                <p className='bullet-txt'>นักเขียนมีสิทธิ์ในการส่งเนื้อหาผ่านช่องทางส่วนตัว (ที่ไม่เป็นสาธารณะ เช่น ข้อความลับ,อีเมล,แชท) โดยใช้วิจารณญาณเลือกผู้รับให้เหมาะสมกับเนื้อหา</p>
                              </li>
                            </ul>
                            <div className='li-content'><strong>การลงเนื้อหาที่ไม่เหมาะสมเกินขอบเขตที่กำหนดประเด็นใดประเด็นหนึ่ง จะมีโอกาสถูกพิจารณาแบนเพื่อระงับการเผยแพร่ในทันที สำหรับการลงเนื้อหาที่หมิ่นเหม่เกือบเกินขอบเขตที่กำหนด หากตรวจสอบพบจะได้รับการเตือนให้รีบแก้ไข หากเพิกเฉย หรือกระทำเพิ่มเติม อาจถูกพิจารณาแบนเช่นกัน</strong></div>
                          </div>
                        </li>
                      </ul>

                    </div>
                    <div className='tab-section'>
                      <div className='section-header'>การเฝ้าระวังผลงานที่ไม่เหมาะสม</div>
                      <div className='section-descript'><strong>ทีมงานจะมีการสุ่มตรวจผลงาน (ซึ่งอาจไม่ทั่วถึง)</strong> หากพบเห็นเนื้อหาไม่เหมาะสม ขอความกรุณานักอ่านช่วยกดปุ่มแจ้งผลงานนั้น ทีมงานจะพิจารณาข้อมูลที่ได้รับแจ้ง หากพบว่าไม่เหมาะสมจริงตามแนวทางที่กำหนด จะดำเนินการแบนต่อไป</div>
                    </div>
                    <div className='tab-section'>
                      <div className='section-header'>ทำอย่างไรเมื่อผลงานถูกแบน</div>

                      <ul className='section-content'>
                        <li className='section-row'>
                          <div className='li-head'>
									1 หากมีตอนหรือเรื่องถูกแบน </div>
                          <div className='li-description'>
                            <div className='li-content'>ให้ตรวจสอบเหตุผลในกล่องข้อความลับ รีบแก้ไขเนื้อหา กดแจ้งปลดแบน เพื่อให้ทีมงานตรวจสอบ (ใช้เวลาในการตรวจสอบ 3 วันทำการ ไม่นับรวมวันหยุดเสาร์ - อาทิตย์ และวันนักขัตฤกษ์)</div>
                          </div>
                        </li>
                        <li className='section-row'>
                          <div className='li-head'>
									2 ในกรณีที่นักเขียนคิดว่าทีมงานทำการแบนไม่เป็นธรรม </div>
                          <div className='li-description'>
                            <div className='li-content'>สามารถกดปุ่มร้องเรียน เพื่อส่งเรื่องให้ผู้บริหารพิจารณาว่าตรงตามมาตรฐานหรือไม่ ถ้าพบว่าไม่เป็นธรรมจริง ยินดีปลดแบนให้ทันที แต่ในกรณีที่ถูกต้องแล้ว จะทำการอธิบายเหตุผลอีกครั้ง และต้องรออีก 3 วัน หากต้องการร้องเรียนครั้งต่อไป</div>
                          </div>
                        </li>
                      </ul>

                    </div>
                    <div className='tab-section'>
                      <div className='section-header'>รูปแบบการแบนผลงาน</div>

                      <ul className='section-content'>
                        <li className='section-row'>
                          <div className='li-head'>
									1 มีเนื้อหาไม่เหมาะสมในตอน </div>
                          <div className='li-description'>
                            <ul className='sub-bullet'>
                              <li className='bullet'>
                                <p className='bullet-txt'>จะถูกแบนเฉพาะตอนนั้นๆ ไม่สามารถเข้าอ่านได้ชั่วคราว เมื่อทำการแก้ไขและปลดแบน จะใช้งานได้ปกติ</p>
                              </li>
                              <li className='bullet'>
                                <p className='bullet-txt'>ตอนอื่นๆ จะไม่ถูกแบน ใช้งานได้ปกติ</p>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className='section-row'>
                          <div className='li-head'>
									2 มีเนื้อหาไม่เหมาะสม 3 ตอนขึ้นไปพร้อมกัน หรือมีเนื้อหาไม่เหมาะสมที่สารบัญ </div>
                          <div className='li-description'>
                            <ul className='sub-bullet'>
                              <li className='bullet'>
                                <p className='bullet-txt'>จะถูกแบนทั้งเรื่อง ไม่สามารถเข้าหน้าสารบัญ และตอนทั้งหมดได้ชั่วคราว</p>
                              </li>
                              <li className='bullet'>
                                <p className='bullet-txt'>เมื่อทำการแก้ไขและปลดแบน จะใช้งานได้ปกติ</p>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className='section-row'>
                          <div className='li-head'>
									3 มีเนื้อหาเคยถูกแบนสะสมครบ 6 ตอน รวมถึงการกระทำผิดซ้ำ </div>
                          <div className='li-description'>
                            <ul className='sub-bullet'>
                              <li className='bullet'>
                                <p className='bullet-txt'>เคยถูกแบน (นับรวมตอนที่แก้ไขแล้ว) จนมียอดสะสมครบ 6 ตอน</p>
                              </li>
                              <li className='bullet'>
                                <p className='bullet-txt'>เจตนาทำผิดซ้ำ เช่น ปลดแบนแล้วใส่เนื้อหาเดิม หรือย้ายเนื้อหาไปลงที่อื่นพร้อมลิงก์ไป</p>
                              </li>
                              <li className='bullet'>
                                <p className='bullet-txt'>ทั้งสองกรณีจะถูกแบนทั้งเรื่องแบบถาวร ไม่สามารถแก้ไขหรือใช้งานได้อีก</p>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>

                    </div>
                    <div className='tab-section'>
                      <div className='section-header'>กฎการจัดอันดับท็อป</div>
                      <div className='section-descript'><strong>เนื่องจากเว็บไซต์ Dek-D.com มีผู้ใช้งานเป็นเยาวชนจำนวนมาก จึงขอพิจารณาความเหมาะสมของผลงานในส่วนของ </strong>เนื้อหาในหน้าสารบัญ, เนื้อหาในตอนย่อย, ชื่อเรื่อง, คำโปรย และภาพประกอบเรื่อง ด้วยแนวทางควบคุมดังนี้</div>

                      <ul className='section-content'>
                        <li className='section-row'>
                          <div className='li-head'>
									1 จัดอันดับตามยอดวิวสูงสุดประจำวัน </div>
                          <div className='li-description' />
                        </li>
                        <li className='section-row'>
                          <div className='li-head'>
									2 นิยายที่ถูกแบนเนื้อเรื่องตอนใดตอนหนึ่งจะหลุดจากอันดับท็อปชั่วคราว จนกว่าเนื้อหาจะได้รับการแก้ไขและปลดแบนแล้ว </div>
                          <div className='li-description' />
                        </li>
                        <li className='section-row'>
                          <div className='li-head'>
									3 นิยายเรื่องเดียวกันสามารถติดอันดับท็อปได้ทั้งในหมวดประจำของเรื่อง และหมวดรวม </div>
                          <div className='li-description' />
                        </li>
                        <li className='section-row'>
                          <div className='li-head'>
									4 เฉพาะนิยายที่ติดอันดับท็อปทีมงานขอพิจารณาความเหมาะสมในส่วนของ ชื่อเรื่อง, คำโปรย และภาพประกอบ โดยมีรายละเอียดดังนี้ </div>
                          <div className='li-description'>
                            <ul className='sub-bullet'>
                              <li className='bullet'>
                                <p className='bullet-txt'><strong>ชื่อเรื่อง</strong> จะต้องไม่ใช้คำหยาบ ภาษาที่มีความรุนแรง หรือแสดงความหมายทางเพศโจ่งแจ้งเกินไป รวมทั้งจะต้องไม่ระบุเรตนิยายเกินความเป็นจริง (ยกตัวอย่าง สาวใช้ร่านสวาท 18+ NC จัดเต็ม เป็นต้น)</p>
                              </li>
                              <li className='bullet'>
                                <p className='bullet-txt'><strong>คำโปรย</strong> จะต้องไม่ใช้คำหยาบ ภาษาที่มีความรุนแรง หรือชี้นำให้เข้าใจว่ามีเนื้อหาทางเพศ อันขัดต่อกติกาการลงนิยายภายในเว็บไซต์เด็กดีดอทคอม</p>
                              </li>
                              <li className='bullet'>
                                <p className='bullet-txt'><strong>รูปไอคอนประกอบนิยาย</strong> จะต้องไม่เป็นภาพโป๊เปลือย หรือส่อไปในทางอนาจาร หากทำผิดกติกาข้อใดข้อหนึ่ง นิยายเรื่องนั้นจะถูกถอดจากอันดับท็อปชั่วคราว โดยจะมีข้อความลับส่งไปแจ้งสาเหตุกับนักเขียนเพื่อให้นักเขียนดำเนินการปรับแก้ไข และหลังจากที่นักเขียนแก้ไขและส่งขอปลดแบนท็อปแล้ว
												ทีมงานจะใช้ระยะเวลาในการตรวจสอบประมาณ 3 วันทำการ (ไม่รวมวันเสาร์ อาทิตย์ และวันหยุดนักขัตฤกษ์) ทั้งนี้การพิจารณาความเหมาะสมจะขึ้นอยู่กับวิจารณญาณของทีมผู้ดูแลควบคุมนิยายประจำเว็บไซต์เด็กดีดอทคอม โดยมาตรการจัดการนิยายท็อปแบบใหม่จะมีผลดำเนินการตั้งแต่วันที่
												15 กันยายน 2559 นี้เป็นต้นไป</p>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className='section-row'>
                          <div className='li-head'>
									5 สำหรับนิยายแปลจะต้องแสดงหลักฐานการอนุญาตจากเจ้าของลิขสิทธิ์ตัวจริง หรือตัวแทนที่ถูกต้องให้เห็นชัดเจนในหน้านิยาย (สามารถแสดงได้ที่ข้อมูลของเรื่อง หรือแสดงในตอนหนึ่ง) ในกรณีที่ผู้แปลไม่มีหลักฐานแสดง หรือหลักฐานไม่ถูกต้อง ทีมงานจะปลดนิยายเรื่องดังกล่าวจากการจัดอันดับท็อป
									จนกว่าผู้แปลมีหลักฐานที่ถูกต้องมาแสดง </div>
                          <div className='li-description' />
                        </li>
                      </ul>

                    </div>
                  </div>
                </div>
              </div>
              <div className='form-footer'>
                <a onClick={() => closeModal()} className='btn-form-cancel'>ไม่ยอมรับ</a>
                <button onClick={() => allowPublish(novel.novelId, novel.chapterNumber)} className='btn-flat btn-green btn-form-submit' type='submit'><i className='fa fa-check' /> ยอมรับ</button>
              </div>
            </div>
          </div>
    )
}

