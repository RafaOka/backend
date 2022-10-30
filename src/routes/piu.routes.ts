import { request, response, Router } from "express";
import Piu from "../models/Piu";
import PiuRepository from "../repositories/PiuRepository";
import createPiuService from "../services/createPiuService";
import attPiuService from "../services/attPiuService";
import { userRepository } from "./user.routes";
import deletePiuService from "../services/deletePiuService";

const piuRouter =  Router();
const piuRepository = new PiuRepository();

piuRouter.post('/', (request, response) => {
    try {
        const {idDoUsuario, text} = request.body;

        const createPiu = new createPiuService(piuRepository, userRepository);

        const piu = createPiu.execute({idDoUsuario, text});

        return response.json(piu);
    } catch(err: any) {
        return response.status(400).json({ error: err.message});
    }
});

piuRouter.get('/', (request, response) => {
    const pius = piuRepository.all();

    return response.json(pius);
});

piuRouter.get('/:id', (request, response) => {
    const {id} = request.params;

    const piu = piuRepository.find(id);

    if(!piu)
        return response.status(404).json({message: "Piu not found"});

    return response.json(piu);
});

piuRouter.put('/:id', (request, response) => {
    try {
        const { id } = request.params;
        const {idDoUsuario, text} = request.body;

        const attPiu = new attPiuService(piuRepository);

        const piu = attPiu.execute({id, idDoUsuario, text});

        return response.json(piu);
    } catch(err: any) {
        return response.status(400).json({ error: err.message});
    }
});

piuRouter.delete('/:id', (request, response) => {
    try {
        const { id } = request.params;

        const deletePiu = new deletePiuService(piuRepository);

        deletePiu.execute(id);

        return response.status(204).send();
    } catch(err: any) {
        return response.status(400).json({ error: err.message});
    }
});

export default piuRouter;