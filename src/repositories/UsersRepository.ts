import User from "../models/User";

interface createUserDTO {
    id?: string;
    name: string;
    birthDate: string; 
    cpf: string;
    number: string;
}

class UserRepository {
    private users: User[];

    constructor() {
        this.users = [];
    }

    public create({ name, birthDate, cpf, number}: createUserDTO): User {
        const user = new User({name, birthDate, cpf, number});

        this.users.push(user);

        return user;
    }

    public checkUser (cpf: string) {
        const user = this.users.find(user => user.cpf === cpf);

        return user;
    }

    public all(): User[] {
        return this.users;
    }

    public find(id: string) {
        const user = this.users.find(user => user.id === id);

        return user;
    }

    public upDate({id, name, birthDate, cpf, number}: createUserDTO): User {
        const userIndex = this.users.findIndex(user => user.id === id);

        this.users[userIndex].name = name;
        this.users[userIndex].birthDate = birthDate;
        this.users[userIndex].cpf = cpf;
        this.users[userIndex].number = number;
        this.users[userIndex].attDate = new Date();

        return this.users[userIndex];
    }

    public deleteUser(id : string) {
        const userIndex = this.users.findIndex(user => user.id === id);

        this.users.splice(userIndex, 1);
    }
}

export default UserRepository;