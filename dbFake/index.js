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
        const users = getData();
        // console.log(users)
        const  [user]  = users.filter( (userData) => parseInt(userData.id) === parseInt(id));
        // console.log(user,"getUser",id);
        return user;
    },
    async updateUser(dataUser,id){
        const user = await this.getUser(id);
        if(!user){
            return {"Erro:":"Id invalido "+id};
        }
        saveData( getData()
            .map(data => {
                if(parseInt(data.id)===parseInt(user.id))return {...data,...dataUser};
                return data;
            })
        );
        return {"response":"updated"};
    },
    async deleteUser(id){
        const user = await this.getUser(id);
        if(!user){
            return false;
        }
        saveData( getData().filter(data => parseInt(data.id)!==parseInt(user.id)) );
        return true;
    },
}