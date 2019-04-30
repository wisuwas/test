import React from 'react';
import './PackageTable.scss';
import { RoundedLinkButton } from '../button/RoundedButton';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { generateClassName } from '../../helpers/generateClassName';
import { BadgeTableCell } from '../styledElements';

const getTableCellChildren = (row, col) => {
  if (!row[col]) return null;

  switch (col) {
    case 'fee':
      if (row.discountFee) {
        return [
          <span key={`actual`} className={`Fee Fee--actual`}>
            {row[col]}
          </span>,
          <span key={`discount`} className={`Fee Fee--discount`}>
            {row.discountFee}
          </span>,
        ];
      }
      return row[col];
    case 'registerLink':
      const btns = row[col].btns;
      const hasManyBtns = Array.isArray(btns);

      const renderRegisterLink = (data, key) => (
        <RoundedLinkButton
          className="RegisterButton"
          href={data ? data.link : undefined}
          key={`RegisterButton_${key}`}
          style={data.style}
        >
          {data.text}
          <FontAwesomeIcon className="RegisterButton__Icon" size="sm" icon='angle-right'/>
        </RoundedLinkButton>
      );

      if (hasManyBtns) {
        return (
          <React.Fragment>
            {
              btns.map(renderRegisterLink)
            }
          </React.Fragment>
        )
      }

      return renderRegisterLink(btns, 0);
    case 'package':
      return row[col].toUpperCase();
    default:
      return (
        <div  style={{ marginTop: row[col].offsetTop }}>
          <div style={{ fontSize: row[col].textSize }}>
            {row[col].text || row[col]}
          </div>
          {
            row[col].subText &&
            <div style={{ fontSize: row[col].subTextSize, marginTop: row[col].subTextOffsetTop }}>
              {row[col].subText}
            </div>
          }
        </div>
      );
  }
};

const getTableHeadCellChildren = (col, columnText) => {
  switch (col) {
    case 'fee': {
      return columnText[col] + (columnText.discountFee ? columnText.discountFee : '');
    }
    default: {
      return columnText[col];
    }
  }
};

const getHeadModifier = (col, colText, colConfig) => {
  if (colConfig && colConfig[col]) {
    return colConfig[col].head;
  }

  return {
    [col]: true,
    discount: col === 'fee' &&
      colText &&
      colText.discountFee
  }
};

const getCellModifier = (col, colConfig) => {
  if (colConfig && colConfig[col]) {
    return colConfig[col].body;
  }

  return col;
};

const PackageTable = (props) => {
  return (
    <div className={
      generateClassName('PackageTable__Container', { paddingForLabel: props.paddingForLabel })
    }>
      <table className={
        generateClassName('PackageTable__Table', { large: props.large })
      }>
        <thead className="PackageTable__Head">
          <tr className="PackageTable__HeadRow">
            {
              props.columns.map((col, i) => (
                <th
                  className={
                    generateClassName(
                      'PackageTable__HeadCell',
                      getHeadModifier(col, props.columnText, props.columnConfig)
                    )}
                  key={`th-${i}`}
                >
                  {getTableHeadCellChildren(col, props.columnText)}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody className={`PackageTable__RowGroup`}>
          {
            props.rowGroups.map((rowGroup, rg) => (
              rowGroup.rows.map((row, r, rows) => (
                <tr
                  className={`PackageTable__Row`}
                  key={`row-${rg}-${r}`}
                >
                  {
                    props.columns.map((col, c) => (
                      row[col] &&
                        <BadgeTableCell
                          className={
                            generateClassName(
                              'PackageTable__Cell',
                              getCellModifier(col, props.columnConfig)
                            )}
                          rowSpan={row[col].rowSpan}
                          badge={rowGroup.name}
                          startBadge={c === 0 && r === 0}
                          rowLen={rows.length}
                          hasRibbon={rowGroup.hasRibbon}
                          key={`cell-${c}`}
                        >
                          {getTableCellChildren(row, col)}
                        </BadgeTableCell>
                    ))
                  }
                </tr>
              ))
            ))
          }
        </tbody>
      </table>
    </div>
  )
};

PackageTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string),
  columnText: PropTypes.shape({
    package: PropTypes.string,
    discountFee: PropTypes.string,
    fee: PropTypes.string,
    dataSize: PropTypes.string,
    extFreeCall: PropTypes.string,
    intFreeCall: PropTypes.string,
    multiSim: PropTypes.string,
    registerLink: PropTypes.string
  }),
  rowGroups: PropTypes.arrayOf(
    PropTypes.shape({
      package: PropTypes.string,
      discountFee: PropTypes.string,
      fee: PropTypes.string,
      dataSize: PropTypes.string,
      extFreeCall: PropTypes.string,
      intFreeCall: PropTypes.string,
      multiSim: PropTypes.string,
      registerLink: PropTypes.shape({
        link: PropTypes.string,
        text: PropTypes.string
      })
    })
  ),
  large: PropTypes.bool
};

export default PackageTable;
