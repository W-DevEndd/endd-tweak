import TweakTypes from "../types/TweakTypes";

export class Tweak {
    private type: TweakTypes;
    private props: any;

    constructor(type: TweakTypes, props: any) {
        this.type = type;
    }
}
