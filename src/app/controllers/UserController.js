import passwordGenerator from 'password-generator';
import Queue from '../lib/Queue';

import db from '../../../dbFake';

export default {
    async store(req,res){
        // console.log("criando usuario");
        const {name,email} = req.body;
        const user = await db.createUser( {
            name,
            email,
            password : passwordGenerator(15,false)
        });
        
        // console.log("enviando email");
        // await Queue.add('RegistrationMail',{user});
        // console.log("job na fila");
        return res.json(user);
    },
    async update(req,res){
        const {name,email, password} = req.body;
        const user = await db.getUser(req.params.id);
        if(!user){
            return res.status(400).json({"Erro:":"Id invalido"});
        }
        const response = await db.updateUser({name,email,password},user.id);
        // await Queue.add('UpdateEmail',{userUpdated});
        return res.json(response);
    },
    async select(req,res){
        const user = await db.getUser(req.params.id);
        if(!user){
            return res.status(400).json({"Erro:":"Id invalido"});
        }
        return res.json(user);
    },
    async delete(req,res){
        const response = await db.deleteUser(req.params.id);
        if(!response){
            return res.status(400).json({"Erro:":"Id invalido"});
        }
        // await Queue.add('DeletedMail',{userUpdated});
        return res.json({"OK":"User deleted"});
    },
}