const express = require('express')
const app = express()
const cohorts = require('./data/cohorts.js')
const cors = require("cors")
app.use(cors())

function getId(cohorts, number) {
    return cohorts.filter(cohort => {
        if (cohort.id == number) {
            return cohort
        } else {
            return null
        }
    })[0]
}

app.get('/', (req, res, next) =>
    res.status(200).json({
        data: cohorts
    }))

app.get('/:id', (req, res) => {
    var record = getId(cohorts, req.params.id)
    if (record) {
        res.status(200).json({
            data: record
        })
    } else {
        res.status(404).json({
            error: {
                message: "No record found!"
            }
        })
    }
})

app.listen((process.env.PORT || 3000))