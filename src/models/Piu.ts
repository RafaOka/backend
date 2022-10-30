/* id, id do usuário, texto, data de criação e data de
atualização */

import { uuid } from "uuidv4";

interface PiuDTO {
    idDoUsuario: string;
    text: string;
}

class Piu {
    id: string;

    idDoUsuario: string;

    text: string;

    createDate: Date;

    attDate: Date;

    constructor({ idDoUsuario, text}: PiuDTO) {
        this.id = uuid();
        this.idDoUsuario = idDoUsuario;
        this.text = text;
        this.createDate = new Date();
        this.attDate = new Date();
    }
}

export default Piu;