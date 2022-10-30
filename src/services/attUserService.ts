import UserRepository from "../repositories/UsersRepository";
import User from "../models/User";
import { response } from "express";

interface Request {
    id: string;
    name: string;
    birthDate: string;
    cpf: string;
    number: string;
}

class attUserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public execute({ id, name, birthDate, cpf, number}: Request): User {
        if(this.userRepository.find(id)) {
            if(name == '' || birthDate == '' || cpf == '' || number == '')
                throw Error('Dados incompletos');
            else {
                const user = this.userRepository.upDate({id, name, birthDate, cpf, number});

                return user;
            }
        } else {
            throw Error('Usuario não encontrado');
        }
    }
}

export default attUserService;