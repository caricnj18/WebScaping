var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var ArticleSchema = new Schema({

  heading: {
    type: String,
    required: true
  },

  url: {
    type: String,
    required: true
  },
  
  summary: [
    {
       type: Schema.Types.ObjectId,
       ref: "Article",
        required: true
  }]
});


var Article = mongoose.model("article", ArticleSchema);


module.exports = article;