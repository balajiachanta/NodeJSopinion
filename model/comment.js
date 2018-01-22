let mongoose = require('mongoose');

// test Schema
let commentSchema = mongoose.Schema({
    
  title:{
    type: String,
    required: true
  }
});
 
module.exports = mongoose.model('Comment', commentSchema);