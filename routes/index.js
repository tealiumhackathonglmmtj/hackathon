var express = require('express');
var router = express.Router();
const fetch = require("node-fetch")

/* GET home page. */
router.get('/', function(req, res, next) {
  fetch('https://e2nkh9bvqg.execute-api.us-east-2.amazonaws.com/prod/visitorSampler?count=1', { title: 'Tealium Hackathon' })
  .then((res)=>{
    return res.json();
  }).then((parsedResponse)=>{
    console.log(parsedResponse);
    var flags=[]
    for (var property in parsedResponse[0].flags){
      flags.push(property)
    }
    res.render('index', { title: 'Tealium Hackathon', user: parsedResponse, flags: flags})
  })
});

router.get('/data', function(req, res, next) {
  fetch('https://e2nkh9bvqg.execute-api.us-east-2.amazonaws.com/prod/visitorSampler?count=1', { title: 'Tealium Hackathon' })
  .then((res)=>{
    return res.json();
  }).then((parsedResponse)=>{
    console.log(parsedResponse);
    var flags=[]
    for (var property in parsedResponse[0].flags){
      flags.push(property)
    }
    res.render('index', { title: 'Tealium Hackathon', user: parsedResponse})
  })
});

module.exports = router;
