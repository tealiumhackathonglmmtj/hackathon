var express = require('express');
var router = express.Router();
const fetch = require("node-fetch")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tealium Hackathon' });
});

router.get('/data', function(req, res, next) {
  fetch('https://e2nkh9bvqg.execute-api.us-east-2.amazonaws.com/prod/visitorSampler?count=1', { title: 'Tealium Hackathon' })
  .then((res)=>{
    return res.json();
  }).then((parsedResponse)=>{
    console.log(parsedResponse)
  })
});

module.exports = router;
