import { Tweak } from "../builders/Tweak";
import { Class } from "./Class";
import { Option } from "./Option";

export class Section extends Class {
    private desc: string;
    private mergedOpts = false;
    private opts: Option<any>[] = [];

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

    addOption(opt: Option<any>) { if (this.mergedOpts) return; this.opts.push(opt) }
    mergeAllOptions() {
        if (this.mergedOpts) return
        this.opts.map((v, i) => {
            this.opts[i] = v.toMerged();
        });
        this.mergedOpts = true;
    }
}

