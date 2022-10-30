import UserRepository from "../repositories/UsersRepository";

class deleteUserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public execute(id: string) {
        if(this.userRepository.find(id)) {
            this.userRepository.deleteUser(id);
        } else {
            throw Error('Usuario não encontrado');
        }
    }
}

export default deleteUserService;