const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.findUser = catchAsync(async (req, res, next) => {
  const user = await User.find(req.query);

  if (!user.length) {
    return next(new AppError('No User found', 404));
  }

  res.status(200).json({
    status: 'success'
  });
})