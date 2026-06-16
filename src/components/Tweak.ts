import type { TweakProps } from "../types/properties/TweakProps";
import TweakTypes from "../types/TweakTypes";

export class Tweak<T extends TweakProps> {
    private type: TweakTypes;
    private props: T;

    constructor(type: TweakTypes, props: T) {
        this.type = type;
        this.props = props;
    }
}
