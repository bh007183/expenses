const express = require("express")
const path = require('path')
const fs = require("fs")

const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
///////////////////////////////////////////////////////

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, "index.html"))
})

app.get('/api/stats', function(request, response){
    fs.readFile(path.join(__dirname, "jb.json"), "utf8", (err, data) => {
        if(err) throw err
        response.json(JSON.parse(data))
    })
})

app.post('/api/stats', function(request, response){
    fs.readFile(path.join(__dirname, "jb.json"), "utf8", (err, data) => {
        if(err) throw err
        const statsArray = JSON.parse(data)
        console.log(statsArray)
        statsArray.push(request.body)
        console.log(request.body)
        fs.writeFile(path.join(__dirname, "jb.json"), JSON.stringify(statsArray), (err)=>{
            if (err) throw err
        // response.json(request.body)
           })
    })
})




app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })