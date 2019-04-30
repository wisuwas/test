import React from 'react';
import './PrivilegeContainer.scss';
import { DetailDoubleLine, DetailInline } from '../privilegeDetail/PrivilegeDetail';
import { generateClassName } from '../../helpers/generateClassName';
import withTerm from '../../hoc/withTerm/withTerm';

const PrivilegeContainer = () => (
  <div className="PrivilegeContainer">
    <div className="ImageHeader">
      <img className="ImageHeader__Image" src="/static/img/reward-banner-page.jpg"/>
    </div>
    <div className="PrivilegeCategory">
      <div className="PrivilegeCategory__HeaderContainer">
        <h3 className="PrivilegeCategory__Header">
          ลูกค้่า dtac SME ได้รับสิทธิ dtac Reward เช่นเดียวกับลูกค้าบุคคล และพิเศษกว่า ด้วยสิทธิพิเศษสำหรับ SME
        </h3>
      </div>
      <div className="PrivilegeCategory__Container">
        <img className="PrivilegeCategory__Image" src="/static/img/blue.png"/>
        <img className="PrivilegeCategory__Image" src="/static/img/gold.png"/>
        <img className="PrivilegeCategory__Image" src="/static/img/silver.png"/>
      </div>
      <div className="PrivilegeCategory__Footer">
        ลูกค้่า dtac SME แพ็กเกจอื่นๆ ตรวจสอบสถานะ dtac Reward โทร.*140# ฟรี
      </div>
    </div>
    <div className="Privilege">
      <div className="Privilege__Container">
        <div className="Privilege__HeaderContainer">
          <h2 className="Privilege__Header">
            สิทธิพิเศษดีๆสำหรับลูกค้า dtac SME
          </h2>
        </div>
        <ul className="PrivilegeList__Container">
          {
            data.map((item, i) => (
              <PrivilegeListItemWithTerm
                {...item}
                key={`list-item-${i}`}
              />
            ))
          }
        </ul>
      </div>
    </div>
  </div>
);

const PrivilegeListItem = (props) => (
  <li
    className={generateClassName('PrivilegeList__Item', { full: props.full })}
  >
    <div className="PrivilegeList__Term">
    {props.termComponent}
    </div>
    <div className="PrivilegeList__ImageContainer">
      <img className="PrivilegeList__Image" src={props.image}/>
    </div>
    <div className="PrivilegeList__DetailContainer">
      {
        getDetailContainer(props.details, props.full)
      }
    </div>
  </li>
);

const PrivilegeListItemWithTerm = withTerm(PrivilegeListItem, 'เงื่อนไข', true);

const getDetailContainer = (details, full) => {
  return details.map((detail, i) => {
    switch (detail.type) {
      case 2:
        return (<DetailDoubleLine {...detail} key={`detail-${i}`} index={i} full={full}/>);
      case 1:
      default:
        return (
          <DetailInline {...detail} key={`detail-${i}`} index={i} full={full} />
        );
    }
  });
};

const data = [
  {
    image:'/static/img/rewards/reward-seekster.png',
    full: true,
    terms: [
      '1 สิทธิ์ / เบอร์ / บัญชีผู้ใช้ / แคมเปญ',
      'รหัสคูปองส่วนลดนี้สามารถใช้ได้กับบริการล้างแอร์ และบริการทำความสะอาดทั่วไปเท่านั้น',
      'สิทธิพิเศษนี้สำหรับลูกค้าดีแทคทุกประเภท ที่จองบริการผ่านเว็บไซค์หรือ แอปพลิเคชั่นของ Seekster',
      'รายการส่วนลดไม่สามารถโอน/เปลี่ยน/แลก/ทอนเป็นเงินสดได้ และไม่สามารถใช้ร่วมกับรหัสคูปองส่วนลด อื่นได้',
      'บริษัทฯ ขอสงวนสิทธิ์ในการเปลี่ยนแปลง หรือ ยกเลิกรายละเอียดหรือเงื่อนไข หรือ สิทธิประโยชน์ใดๆของรายการ โดยไม่ต้องแจ้งให้ทราบล่วงหน้า กรณีมีข้อพิพากคำตัดสินของ Seekster ถือเป็นที่สิ้นสุด',
      'สอบถามรายละเอียดเพิ่มเติมอื่นๆ ติดต่อ Seekster Customer Support โทร. 02-080-3939',
    ],
    details: [
      {
        type: 1,
        privilege: ['blue'],
        text: (
          <React.Fragment>
            รับส่วนลด
            <span className="PrivilegeList__Text--highLight">
              100.-
            </span>
            เมื่อใช้บริการล้างแอร์หรือทำความสะอาตบ้านจาก Seekster
          </React.Fragment>
        ),
        callCode: "*140*191#"
      },
      {
        type: 1,
        privilege: ['gold', 'silver'],
        text: (
          <React.Fragment>
            รับส่วนลด
            <span className="PrivilegeList__Text--highLight">
              50.-
            </span>
            เมื่อใช้บริการล้างแอร์หรือทำความสะอาตบ้านจาก Seekster
          </React.Fragment>
        ),
        callCode: "*140*192#"
      }
    ]
  },
  {
    image:'/static/img/rewards/reward-top-value.png',
    full: false,
    terms: [
      '1 สิทธิ์ / เบอร์ / บัญชีผู้ใช้ / แคมเปญ',
      'รายการส่วนลดไม่สามารถโอน/เปลี่ยน/แลก/ทอนเป็นเงินสดได้ และไม่สามารถใช้ร่วมกับรหัสคูปองส่วนลด อื่นได้',
      'บริษัทฯ ขอสงวนสิทธิ์ในการเปลี่ยนแปลง หรือ ยกเลิกรายละเอียดหรือเงื่อนไข หรือ สิทธิประโยชน์ใดๆของรายการ โดยไม่ต้องแจ้งให้ทราบล่วงหน้า กรณีมีข้อพิพากคำตัดสินของ Top Value ถือเป็นที่สิ้นสุด',
    ],
    details: [
      {
        type: 2,
        privilege: ['all'],
        text: (
          <React.Fragment>
            รับส่วนลดเพิ่ม
            <span className="PrivilegeList__Text--highLight">
              12%
            </span>
            เมื่อซ๊อปออนไลน์ครบ 499.- ขึ้นไป (ส่วนลดสูงสุด 400.-)
          </React.Fragment>
        ),
        callCode: "*140*154#"
      },
    ]
  },
  {
    image:'/static/img/rewards/reward-home-pro.png',
    full: false,
    terms: [
      '1 สิทธิ์ / เบอร์ / บัญชีผู้ใช้ / แคมเปญ',
      'รายการส่วนลดไม่สามารถโอน/เปลี่ยน/แลก/ทอนเป็นเงินสดได้ และไม่สามารถใช้ร่วมกับรหัสคูปองส่วนลด อื่นได้',
      'บริษัทฯ ขอสงวนสิทธิ์ในการเปลี่ยนแปลง หรือ ยกเลิกรายละเอียดหรือเงื่อนไข หรือ สิทธิประโยชน์ใดๆของรายการ โดยไม่ต้องแจ้งให้ทราบล่วงหน้า กรณีมีข้อพิพากคำตัดสินของ Homepro Online ถือเป็นที่สิ้นสุด',
    ],
    details: [
      {
        type: 2,
        privilege: ['all'],
        text: (
          <React.Fragment>
            รับส่วนลดสูงสุด
            <span className="PrivilegeList__Text--highLight">
              500.-
            </span>
            เมื่อซ๊อปครบ 7000 บาทขึ้นไป
          </React.Fragment>
        ),
        callCode: "*140*823#"
      },
    ]
  },
  {
    image:'/static/img/rewards/reward-dhl.png',
    full: false,
    terms: [
      '1 สิทธิ์ / เบอร์ / บัญชีผู้ใช้ / แคมเปญ',
      'รายการส่วนลดไม่สามารถโอน/เปลี่ยน/แลก/ทอนเป็นเงินสดได้ และไม่สามารถใช้ร่วมกับรหัสคูปองส่วนลด อื่นได้',
      'บริษัทฯ ขอสงวนสิทธิ์ในการเปลี่ยนแปลง หรือ ยกเลิกรายละเอียดหรือเงื่อนไข หรือ สิทธิประโยชน์ใดๆของรายการ โดยไม่ต้องแจ้งให้ทราบล่วงหน้า กรณีมีข้อพิพากคำตัดสินของ DHL ถือเป็นที่สิ้นสุด',
    ],
    details: [
      {
        type: 1,
        privilege: ['all'],
        text: (
          <React.Fragment>
            รับส่วนลด
            <span className="PrivilegeList__Text--highLight">
              200.-
            </span>
            สำหรับส่งพัสดุระหว่างประเทศ
          </React.Fragment>
        ),
        callCode: "*140*851#",
        alignStart: true
      },
      {
        type: 1,
        privilege: ['all'],
        text: (
          <React.Fragment>
            รับส่วนลด
            <span className="PrivilegeList__Text--highLight">
              100.-
            </span>
            สำหรับส่งพัสดุระหว่างประเทศ
          </React.Fragment>
        ),
        callCode: "*140*850#",
        alignStart: true
      },
    ]
  },
  {
    image:'/static/img/rewards/reward-net-design.png',
    full: false,
    terms: [
      '1 สิทธิ์ / เบอร์ / บัญชีผู้ใช้ / แคมเปญ',
      'รายการส่วนลดไม่สามารถโอน/เปลี่ยน/แลก/ทอนเป็นเงินสดได้ และไม่สามารถใช้ร่วมกับรหัสคูปองส่วนลด อื่นได้',
      'บริษัทฯ ขอสงวนสิทธิ์ในการเปลี่ยนแปลง หรือ ยกเลิกรายละเอียดหรือเงื่อนไข หรือ สิทธิประโยชน์ใดๆของรายการ โดยไม่ต้องแจ้งให้ทราบล่วงหน้า กรณีมีข้อพิพากคำตัดสินของ Net Design ถือเป็นที่สิ้นสุด',
    ],
    details: [
      {
        type: 2,
        privilege: ['all'],
        text: (
          <React.Fragment>
            รับส่วนลดสูงสุด
            <span className="PrivilegeList__Text--highLight">
              500.-
            </span>
            เมื่อซ๊อปครบ 7000 บาทขึ้นไป
          </React.Fragment>
        ),
        callCode: "*140*596#"
      },
    ]
  },
  {
    image:'/static/img/rewards/reward-coffee-club.png',
    full: false,
    terms: [
      '1 สิทธิ์ / เบอร์ / บัญชีผู้ใช้ / แคมเปญ',
      'รายการส่วนลดไม่สามารถโอน/เปลี่ยน/แลก/ทอนเป็นเงินสดได้ และไม่สามารถใช้ร่วมกับรหัสคูปองส่วนลด อื่นได้',
      'บริษัทฯ ขอสงวนสิทธิ์ในการเปลี่ยนแปลง หรือ ยกเลิกรายละเอียดหรือเงื่อนไข หรือ สิทธิประโยชน์ใดๆของรายการ โดยไม่ต้องแจ้งให้ทราบล่วงหน้า กรณีมีข้อพิพากคำตัดสินของ Coffee Club ถือเป็นที่สิ้นสุด',
    ],
    details: [
      {
        type: 1,
        privilege: ['blue'],
        text: (
          <React.Fragment>
            รับส่วนลด
            <span className="PrivilegeList__Text--highLight">
              50%
            </span>
            สำหรับ Cold Brew ทุกเมนู
          </React.Fragment>
        )
      },
      {
        type: 1,
        privilege: ['blue', 'gold'],
        text: (
          <React.Fragment>
            ลด
            <span className="PrivilegeList__Text--highLight">
              200.-
            </span>
            เมื่อรับประทานภายในร้าน
          </React.Fragment>
        )
      }
    ]
  },
  {
    image:'/static/img/rewards/reward-skootar.png',
    full: false,
    terms: [
      '1 สิทธิ์ / เบอร์ / บัญชีผู้ใช้ / แคมเปญ',
      'รายการส่วนลดไม่สามารถโอน/เปลี่ยน/แลก/ทอนเป็นเงินสดได้ และไม่สามารถใช้ร่วมกับรหัสคูปองส่วนลด อื่นได้',
      'บริษัทฯ ขอสงวนสิทธิ์ในการเปลี่ยนแปลง หรือ ยกเลิกรายละเอียดหรือเงื่อนไข หรือ สิทธิประโยชน์ใดๆของรายการ โดยไม่ต้องแจ้งให้ทราบล่วงหน้า กรณีมีข้อพิพากคำตัดสินของ Skootar ถือเป็นที่สิ้นสุด',
    ],
    details: [
      {
        type: 1,
        privilege: ['blue'],
        text: (
          <React.Fragment>
            ใช้งานเดือนละ 1 ครั้ง ฟรี
            <span className="PrivilegeList__Text--highLight">
              300.-
            </span>
          </React.Fragment>
        ),
        callCode: "*140*934#",
      },
      {
        type: 1,
        privilege: ['blue'],
        text: (
          <React.Fragment>
            รับส่วนลด
            <span className="PrivilegeList__Text--highLight">
              15%
            </span>
            สำหรับการใช้งานครั้งต่อไป
          </React.Fragment>
        ),
        callCode: "*140*730#",
      },
      {
        type: 1,
        privilege: ['gold', 'silver'],
        text: (
          <React.Fragment>
            ใช้งาน 2 ครั้ง ส่วนลด
            <span className="PrivilegeList__Text--highLight">
              50.-
            </span>
          </React.Fragment>
        ),
        callCode: "*140*731#",
      },
      {
        type: 1,
        privilege: ['gold', 'silver'],
        text: (
          <React.Fragment>
            ลด
            <span className="PrivilegeList__Text--highLight">
              10%
            </span>
            สำหรับการใช้งานครั้งต่อไป
          </React.Fragment>
        ),
        callCode: "*140*730#",
      }
    ]
  },
];

export default PrivilegeContainer
