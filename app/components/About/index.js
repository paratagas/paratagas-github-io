import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './index.scss';

export const About = () => (
  <main role="main">

    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">World map info</h1>
        <p className="lead text-muted">World map info is an application to get info about all the countries in the world and it's main information. Also there is weather information and forecast</p>
        <p>
          <a href="https://github.com/paratagas/" target="_blank" className="btn btn-primary my-2">Author's GitHub</a>
          <a href="https://www.linkedin.com/in/evgeni-sviridenko/" target="_blank" className="btn btn-secondary my-2">Author's Linkedin</a>
        </p>
      </div>
    </section>

    <div className="album py-5 bg-light">
      <div className="container">

        <div className="row">
          <div className="col-md-6">
            <div className="card mb-6 box-shadow">
              <div className="card-body">
                <p className="card-text">Source code repository on GitHub. World map info uses several open source projects to work properly and for tests. React, Redux, Bootstrap, Google-map-react, Bootswatch</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a href="https://github.com/paratagas/paratagas-github-io" target="_blank" className="btn-sm btn-secondary">View</a>
                  </div>
                  <small className="text-muted">Repository</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-6 box-shadow">
              <div className="card-body">
                <p className="card-text">Based on react-boilerplate: a highly scalable, offline-first foundation with the best developer experience and a focus on performance and best practices</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a href="https://github.com/react-boilerplate/react-boilerplate/tree/master/docs" target="_blank" className="btn-sm btn-secondary">View</a>
                  </div>
                  <small className="text-muted">Documentation</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
);
