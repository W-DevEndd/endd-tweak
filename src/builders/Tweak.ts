import { Section } from "../utils/Section";

class TweakMap extends Map<string, Section> {
    toString() {
        const obj: any = [];
        for (const [key, value] of this.entries()) {
            obj.push({
                section_name: key,
                ...value,
            })
        }
        return JSON.stringify(obj, null, 2);
    }
}

export const Tweak = new TweakMap();
