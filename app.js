const express = require('express')
const app = express()
const cohorts = require('./data/cohorts.js')

app.get('/', (req, res) => res.send({data: cohorts}))

app.listen(3000, () => console.log('Example app listening on port 3000!'))