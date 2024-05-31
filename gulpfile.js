var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var open = require('gulp-open');

var Paths = {
    HERE: './',
    DIST: 'dist/',
    CSS: './assets/css/',
    SCSS_TOOLKIT_SOURCES: './assets/scss/argon-dashboard.scss',
    SCSS: './assets/scss/**/**'
  };