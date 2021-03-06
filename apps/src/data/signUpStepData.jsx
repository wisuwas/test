import React from 'react';

export const signUpStepData = {
  bannerImage: '/static/img/Dtac_SC_WebBanner2880x936.jpg',
  infoBoxes: [
    {
      title: 'วิธีสมัครแพ็กเกจ SME สบายใจ',
      infoItems: [
        {
          topic: 'เปิดเบอร์และสมัครแพ็กเกจ SME สบายใจ เป็นเรื่องง่ายๆ เลือกสมัครได้หลายช่องทางดังนี้',
          list: {
            items: [
              [
                'สมัครที่ศูนย์บริการ dtac ตรวจสอบสาขาใกล้คุณ ',
                (
                  <a key='item.1.1' href="https://www.dtac.co.th/help/store-locations.html">{'คลิกที่นี่'}</a>
                )
              ],
              [
                'สมัครเองออนไลน์ เพียงเลือกแพ็กเกจและเบอร์ที่ต้องการ (ไม่มีการจำกัดจำนวนแพ็กเกจ) กรอกข้อมูลและอัปโหลดเอกสารที่จำเป็น ชำระเงินแล้วก็รอรับซิมได้เลย หากต้องการสมัคร ',
                (
                  <a key='item.1.2' href="https://smeonline.dtac.co.th/">{'คลิกที่นี่'}</a>
                )
              ],
              [
                'หรือหากต้องการปรึกษากับเจ้าหน้าที่ก่อน เพียงกรอกข้อมูลเบื้องต้น เจ้าหน้าที่จะติดต่อกลับภายในวันทำการถัดไปเพื่อช่วยเหลือและประสานงานคุณทุกขั้นตอนจนเสร็จสิ้น ต้องการกรอกข้อมูล ',
                (
                  <a key='item.1.3' href="/customer/register">{'คลิกที่นี่'}</a>
                )
              ]
            ]
          }
        },
      ],
      fontSize: 'l'
    },
    {
      title: 'อัตราค่าบริการ',
      infoItems: [
        {
          topic: 'แพ็กเกจ SME สบายใจ ออกแบบมาให้เข้าใจง่าย เน้นการโทรได้ไม่จำกัดตลอด 24 ชม.',
          description: [
            'เพื่อให้ธุรกิจของคุณไม่พลาดทุกการติดต่อสำคัญ สบายใจยิ่งขึ้นเพราะทุกแพ็กเกจจะไม่ได้รับข้อความ SMS โฆษณากวนใจที่อาจก่อค่าใช้จ่ายส่วนเกิน และรับสิทธิพิเศษ dtac reward ทันทีตามที่กำหนดในแต่ละแพ็กเกจ ตรวจสอบสิทธิ์ dtac reward ',
            (
              <a key='item.2.1' href="/dtac-reward">{'คลิกที่นี่'}</a>
            )
          ],
          imageContainer: {
            image: '/static/img/price-chart.png',
            imageStyle: {
              maxWidth: 820,
              width: '100%'
            }
          }
        },
      ],
      fontSize: 'l'
    },
    {
      title: 'รู้ไว้สบายใจ',
      infoItems: [
        {
          topic: 'รายละเอียดของแพ็กเกจ SME สบายใจ',
          list: {
            items: [
              'สำหรับแพ็กเกจ SME สบายใจ 299 รับสิทธิ์โทรฟรีทุกเครือข่าย 400 นาที เศษของนาทีคิดเป็น 1 นาที และสามารถโทรฟรีในกลุ่มได้ไม่อั้น ตลอด 24 ชั่วโมง (ไม่จำกัดเวลาการโทร)',
              'สำหรับแพ็กเกจ SME สบายใจ 449 – 1,299 รับสิทธิ์โทรฟรีทุกเครือข่าย และโทรฟรีในกลุ่มได้ไม่อั้น ตลอด 24 ชั่วโมง (ไม่จำกัดเวลาการโทร)',
              'รับสิทธิ์ใช้งานอินเทอร์เน็ตต่อเนื่อง ด้วย Edge/3G/4G ความเร็วสูงสุดตามปริมาณที่กำหนดในแต่ละแพ็กเกจ และเมื่อครบจำนวนใช้งานต่อที่ความเร็วสูงสุด 384 Kbps',
              'อัตราค่าบริการส่วนเกินจากแพ็กเกจ ค่าโทร 0.99 บาท/นาที ส่งข้อความ 2 บาท/SMS 5 บาท/MMS (ไม่รวม VAT)',
              'ทุกแพ็กเกจ SME สบายใจ จะไม่ได้รับข้อความ SMS โฆษณาจากผู้ให้บริการเนื้อหาผ่านโทรศัพท์มือถือซึ่งอาจก่อให้เกิดค่าใช้จ่ายส่วนเกิน',
              [
                'สำหรับลูกค้าที่สมัครใช้บริการแพ็กเกจ SME สบายใจ จะได้รับสิทธิพิเศษ dtac reward ตามที่กำหนดในแต่ละแพ็กเกจทันที ตรวจสอบสิทธิ์ dtac reward ',
                (
                  <a key='item.3.1' href="/package#main">{'คลิกที่นี่'}</a>
                )
              ],
              [
                'สำหรับลูกค้าที่ต้องการใช้งานต่อเนื่องขณะเดินทางไปต่างประเทศ สามารถเปิดใช้บริการโรมมิ่ง (Roaming) เพิ่มเติมได้ ศึกษารายละเอียดและอัตราค่าบริการ ',
                (
                  <a key='item.3.2' href="https://www.dtac.co.th/ir/">{'คลิกที่นี่'}</a>
                ),
                ' หรือติดต่อ dtac SME Care โทร. *1806'
              ]
            ]
          }
        },
      ],
      fontSize: 'l'
    },
    {
      title: 'บริการเสริมดีๆ เพื่อธุรกิจคุณ',
      infoItems: [
        {
          topic: 'บริการ dMessage สำหรับส่ง SMS ได้พร้อมกันครั้งละหลายเบอร์',
          description: [
            'dMassage คือบริการส่ง SMS ไปยังเบอร์โทรศัพท์มือถือพร้อมกันครั้งละหลายเบอร์ สามารถส่งได้ทุกเครือข่าย ช่วยให้การสื่อสารของธุรกิจคุณนั้นง่าย ประหยัดงบ แถมยัง ดูเป็นมืออาชีพมากขึ้น ศึกษารายละเอียดเพิ่มเติมและสมัครบริการเสริม dMessage ',
            (
              <a key='item.4.1' href="https://dmessage.dtac.co.th/CorpSMEWeb/th/login.htm">{'คลิกที่นี่'}</a>
            )
          ]
        }
      ],
      fontSize: 'l'
    },
    {
      title: 'ยังมีข้อสงสัยเพิ่มเติม ?',
      infoItems: [
        {
          topic: 'dtac ยินดีให้ความช่วยเหลือคุณ ตามช่องทางดังนี้',
          description: 'หากมีข้อสงสัยเพิ่มเติม คุณสามารถติดต่อได้ที่ dtac call center โทร. 1678 (ตลอด 24 ชั่วโมง) หรือติดต่อเจ้าหน้าที่ฝ่ายขาย dtac SME โดยตรงได้ที่ ' +
            'โทร. 088-188-1678 และสำหรับลูกค้าปัจจุบันของ dtac SME สามารถติดต่อ dtac SME care โทร.  *1806'
        }
      ],
      fontSize: 'l'
    }
  ]
};
