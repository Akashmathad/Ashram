const express = require('express');
const studentController = require('./../controllers/studentController');

const router = express.Router();

router.route('/unique').get(studentController.getStudent);

router.route('/').post(studentController.createStudent).get(studentController.getAllStudents).patch(studentController.updateStudent).delete(studentController.deleteStudent);
router.route('/:id').get(studentController.getStudentById);



module.exports = router;