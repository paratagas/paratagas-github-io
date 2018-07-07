import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './index.scss';

export const About = () => (
  <main role="main">
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">
          <FormattedMessage {...messages.header} />
        </h1>
        <p className="lead text-muted">
          <FormattedMessage {...messages.leadText} />
        </p>
        <p>
          <a href="https://github.com/paratagas/" target="_blank" className="btn btn-primary my-2">
            <FormattedMessage {...messages.authorGitHub} />
          </a>
          <a href="https://www.linkedin.com/in/evgeni-sviridenko/" target="_blank" className="btn btn-secondary my-2">
            <FormattedMessage {...messages.authorLinkedin} />
          </a>
        </p>
      </div>
    </section>

    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-6 box-shadow">
              <div className="card-body">
                <p className="card-text">
                  <FormattedMessage {...messages.cardTextParatagas} />
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a href="https://github.com/paratagas/paratagas-github-io" target="_blank" className="btn-sm btn-secondary">
                      <FormattedMessage {...messages.view} />
                    </a>
                  </div>
                  <small className="text-muted">
                    <FormattedMessage {...messages.repository} />
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-6 box-shadow">
              <div className="card-body">
                <p className="card-text">
                  <FormattedMessage {...messages.cardTextBoilerplate} />
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a href="https://github.com/react-boilerplate/react-boilerplate/tree/master/docs" target="_blank" className="btn-sm btn-secondary">
                      <FormattedMessage {...messages.view} />
                    </a>
                  </div>
                  <small className="text-muted">
                    <FormattedMessage {...messages.documentation} />
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);
