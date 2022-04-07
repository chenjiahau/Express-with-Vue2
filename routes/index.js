var express = require('express');
var router = express.Router();

const carList = [
  {
    "id": 1,
    "color": "Maroon",
    "car": "S-Class",
    "popular": false
  },
  {
    "id": 2,
    "color": "Purple",
    "car": "Eos",
    "popular": true
  },
  {
    "id": 3,
    "color": "Blue",
    "car": "Pathfinder",
    "popular": false
  },
  {
    "id": 4,
    "color": "Blue",
    "car": "Swift",
    "popular": false
  },
  {
    "id": 5,
    "color": "Teal",
    "car": "VehiCROSS",
    "popular": false
  },
  {
    "id": 6,
    "color": "Yellow",
    "car": "New Yorker",
    "popular": false
  },
  {
    "id": 7,
    "color": "Indigo",
    "car": "Diablo",
    "popular": false
  },
  {
    "id": 8,
    "color": "Teal",
    "car": "7 Series",
    "popular": true
  },
  {
    "id": 9,
    "color": "Mauv",
    "car": "Pajero",
    "popular": false
  },
  {
    "id": 10,
    "color": "Violet",
    "car": "911",
    "popular": true
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Text mode' });
});

router.get('/express-test', function(req, res, next) {
  res.send({ message: 'Your express is connected to react!' });
});

router.get('/api/car/list', function (req, res, next) {
  // res.status(404).send({ message: 'Something Wrong!'});
  res.send({
    data: carList
  });
});

router.post('/api/car/add', function (req, res, next) {
  const car = req.body.data.car;
  const color = req.body.data.color;
  const popular = req.body.data.popular;

  carList.push({
    id: carList.lenght + 1,
    car,
    color,
    popular
  });

  // res.status(404).send({ message: 'Something Wrong!'});
  res.send({
    data: carList
  });
});

module.exports = router;
