import { BoolOptProps, OptionDisplay, OptionProps, OptionType } from "../types/OptionTypes";
import { Class } from "./Class";

export class Option<T extends OptionProps> extends Class {
    private type: OptionType;
    private properties: T;
    private display: OptionDisplay;

    private constructor(type: OptionType, display: OptionDisplay, properties: T) {
        super();
        this.type = type;
        this.properties = properties;
        this.display = display;
    }

    toMerged() {
        return {
            type: this.type,
            ...this.display,
            ...this.properties,
        }
    }

    static bool(display: OptionDisplay, defaultValue: boolean, linkedTo: any) {
        return new Option<BoolOptProps>(
            OptionType.Bool,
            display,
            {
                defaultValue: defaultValue,
                linkedTo: linkedTo,
            },
        )
    }
}
