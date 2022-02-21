const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../../appchong/')));


app.listen(7654, () => {
    console.log('7654端口监听中')
})
app.get('/', (req, res) => {
    fs.readFile('../index.html', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(data);
        res.send(data)
    })
})