import express,{Request,Response} from 'express';

const app = express()

const PORT = process.env.PORT || 3000;

app.get('/',(req:Request,res:Response) => {
    res.status(200).json({message: 'You have successfully tickled the mainframe. It is pleased!'}); // need here
});

app.listen(PORT,() => {
    console.log(`Releasing the kraken on http://localhost:${PORT}`); //need here
})