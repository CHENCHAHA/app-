const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))


app.listen(7654, () => {
    console.log('7654端口监听中')
})