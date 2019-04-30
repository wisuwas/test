import React from 'react';
import './ReportPage.scss';
import ReportContainer from '../reportContainer/ReportContainer';
import ReportCard from '../reportCard/ReportCard';
import { getTokenHeader } from '../../helpers/getTokenHeader';
import axios from 'axios';
import { connect } from 'react-redux';
import { requireLogin } from '../../actions/user';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ReportPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageCount: 0,
      currentPage: 1,
      data: [],
      isLoading: false
    };
  }

  componentDidMount() {
    const intervalRef = setInterval(() => {
      if (this.props.doneInitialLoad) {
        if (this.props.user.displayName) {
          this.loadData(1);
        } else {
          this.props.requireLogin(this.props.page, this.props.csrfToken);
        }
        clearInterval(intervalRef);
      }
    }, 500);
  }

  loadData = async (pageIndex) => {
    this.setState({
      isLoading: true
    });

    try {
      const response = await axios.get(
        this.props.getApiEndpointWithPageIndex(pageIndex),
        getTokenHeader(this.props.csrfToken)
      );

      const json = response.data;
      this.setState({
        pageCount: json.totalPages,
        currentPage: pageIndex,
        data: json.data
      });
    } catch (e) {
      console.error(e);
      if (e.response.status === 401) {
        this.props.requireLogin(this.props.page, this.props.csrfToken);
      }
    } finally {
      this.setState({
        isLoading: false
      });
    }
  };

  onPageChange = async (data) => {
    await this.loadData(data.selected + 1);
  };

  getHeader = () => (
    <React.Fragment>
      <h1 className="ReportPage__Header">
        {this.props.title}
        <button
          className="ReportPage__LoadingButton"
          onClick={this.loadData.bind(this, this.state.currentPage)}
        >
          <FontAwesomeIcon
            className="ReportPage__LoadingIcon"
            icon="sync"
            spin={this.state.isLoading}
          />
        </button>
      </h1>
    </React.Fragment>
  );

  render() {
    return (
      <ReportContainer>
        <ReportCard
          tableData={this.props.tableDataTemplate(this.state.data)}
          header={this.getHeader()}
          paginate={({
            onPageChange: this.onPageChange,
            pageCount: this.state.pageCount,
            forcePage: this.state.currentPage - 1
          })}
        />
      </ReportContainer>
    );
  }
}

ReportPage.propTypes = {
  title: PropTypes.string.isRequired,
  getApiEndpointWithPageIndex: PropTypes.func.isRequired,
  tableDataTemplate: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  csrfToken: state.csrfToken,
  user: state.user,
  doneInitialLoad: state.initialLoad.done
});

const mapDispatchToProps = (dispatch) => ({
  requireLogin: (returnUrl, csrfToken) => dispatch(requireLogin(returnUrl, csrfToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportPage);

