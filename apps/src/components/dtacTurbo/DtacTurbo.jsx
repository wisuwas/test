import React from 'react';
import InfoBox from '../infoBox/InfoBox';
import './DtacTurbo.scss';

const data = [
  {
    title: 'ใหญ่กว่า',
    infoItems: [
      {
        topic: 'คลื่นความถี่ 60 MHz กว้างและใหญ่ที่สุดของไทย',
        description: 'ดีแทคให้บริการบนคลื่น 2300 MHz ที่กว้างถึง 60 MHz ซึ่งกว้างที่สุดในประเทศไทยทำให้ลูกค้าได้รับประสบการณ์การใช้อินเทอร์เน็ตที่ไหลลื่นที่สุด ตอบสนองทุกความต้องการ'
      }
    ],
    bgContentImage: '/static/img/bg-1.jpg',
    sideImage: '/static/img/section1.jpg'
  },
  {
    title: 'ล้ำกว่า',
    infoItems: [
      {
        topic: 'รายเดียวที่มีเทคโนโลยี TDD เพิ่มช่องสัญญาณ ช่วงการใช้งานหนาเเน่น',
        description: 'ในหลายประเทศทั่วโลก นิยมนำคลื่นใหม่นี้มาใช้งานร่วมกับเทคโนโลยีล้ำสมัยอย่าง TDD - Time Division Duplex (ระบบจัดสรรการใช้ช่องสัญญาณตามช่วงเวลา) ที่จะช่วยให้ดีแทคสามารถปรับเพิ่มความสามารถ ในการรองรับการใช้งานของลูกค้าจำนวนมาก ในเวลาเดียวกัน ซึ่งดีแทคภูมิใจที่ได้นำมาให้บริการเป็นรายแรกและรายเดียวในประเทศไทย'
      }
    ],
    bgContentImage: '/static/img/bg-2.jpg',
    sideImage: '/static/img/section2.jpg'
  },
  {
    title: 'ด้วยเทคโนโลยี 4x4 MIMO',
    infoItems: [
      {
        description: 'นอกจากนี้ดีแทคยังนำเทคโนโลยี 4x4 MIMO ซึ่งเทียบได้กับ การยกระดับทางด่วนพิเศษเพิ่มขึ้นถึง 4 ชั้น ช่วยลดความแออัด ของการใช้งาน จนทำให้สมาร์ทโฟนของคุณทำงานได้อย่าง เต็มประสิทธิภาพ'
      }
    ],
    bgContentImage: '/static/img/bg-3.jpg',
    sideImage: '/static/img/section3.jpg'
  },
  {
    title: 'ลื่นกว่า',
    infoItems: [
      {
        topic: 'ประสบการณ์รับส่งข้อมูลผ่านมือถือ เร็วกว่า ลื่นกว่า',
        description: 'ด้วยความมุ่งมั่นพัฒนาบริการของเรา ดีแทคได้มีการลงนามเป็นคู่ค้าทางธุรกิจร่วมกับ ทีโอที เพื่อนำคลื่นความถี่ 2300 MHz มาให้บริการเป็นครั้งแรกในประเทศไทยเพื่อมอบประสบการณ์ที่ดีที่สุดให้กับลูกค้าของเรา'
      }
    ],
    bgContentImage: '/static/img/bg-4.jpg',
    sideImage: '/static/img/section4.jpg'
  },
];

const DtacTurbo = () => (
  <div className="DtacTurbo">
    <img className="Banner" src="/static/img/reward-banner-2.jpg" />
    <div className="DtacTurbo__Container">
      {
        data.map((item, i) => {
          const isEven = i % 2 === 0;
          return (
            <div className={`DtacTurbo__Row ${isEven ? 'DtacTurbo__Row--even' : ''}`} key={`info-turbo-${i}`}>
              <div className={`DtacTurbo__Column Content ${isEven ? 'Content--even' : ''}`} style={{ backgroundImage: `url('${item.bgContentImage}')`}}>
                <div className={`Content__Container ${isEven ? 'Content__Container--left' : 'Content__Container--right'}`}>
                  <InfoBox titleColor="blue" infoItems={item.infoItems} title={item.title}/>
                </div>
              </div>
              <div className="DtacTurbo__Column DtacTurbo__ImageContainer">
                <img className="DtacTurbo__Image" src={item.sideImage}/>
              </div>
            </div>
          )
        })
      }
    </div>
  </div>
);

export default DtacTurbo
