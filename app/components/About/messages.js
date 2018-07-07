/*
 * About Messages
 *
 * This contains all the text for the About component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.About.header',
    defaultMessage: 'Map Walker',
  },
  leadText: {
    id: 'app.components.About.leadText',
    defaultMessage: 'Map Walker is an application to get info about all the countries in the world and it\'s main information. Also there is weather information and forecast',
  },
  authorGitHub: {
    id: 'app.components.About.authorGitHub',
    defaultMessage: 'Author\'s GitHub',
  },
  authorLinkedin: {
    id: 'app.components.About.authorLinkedin',
    defaultMessage: 'Author\'s Linkedin',
  },
  cardTextParatagas: {
    id: 'app.components.About.cardTextParatagas',
    defaultMessage: 'Source code repository on GitHub. World map info uses several open source projects to work properly and for tests. React, Redux, Bootstrap, Google-map-react, Bootswatch',
  },
  cardTextBoilerplate: {
    id: 'app.components.About.cardTextBoilerplate',
    defaultMessage: 'Based on react-boilerplate: a highly scalable, offline-first foundation with the best developer experience and a focus on performance and best practices',
  },
  view: {
    id: 'app.components.About.view',
    defaultMessage: 'View',
  },
  documentation: {
    id: 'app.components.About.documentation',
    defaultMessage: 'Documentation',
  },
  repository: {
    id: 'app.components.About.repository',
    defaultMessage: 'Repository',
  },
});
