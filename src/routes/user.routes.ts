import { request, response, Router } from "express";
import User from "../models/User";
import UserRepository from "../repositories/UsersRepository";
import attUserService from "../services/attUserService";
import createUserService from "../services/createUserService";
import deleteUserService from "../services/deleteUserService";

const userRouter = Router();
export const userRepository =  new UserRepository();

userRouter.post('/', (request, response) => {
    try {
        const {name, birthDate, cpf, number} = request.body;

        const createUser = new createUserService(userRepository);

        const user = createUser.execute({name, birthDate, cpf, number})

        return response.json(user);
    } catch(err: any) {
        return response.status(400).json({ error: err.message});
    }
});

userRouter.get('/', (request, response) => {
    const users = userRepository.all();

    return response.json(users);
});

userRouter.get('/:id', (request, response) => {
    const {id} = request.params;

    const user = userRepository.find(id);

    if(!user)
        return response.status(404).json({message: "User not found"});

    return response.json(user);
});

userRouter.put('/:id', (request, response) => {
    try {
        const { id } = request.params;
        const { name, birthDate, cpf, number } = request.body;

        const attUser = new attUserService(userRepository);

        const user = attUser.execute({id, name, birthDate, cpf, number});

        return response.json(user);
    } catch(err: any) {
        return response.status(400).json({ error: err.message});
    }
});

userRouter.delete('/:id', (request, response) => {
    try {
        const { id } = request.params;

        const deletUser = new deleteUserService(userRepository);

        deletUser.execute(id);

        return response.status(204).send();
    } catch(err: any) {
        return response.status(400).json({ error: err.message});
    }
});

export default userRouter;