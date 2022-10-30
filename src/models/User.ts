import { uuid } from "uuidv4";

interface userDTO {
    name: string;
    birthDate: string;
    cpf: string;
    number: string;
}

class User {
    id: string;

    name: string;

    birthDate: string;

    cpf: string;

    number: string;

    createDate: Date;

    attDate: Date;

    constructor({name, birthDate, 
        cpf, number}: Omit<userDTO, 'id'>) {
            this.id = uuid();
            this.name = name;
            this.birthDate = birthDate;
            this.cpf = cpf;
            this.number = number;
            this.createDate = new Date();
            this.attDate = new Date();
    }
}

export default User;