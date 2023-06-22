/*******************************************************************************
 *
 *    Copyright (c) 2017 - 2021
 *    Nanjing Smart Medical Investment Operation Service Co. Ltd.
 *    All rights reserved.
 *
 ******************************************************************************/
const gulp = require('gulp');
const connect = require('gulp-connect');
const jest = require('gulp-jest').default;
const eslint = require('gulp-eslint-new');
const gulpIf = require('gulp-if');
const jsdoc = require('gulp-jsdoc3');
const webpack = require('webpack-stream');
const resolve = require('path').resolve;

const path = {
  sources: [`./src/**/*.js`],
  tests: [`./test/**/*.test.js`],
};

function doc(cb) {
  const config = require('./jsdoc.json');
  gulp.src(path.sources.concat(['./README.md']), {
    read: false,
  }).pipe(jsdoc(config, cb));
}

function server() {
  connect.server({
    root: './doc/api',
  });
}

function watch() {
  gulp.watch(path.sources.concat(path.tests), ['docs', 'test']);
}

function test() {
  const testTarget = process.argv[3];
  const hasTarget = testTarget && testTarget.startsWith('--target=');
  const config = {
    verbose: false,
    transform: {
      '\\.js$': 'babel-jest',
      '\\.vue$': 'vue-jest',
    },
    transformIgnorePatterns: ["/node_modules/"],
    testEnvironment: 'jest-environment-jsdom-global',
    setupFilesAfterEnv: ['jest-extended/all'],
    collectCoverage: true,
    collectCoverageFrom: path.sources,
  };
  if (hasTarget) {
    const target = testTarget.substring('--target='.length);
    config.testRegex = [ target ];
  }
  process.env.NODE_ENV = 'test';
  // console.log('Jest config: ', config);
  return gulp.src('.')
    .pipe(jest(config));
}


function isFixed(file) {
	return file.eslint != null && file.eslint.fixed;
}

function lint() {
  const hasFixFlag = process.argv.slice(2).includes('--fix');
  return gulp.src(path.sources.concat(path.tests), {base: './'})
    .pipe(eslint({
      configFile: '.eslintrc.js',
      fix: hasFixFlag,
    }))
    .pipe(eslint.format())
    .pipe(gulpIf(isFixed, gulp.dest('./')))
    .pipe(eslint.failAfterError());
}

function build() {
  return gulp.src('./src/index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
}

gulp.task('lint', lint);
gulp.task('doc', doc);
gulp.task('server', server);
gulp.task('test', test);
gulp.task('watch', watch);
gulp.task('build', build);
gulp.task('doc:server', gulp.series('doc','server'));
gulp.task('default', gulp.series('lint', 'test', 'doc','doc:server', 'watch'));
