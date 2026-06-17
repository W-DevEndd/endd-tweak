import { Class } from "../types/Class";
import type { BooleanProps } from "../types/properties/BooleanProps";
import type { RangeProps } from "../types/properties/RangeProps";
import type { TweakProps } from "../types/properties/TweakProps";
import TweakTypes from "../types/TweakTypes";

export class Tweak<T extends TweakProps> extends Class {

    private type: TweakTypes;
    private props: T;

    private constructor(type: TweakTypes, props: T) {
        super();
        this.type = type;
        this.props = props;
    }

    static bool(props: BooleanProps = {}) {
        return new Tweak<BooleanProps>(TweakTypes.Boolean, props);
    }
    static range(props: RangeProps = {}) {
        return new Tweak<RangeProps>(TweakTypes.Range, props);
    }
}
