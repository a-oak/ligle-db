var ligle={};
ligle.util = require('ligle-util');
var configure = ligle.util.configure;
var mongo = require('mongodb');
var Server = mongo.Server;
var Connection = mongo.Connection;
var Db = mongo.Db;

// http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html

// 常用的接口：
// find, findOne, findOneAndReplace, findOneAndDelete, drop
// 封装应该只提供在model的层次上。
// 因此此次重构，这个文件清空，只导出mongo自带的Db对象。
// 每个model使用的时候，获取相应的collection就可以。

// 关于常用的options的说明：
// - limit: 返回条目的数目。
// - sort: 对文档排序。 [['name',-1]] 按照name倒序；[['a',1]]按照a正序
// - skip: Set to skip N documents ahead in your query (useful for pagination).
// - fields:（用在find中） 返回的field. include or exclude (not both)。例子： {'a':1} 
// - projection: (和fields类似，但用在delete,replace,update中) Limits the fields to return for all matching documents. 

var defaultCfg = {
  name:'ligle-engine',
  host: '127.0.0.1',
  port:27017,
  loggerName:'ligle-db',
  loggerLevel:'TRACE'
};
var exportObj;

module.exports = function(config){
  if(exportObj) return exportObj;

  var cfg = configure(config,defaultCfg);
  var logger = ligle.util.logger(cfg.loggerName,cfg.loggerLevel);
  module.exports.logger = logger;
  module.exports.cfg = cfg;
  logger.trace(cfg);

  var db = new Db(cfg.name, new Server(cfg.host,cfg.port), {safe:true});
  exportObj = db;
  exportObj.cfg = cfg;
  exportObj.ObjectID = mongo.ObjectID;
  exportObj.start = function(run){
    this.open(run);
  };

  return exportObj;
};










