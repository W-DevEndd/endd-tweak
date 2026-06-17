import { Tweak } from "../builders/Tweak";
import { Class } from "./Class";

export class Section extends Class {
    private desc: string;
    private opts: any[] = [];

    private constructor(name: string, description: string = "") {
        super();
        this.desc = description;

        Tweak.set(name, this);
    }

    static register(name: string, description?: string | undefined) {
        const sec = Tweak.get(name) || new Section(name, description);
        if (description) sec.setDesc(description);
        return sec;
    }

    setDesc(newDesc: string = "") { this.desc = newDesc }
}

