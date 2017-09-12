var mongoose = require('mongoose');
var data=require("./../config/config.json");
require("../third/schemaExtend");
// var util=require("./util");
// mongoose.Promise = require('bluebird');
var db=mongoose.createConnection(data.db,{
    server: {
        socketOptions: {
            keepAlive: 300000,
            connectTimeoutMS: 30000
        }
    },
    replset: {
        socketOptions: {
            keepAlive: 300000,
            connectTimeoutMS : 30000
        }
    },
    user:data.user,
    pass:data.passwd
});
module.exports=db;