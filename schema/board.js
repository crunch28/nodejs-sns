var mongoose = require('mongoose');
//몽구스 요청하고 필드 정의
  var Schema = mongoose.Schema; 
var boardSchema = new Schema({
    title: String,
    contents: String,
    author: String,
    board_date: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Board', boardSchema);