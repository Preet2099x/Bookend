import prisma from '../prisma/index.js'

export const connectDB = async() => {
    try {
        await prisma.$connect();
        console.log('Database connected');
    } 
    catch (error) {
        console.error(
            'Of course the database refused to cooperate.\n' +
            'I am the architect of my own demise.\n' +
            'The error is:\n', 
            error
        );
        process.exit(1);
    }

};