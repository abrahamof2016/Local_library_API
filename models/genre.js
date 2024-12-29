const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
	name: { type: String },
})

// Virtual for Genre's URL
GenreSchema.virtual("url").get(function () {
	// We don't use an arrow functions as we'll need the this object
	return `/catalog/book/${this._id}`;
});

// Export model
module.exports = mongoose.model("Genre", GenreSchema);
