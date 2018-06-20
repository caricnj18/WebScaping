var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var ListSchema = new Schema({

  heading: String,
  summary: String,
  url: string
});


var Note = mongoose.model("List", ListSchema);


module.exports = List;
