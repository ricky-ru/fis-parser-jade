/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var jade = require('jade');

module.exports = function(content, file, conf){
  var fn = jade.compile(content, conf);
  return fn(conf);
};
