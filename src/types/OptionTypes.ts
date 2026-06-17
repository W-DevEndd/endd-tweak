
export enum OptionType {
    Bool = "boolean",
    Range = "range",
}

export interface OptionDisplay {
    name: string;
    imagePath: string;
    description?: string;
}

interface BaseOptProps<D, L> {
    defaultValue: D;
    linkedTo: L;

    value?: D;
}

export interface BoolOptProps extends BaseOptProps<boolean, any> {}
export interface RangeOptProps extends BaseOptProps<number, any> {
    min: number;
    max: number;
    step: number;
}

export type OptionProps = BoolOptProps | RangeOptProps;
