const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Student must have a name'],
    trim: true
  },
  age: Number,
  gender: String,
  dateOfBirth: Date,
  dateOfJoining: Date,
  Aadhar: String,
  branch: String,
  Standard: Number,
  headOfBranch: String,
  contactDetails: Number
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;