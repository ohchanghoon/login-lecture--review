'use strict';

// 모듈
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const fs = require('fs');
const accessLogStream = require('./src/config/log');

// 라우팅
const home = require('./src/routes/home');

// 앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(morgan('dev'));
// app.use(morgan('common', { stream: accessLogStream }));
app.use('/', home);

module.exports = app;
