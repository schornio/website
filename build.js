'use strict';

const SOURCE = 'src';
const DESTINATION = 'dist';

const metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');

metalsmith(__dirname)
  .metadata({
    title: 'Thomas Schorn'
  })
  .source(SOURCE)
  .use(markdown())
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
