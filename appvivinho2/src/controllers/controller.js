const database = require ('../database/connection')

class LoginController {
    newGenre(request,response){
        const {id, email, nome} = request.body

        console.log (id, email, nome)

        database.insert({id,nome}).table("generos").then(data=>{
            console.log(data)
            response.json({message: "Login efetuado com sucesso!!"})
        }).catch(error=>{
            console.log(error)
        })
    }
}

module.exports = new GenreController