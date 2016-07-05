'use strict';

const SOURCE = 'src';
const DESTINATION = 'dist';

const metalsmith = require('metalsmith');

metalsmith(__dirname)
  .source(SOURCE)
  .destination(DESTINATION)
  .build((error) => {
    console.log(error);
  });
