import Post from '@models/post.js';
import Common from '@common/common';
import * as $ from 'jquery';

import webpackLogo from './assets/webpack.png';
import json from './assets/json.json';
import xml from './assets/data.xml';
import csv from './assets/data.csv';

import './babel';
import './index.jsx';

import './styles/styles.css';
import './styles/styles.less';
import './styles/styles.scss';

const post = new Post('Webpack post title', webpackLogo);
console.log('Post to string', post.toString());
console.log('JSON', json);
console.log('XML', xml);
console.log('CSV', csv);
console.log(new Common().toString());
$('pre').append(post.toString());
