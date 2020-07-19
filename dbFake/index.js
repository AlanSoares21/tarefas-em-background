import fs from 'fs';

const dataPath = './data';
const options = {encoding:'utf-8'};

function getData(){
    const file = fs.readFileSync(dataPath,options);
    return file;
}
function saveData(data){
    try{
        fs.writeFileSync(dataPath,options);
    }catch(err){
        console.error('Erro ao salvar dados');
    }
}

export default {
    async createUser(dataUser){
        
    },
    async getUser(id){

    },
    async updateUser(dataUser){

    },
    async deleteUser(dataUser){

    },
}