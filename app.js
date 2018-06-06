const express = require('express')
const app = express()
const cohorts = require('./data/cohorts.js')

app.get('/', (req, res) => res.json({data: cohorts}))

app.listen((process.env.PORT || 5000), () => console.log('Example app listening on port 3000!'))