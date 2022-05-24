import { Animal } from "./animal";
import { Dialects } from "./dialect";
export declare class Cat extends Animal<"cat"> {
    constructor(term: Dialects["cat"]);
}
