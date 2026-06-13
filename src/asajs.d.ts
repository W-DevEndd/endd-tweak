
declare module 'asajs/dist/js/compilers/Memory' {
    import type { AnimationKeyframe, AnimType, Renderer, Type } from "asajs";
    import type { Class } from "asajs/dist/types/components/Class";

    type Element = UI<Type, Renderer | null> | AnimationKeyframe<AnimType>;
    interface FileInterface {
        namespace: string;
        elements: Element[];
    }
    type Files = Map<string, FileInterface>;
    export const MemoryModify: Record<string, Record<string, unknown>>;
    export class Memory extends Class {
        protected static files: Files;
        static add(element: UI<Type, Renderer | null> | AnimationKeyframe<AnimType>): void;
        static build(): Map<string, any>;
    }
}