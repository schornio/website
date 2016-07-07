'use strict';

const SOURCE = 'src';
const DESTINATION = 'dist';

const metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const relative = require('metalsmith-relative');
const layouts = require('metalsmith-layouts');
const permalinks = require('metalsmith-permalinks');

metalsmith(__dirname)
  .metadata({
    title: 'Thomas Schorn'
  })
  .source(SOURCE)
  .use(markdown())
  .use(permalinks({
    pattern: ':title'
  }))
  .use(relative())
  .use(layouts({
    engine: 'handlebars',
    pattern: '**/*.html',
    default: 'default.hbs',
    partials: 'layouts/partials',
  }))
  .destination(DESTINATION)
  .build((error) => {
    console.log(error);
  });
