var ligle={};
ligle.util = require('ligle-util')();
var configure = ligle.util.configure;
var mongo = require('mongodb');
var Server = mongo.Server;
var Connection = mongo.Connection;
var Db = mongo.Db;


var defaultCfg = {
  name:'ligle-engine',
  host: '127.0.0.1',
  port:27017,
  loggerName:'ligle-db',
  loggerLevel:'TRACE',
};
var exportObj;

module.exports = function(config){
  if(exportObj){
    return exportObj;
  }

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










