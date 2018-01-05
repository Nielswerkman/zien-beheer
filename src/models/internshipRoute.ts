import { Institution } from "models/institution";

export class InternshipRoute {

    id: number;
    name: String;
    institution: Institution

    constructor(name?: String, institution?: Institution, id?: number) {
        this.id = id;
        this.name = name;
        this.institution = institution;
    }
}
