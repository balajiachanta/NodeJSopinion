let mongoose = require('mongoose');

// test Schema
let opinionSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  comment:{
    title :{
      type : String
    }
  }
});
 
module.exports = mongoose.model('Topic', opinionSchema);