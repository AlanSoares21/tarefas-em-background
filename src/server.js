import 'dotenv/config';
import express from 'express';
import UserController from './app/controllers/UserController';
const app = express();
app.use(express.json());

app.route('/users/:id?')
    .post(UserController.store)
    .put(UserController.update)
    .delete(UserController.delete)
    .get(UserController.select);

app.listen(process.env.PORT, ()=>{
    console.log("Server is runing in http://localhost:"+process.env.PORT)
});