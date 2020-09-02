const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  username: String,
  employeeId: Number,
  permissions: String,
});

module.exports = mongoose.model("Employee", employeeSchema);
