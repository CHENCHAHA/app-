const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))


app.listen(7654, () => {
    console.log('7654端口监听中')
})
app.get('/', (req, res) => {

})