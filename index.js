'use strict'


var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var router = express.Router()
var cors = require('cors') 

var config = {
   PORT: process.env.PORT || 3000,
   DB: process.env.MONGODB
}

var answersSchema = new mongoose.Schema({
  name: {
    type: String
  },
  bai: {
    type: String
  },
  q1: {
    answers: {
      type: Array
    },
    score: {
      type: Number
    }      
  },
  q2: {
    answers: {
      type: Array
    },
    score: {
      type: Number
    }      
  },
  q3: {
     answers: {
      type: Array
    },
    score: {
      type: Number
    }      
  }
},
  {
    collection: 'questionaries'
  }
)

var answers = new mongoose.model('Answers', answersSchema)

var app = express()
app.use(cors())
app.use(bodyParser.json())

mongoose.connect(config.DB)

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next) {
  res.sendfile(__dirname + '/index.html');
})

app.post('/', function(req, res) {  
  answers.create(req.body,
    function (error, todo) {
      if (error) {
        console.log(error)
        res.status(400).send('Error ao salvar o questionario')
      }
      console.log('Gravou', req.body )
      res.status(200).json(todo)
    })
    
  
})

app.listen(config.PORT, function() {
  console.log('Server is running on ', config.PORT) 
});