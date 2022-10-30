import PiuRepository from "../repositories/PiuRepository";
import Piu from "../models/Piu";
import UserRepository from "../repositories/UsersRepository";

interface Request {
    idDoUsuario: string;
    text: string;
}

class createPiuService {
    private piuRepository: PiuRepository;
    private userRepository: UserRepository;

    constructor(piuRepository: PiuRepository, userRepository: UserRepository) {
        this.piuRepository = piuRepository;
        this.userRepository = userRepository;
    }

    public execute({ idDoUsuario, text}: Request): Piu {
        if (text == '') {
            throw Error('Texto vazio');
        }
        if (text.length > 140 ) {
            throw Error('Texto excedeu o limite');
        }
        if(!this.userRepository.find(idDoUsuario)) {
            throw Error('Usuario não encontrado');
        }


        const piu = this.piuRepository.create({idDoUsuario, text});

        return piu;
    }
}

export default createPiuService;