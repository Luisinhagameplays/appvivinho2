const express = require ('express')
const cors = require('cors')

const router = require('./src/routes/routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(4000,()=>{
    console.log("Abre a porta mariquinha")
})

app.get('/',(request,response)=>{
    response.send("testando som testando")
 })