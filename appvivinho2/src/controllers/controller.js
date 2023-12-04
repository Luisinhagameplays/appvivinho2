const database = require ('../database/connection')

class LoginController {
    newGenre(request,response){
        const {Password, email} = request.body

        console.log (Password, email)

        database.insert({id,nome,email}).table("generos").then(data=>{
            console.log(data)
            response.json({message: "Login efetuado com sucesso!!"})
        }).catch(error=>{
            console.log(error)
        })
    }
}

module.exports = new GenreController