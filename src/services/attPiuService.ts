import PiuRepository from "../repositories/PiuRepository";
import Piu from "../models/Piu";

interface Request {
    id: string;
    idDoUsuario: string;
    text: string;
}

class attPiuService {
    private piuRepository: PiuRepository;

    constructor(piuRepository: PiuRepository) {
        this.piuRepository = piuRepository;
    }

    public execute({ id, idDoUsuario, text}: Request): Piu {
        if(this.piuRepository.find(id)) {
            if (text == '') {
                throw Error('Texto vazio');
            }
            if (text.length > 140 ) {
                throw Error('Texto excedeu o limite');
            }

            const piu = this.piuRepository.upDate({id, idDoUsuario, text});

            return piu;
        } else {
            throw Error('Piu não encontrado');
        }
    }
}

export default attPiuService;