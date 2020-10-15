import express from 'express'
import { getRepository } from 'typeorm';

import './database/connection'
import Orphanage from './models/Orphanages';

const app = express();

app.use(express.json());

app.post('/orphanages', async function(request, response){
    const { 
        name, 
        latitude, 
        longitude, 
        about, 
        instructions, 
        opening_hours, 
        open_on_weekends
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);
    const orphanage = orphanagesRepository.create({
        name, 
        latitude, 
        longitude, 
        about, 
        instructions, 
        opening_hours, 
        open_on_weekends
    });

    await orphanagesRepository.save(orphanage);
    
    response.status(201).json(orphanage);
});

app.listen(3333);