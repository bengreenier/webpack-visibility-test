import { Dialects } from "./dialect";
export declare class Animal<TName extends keyof Dialects> {
    private name;
    private term;
    constructor(name: TName, term: Dialects[TName]);
    speak(): void;
}
