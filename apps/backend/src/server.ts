import express,{Request,Response} from 'express';
import { connectDB } from './config/db.js';
import 'dotenv/config';

const app = express()
const PORT = process.env.PORT || 3000;

app.get('/',(req:Request,res:Response) => {
    res.status(200).json({message: 'If you can read this. The Backend is running.!'})
});

const startServer = async ()=> {

    app.listen(PORT,() => {
        console.log(`Server running on http://localhost:${PORT}`)
        console.log('Awaiting incoming nonsense...');
    });

    await connectDB();
} 

startServer();