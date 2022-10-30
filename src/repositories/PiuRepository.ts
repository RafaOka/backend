import Piu from "../models/Piu";

interface createPiuDTO {
    idDoUsuario: string;
    text: string;
}

interface updatePiuDTO {
    idDoUsuario: string;
    id: string;
    text: string;
}

class PiuRepository {
    pius: Piu[];

    constructor() {
        this.pius = [];
    }

    public create({ idDoUsuario, text}: createPiuDTO) {
        const piu = new Piu({idDoUsuario, text});

        this.pius.push(piu);

        return piu;
    }

    public all(): Piu[] {
        return this.pius;
    }

    public find(id: string) {
        const user = this.pius.find(user => user.id === id);

        return user;
    }

    public upDate({id, idDoUsuario, text}: updatePiuDTO): Piu {
        const piuIndex = this.pius.findIndex(piu => piu.id === id);

        this.pius[piuIndex].text = text;
        this.pius[piuIndex].attDate = new Date();

        return this.pius[piuIndex];
    }

    public deleteUser(id : string) {
        const piuIndex = this.pius.findIndex(piu => piu.id === id);

        this.pius.splice(piuIndex, 1);
    }
}

export default PiuRepository;