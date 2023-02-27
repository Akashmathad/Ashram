const Student = require('./../models/studentModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getStudentById = catchAsync(async (req, res, next) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    return next(new AppError('No student found by this ID', 404))
  }

  res.status(200).json({
    status: 'success',
    data: {
      student
    }
  });
});

exports.getAllStudents = catchAsync(async (req, res, next) => {
  const queryObj = { ...req.query };

  const student = await Student.find(queryObj);

  if (!student.length) {
    return next(new AppError('No student found', 404))
  }

  res.status(200).json({
    status: 'success',
    data: {
      student
    }
  });
});

exports.getStudent = catchAsync(async (req, res, next) => {
  const queryObj = { ...req.query };
  queryObj.name = queryObj.name.replace('_', ' ');
  const student = await Student.findOne(queryObj);

  if (!student) {
    return next(new AppError('No student found by this name', 404))
  }

  res.status(200).json({
    status: 'success',
    data: {
      student
    }
  });
})

exports.createStudent = catchAsync(async (req, res, next) => {
  const newStudent = await Student.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      student: newStudent
    }
  });
});

exports.updateStudent = catchAsync(async (req, res, next) => {
  const queryObj = { ...req.query };
  queryObj.name = queryObj.name.replace('_', ' ');
  const student = await Student.findOneAndUpdate(queryObj, req.body, {
    new: true,
    runValidators: true
  });

  if (!student) {
    return next(new AppError('No student found with that name', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      student
    }
  });
});

exports.deleteStudent = catchAsync(async (req, res, next) => {
  const queryObj = { ...req.query };
  queryObj.name = queryObj.name.replace('_', ' ');
  const student = await Student.findOneAndDelete(queryObj);

  if (!student) {
    return next(new AppError('No student found with that name', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});