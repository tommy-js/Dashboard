const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  username: String,
  employeeId: String,
  permissions: String,
  password: String,
});

module.exports = mongoose.model("Employee", employeeSchema);
