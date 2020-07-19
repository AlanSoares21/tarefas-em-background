import 'dotenv/config';
import express from 'express';
import UserController from './app/controllers/UserController';
const app = express();
app.use(express.json());

app.route('/users')
    .post(UserController.store);

app.listen(process.env.PORT, ()=>{
    console.log("Server is runing in http://localhost:"+process.env.PORT)
});