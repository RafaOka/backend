import UserRepository from "../repositories/UsersRepository";
import User from "../models/User";
import { response } from "express";

interface Request {
    name: string;
    birthDate: string;
    cpf: string;
    number: string;
}

class createUserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public execute({ name, birthDate, cpf, number}: Request): User {
        if (name == '' || birthDate == '' || cpf == '' || number == '') {
            throw Error('Dado incompleto');
        }
        
        const checkCPF = this.userRepository.checkUser(cpf);
        if(checkCPF) {
            throw Error('CPF já cadastrado');
        }

        const user = this.userRepository.create({name, birthDate, cpf, number});

        return user;
    }
}

export default createUserService;