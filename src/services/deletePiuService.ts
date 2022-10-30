import PiuRepository from "../repositories/PiuRepository";

class deletePiuService {
    private piuRepository: PiuRepository;

    constructor(piuRepository: PiuRepository) {
        this.piuRepository = piuRepository;
    }

    public execute(id: string) {
        if(this.piuRepository.find(id)) {
            this.piuRepository.deleteUser(id);
        } else {
            throw Error('Usuario não encontrado');
        }
    }
}

export default deletePiuService;