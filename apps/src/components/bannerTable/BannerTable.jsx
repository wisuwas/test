import { RoundedLinkButton } from '../button/RoundedButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import './BannerTable.scss';
import { Sites } from '../../helpers/Pages';

const BannerTable = () => {
  return (
    <table className="BannerTable">
      <tbody>
        <tr className="BannerTable__Row">
          <th className="BannerTable__Head BannerTable__dLogo br-tl br-bl" rowSpan={2}>
            <img className="BannerTable__dImageLogo" src='/static/img/dMessage/dm-icon.png'/>
            <div>แพ็กเกจเสริม</div>
            <div>SME dMessage</div>
          </th>
          <th className="BannerTable__Head">ราคา</th>
          <th className="BannerTable__Head br-tr">SMS</th>
        </tr>
        <tr className="BannerTable__Row">
          <td className="BannerTable__Cell">
            175 บาท
          </td>
          <td className="BannerTable__Cell br-br">
            250 ข้อความ
            <div className="BannerTable__RegisterButtonContainer">
              <RoundedLinkButton className="BannerTable__RegisterButton" href={Sites.DMessageRegister}>
                สมัคร
                <FontAwesomeIcon className="BannerTable__RegisterIcon" size="sm" icon='angle-right'/>
              </RoundedLinkButton>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BannerTable;
