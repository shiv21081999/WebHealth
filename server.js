const express = require('express')

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended : true}))

app.set('view engine' , 'hbs')

app.set('views', __dirname + '/views')

app.use('/',express.static(__dirname + '/public'))

app.use('/symptoms' , require('./route/route'))

app.get('/', (req,res) => {
    res.render('home')
})

app.listen(8080, () =>{
    console.log('Running at http://localhost:8080')
})

