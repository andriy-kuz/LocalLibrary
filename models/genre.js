var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreInstanceSchema = new Schema(
    {
        name: { type: String, min: 3, max: 100, required: true}
    }
);

// Virtual for genre's URL
GenreInstanceSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreInstanceSchema);