import React from 'react';
import './ReportCard.scss';
import PackageTable from '../packageTable/PackageTable';
import Paginate from '../paginate/Paginate';
import PropTypes from 'prop-types';

const ReportCard = (props) => (
  <div className="ReportCard">
    {
      props.header &&
      <div className="ReportCard__Header">
        {props.header}
      </div>
    }
    {
      props.tableData.rowGroups[0].rows &&
        <React.Fragment>
          <div className="ReportCard__Table">
            <PackageTable {...props.tableData} large={true}/>
          </div>
          {
            props.paginate.pageCount > 1 &&
              <div className="ReportCard__PageNav">
                <Paginate {...props.paginate}/>
              </div>
          }
        </React.Fragment>
    }
  </div>
);

ReportCard.propTypes = {
  header: PropTypes.node,
  tableData: PropTypes.shape(PackageTable.propTypes),
  paginate: PropTypes.shape(Paginate.propTypes)
};

export default ReportCard
