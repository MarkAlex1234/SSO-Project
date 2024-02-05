import { config } from 'dotenv';
import express from "express";

// LOAD ENV VARAIBLES 
config();



async function bootstrap() {
    // Create express app
    const app = express();

    const PORT = process.env.PORT;
    
    if(!PORT){
        console.log('NO PORT SET')
        return;
    }

    try{
        app.listen(PORT, () => console.log(`RUNNING ON PORT ${PORT}`));

    } catch(error) {
        //TODO IMPROVE HOW WE LOG THE ERROR
        console.log(error);
    }
}

bootstrap();