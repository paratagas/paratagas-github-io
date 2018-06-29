/* eslint-disable linebreak-style,arrow-body-style */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Spinner from "react-svg-spinner";
import { createStructuredSelector } from 'reselect/es';
import 'bootswatch/dist/litera/bootstrap.css';
import { PageTemplate } from '../PageTemplate';
import GoogleMap from '../../components/GoogleMap';
import { REST_COUNTRIES_URL } from '../../config/api';
import injectReducer from '../../utils/injectReducer';
import homePageReducer from './reducer';
// import { getAllCountries } from './selectors';
import { saveCountriesToStore } from './actions';
import './index.scss';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends PureComponent {
  constructor() {
    super();
    this.state = {
      countries: [],
      loading: false,
    };
  }

  componentWillMount() {
    this.setState({loading: true});
    fetch(REST_COUNTRIES_URL)
      .then((resp) => resp.json())
      .then((data) => {
        this.props.saveCountriesToStore(data);
        this.setState({ countries: data, loading: false });
      });
  }
  render() {
    const { countries, loading } = this.state;
    let mainContent;
    if (loading) {
      mainContent =
        <div id="center">
          <Spinner className="spinner" height="128px" width="128px" color="fuchsia" thickness={5} gap={3} speed="slow" />;
        </div>
    } else {
      mainContent = <GoogleMap countries={countries} />;
      // console.log('countries');
      // console.log(countries);
    }
    return (
      <PageTemplate>
        {mainContent}
      </PageTemplate>
    );
  }
}

HomePage.propTypes = {
  countries: PropTypes.array,
  saveCountriesToStore: PropTypes.func,
};

/* const mapStateToProps = createStructuredSelector({
  countries: getAllCountries(),
}); */

/* const mapStateToProps = (state, ownProps) => {
  return {
    countries: state.countries,
  };
}; */

function mapDispatchToProps(dispatch) {
  return {
    saveCountriesToStore: (countries) => dispatch(saveCountriesToStore(countries)),
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);
const withReducer = injectReducer({ key: 'countries', reducer: homePageReducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);
