const express = require('express');
const router = express.Router();

const tasks = [
  {id: "1", name: 'Doctor Appointment1', schedule: new Date('11/25/2014 00:00:00 GMT')},
  {id: "2", name: 'Dentist Appointment2', schedule: new Date('11/25/2014 00:00:00 GMT')},
  {id: "3", name: 'Tennis Appointment3', schedule: new Date('11/25/2014 00:00:00 GMT')},
  {id: "4", name: 'Tennis Appointment4', schedule: new Date('11/25/2014 00:00:00 GMT')},
  {id: "5", name: 'Tennis Appointment5', schedule: new Date('11/25/2014 00:00:00 GMT')},
  {id: "6", name: 'Tennis Appointment6', schedule: new Date('11/25/2014 00:00:00 GMT')},
  {id: "7", name: 'Tennis Appointment7', schedule: new Date('11/25/2014 00:00:00 GMT')},
  {id: "8", name: 'Tennis Appointment8', schedule: new Date('11/25/2014 00:00:00 GMT')},
  {id: "9", name: 'Tennis Appointment9', schedule: new Date('11/25/2014 00:00:00 GMT')},
  {id: "10", name: 'Tennis Appointment10', schedule: new Date('11/25/2014 00:00:00 GMT')},
  {id: "11", name: 'Tennis Appointment11', schedule: new Date('11/25/2014 00:00:00 GMT')},
  {id: "12", name: 'Tennis Appointment12', schedule: new Date('11/25/2014 00:00:00 GMT')},
  {id: "13", name: 'Tennis Appointment13', schedule: new Date('11/25/2014 00:00:00 GMT')},
  {id: "14", name: 'Tennis Appointment14', schedule: new Date('11/25/2014 00:00:00 GMT')},
  {id: "15", name: 'Tennis Appointment15', schedule: new Date('11/25/2014 00:00:00 GMT')},
  {id: "16", name: 'Tennis Appointment16', schedule: new Date('11/25/2014 00:00:00 GMT')},
  {id: "17", name: 'Tennis Appointment17', schedule: new Date('11/25/2014 00:00:00 GMT')},
  {id: "18", name: 'Tennis Appointment17', schedule: new Date('11/25/2014 00:00:00 GMT')},
  {id: "19", name: 'Tennis Appointment17', schedule: new Date('11/25/2014 00:00:00 GMT')},
  {id: "20", name: 'Tennis Appointment17', schedule: new Date('11/25/2014 00:00:00 GMT')},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  const page = parseInt(req.query.page);
  const pageSize = parseInt(req.query['page-size']);
  const offset = (page-1)*pageSize;
  const rows = offset + pageSize;
  console.log(`offset = ${offset}, rows = ${rows}`);
  res.status(200).json({
    tasks: tasks.slice((page-1)*pageSize, rows)
  });
});

router.get("/totalTasks", function(req, res, next){
  res.status(200).json({
    totalTasks: tasks.length
  });
});

module.exports = router;
