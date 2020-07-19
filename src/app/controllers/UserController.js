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
        await Queue.add('RegistrationMail',{user});
        // console.log("job na fila");
        return res.json(user);
    },
}