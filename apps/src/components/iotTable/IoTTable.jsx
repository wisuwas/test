import React from 'react';
// import './IoTTable.scss';
import { RoundedLinkButton } from '../button/RoundedButton';
import { Sites } from '../../helpers/Pages';

const registerLink = Sites.OCCLink;
const DMessageRegister = Sites.DMessageRegister;

const IoTTable = () => {
    return(                
        <div className="wrap-table100">

            <div className="table">
                <div className="row header">
                    <div className="cell">
                        ค่าบริการเหมาจ่าย<br></br>ไม่รวม VAT (บาท/ปี)
                    </div>
                    <div className="cell">
                        อินเทอร์เน็ต<br></br>(4G/3G)
                    </div>
                    <div className="cell space-text">
                        ระยะเวลาการใช้งาน
                    </div>
                    <div className="cell abc space-text">
                        สมัครแพ็กเกจ
                    </div>
                </div>

                <div className="row">
                    <div className="cell" data-title="ค่าบริการเหมาจ่ายไม่รวม VAT (บาท/ปี)">
                        420
                    </div>
                    <div className="cell" data-title="อินเทอร์เน็ต (4G/3G)">
                        10 MB
                    </div>
                    <div className="cell-merge" data-title="ระยะเวลาการใช้งาน">
                        12 เดือน
                    </div>
                    <div className="cell-merge-pack" data-title="สมัครแพ็กเกจ">
                        <RoundedLinkButton href={registerLink}>
                            <button className="promo-button">
                                สมัครออนไลน์
                            </button>
                            <img className="promo-arrow" src='/static/img/arrow-next.svg'/>
                        </RoundedLinkButton>                
                    </div>
                </div>

                <div className="row">
                    <div className="cell" data-title="ค่าบริการเหมาจ่ายไม่รวม VAT (บาท/ปี)">
                        540
                    </div>
                    <div className="cell" data-title="อินเทอร์เน็ต (4G/3G)">
                        100 MB
                    </div>
                    <div className="cell-merge-text" data-title="ระยะเวลาการใช้งาน">
                        12 เดือน
                    </div>
                    <div className="cell" data-title="สมัครแพ็กเกจ">
                            <RoundedLinkButton href={DMessageRegister}>
                                <button className="promo-button">
                                    ให้เจ้าหน้าที่ติดต่อกลับ
                                </button>
                                <img className="promo-arrow" src='/static/img/arrow-next.svg'/> 
                            </RoundedLinkButton>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default IoTTable;
