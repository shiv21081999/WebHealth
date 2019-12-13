const express = require('express')

let {PythonShell} = require('python-shell')

const route = express.Router()

let symptoms = []

route.get('/', (req , res) => {
    res.send(symptoms)
})

route.post('/' , (req , res) => {
    if (!req.body.symptoms) {
        console.log('hi')
        return res.status(400).send({
          status: 'error',
          message: 'Symptom not provided'
        })
      }
    
    symptoms.push(req.body.symptoms)
    
    res.status(201).send({
        status : 'added',
    })
})

route.post('/remove' , (req,res) => {
    if(!req.body.symptoms)
    {
        return res.status(400).send({
            status :'Error'})
    }
    
    symptoms = symptoms.filter( (symptom) => {
        if(symptom != req.body.symptoms)
        {
            return symptom
        }
    })
    res.status(201).send({
        status : 'success',
    })
})

route.get('/final' , (req , res) => {
   

        let options = {
          mode: 'text',
          encoding : 'utf8',
          pythonPath: 'C:/Users/Shivam Sharma/AppData/Local/Programs/Python/Python36/python.exe',
          pythonOptions: ['-u'],// get print results in real-time
          scriptPath: './',
          args: [symptoms.toString()]
        };
         
        let test = new PythonShell(__dirname+'/python/Disease_prediction.py',options)
        console.log(__dirname)
        
        test.on('message', async function(message,err){
          if(err) throw err
          else{
              let disease = await message.slice(2,message.length-2)
              symptoms = []
              res.send([disease])
          }
        })
        
})

module.exports = route