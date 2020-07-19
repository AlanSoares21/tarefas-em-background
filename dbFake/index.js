import fs from 'fs';
import {resolve} from 'path';

const dataPath = resolve(__dirname,'./data.json');
const options = {encoding:'utf-8'};

function getData(){
    const file = JSON.parse(fs.readFileSync(dataPath,options));
    return file;
}
function saveData(data){
    try{
        fs.writeFileSync(dataPath,JSON.stringify(data),options);
    }catch(err){
        console.error('Erro ao salvar dados: '+err);
    }
}

export default {
    async createUser(dataUser){
        const users = getData();
        const user = {
            ...dataUser, 
            id: users.length===0? 0 : ( users[users.length-1].id + 1 ) 
        };
        users.push(user);
        saveData(users);
        return user;
    },
    async getUser(id){

    },
    async updateUser(dataUser){

    },
    async deleteUser(dataUser){

    },
}