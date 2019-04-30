import React from 'react';
import './Paginate.scss';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Paginate = (props) => (
  <ReactPaginate
    pageCount={20}
    pageRangeDisplayed={4}
    marginPagesDisplayed={2}
    nextLabel={(<FontAwesomeIcon icon="angle-right"/>)}
    previousLabel={(<FontAwesomeIcon icon="angle-left"/>)}
    containerClassName="Paginate"
    breakClassName="Paginate__Break"
    pageClassName="Paginate__Page"
    pageLinkClassName="Paginate__PageLink"
    activeClassName="Paginate__Page--active"
    previousClassName="Paginate__Previous"
    previousLinkClassName="Paginate__PreviousLink"
    nextClassName="Paginate__Next"
    nextLinkClassName="Paginate__NextLink"
    disabledClassName="Paginate__Button--disabled"
    {...props}
  />
);

Paginate.propTypes = {
  pageCount: PropTypes.number,
  onPageChange: PropTypes.func,
  forcePage: PropTypes.number
};

export default Paginate
