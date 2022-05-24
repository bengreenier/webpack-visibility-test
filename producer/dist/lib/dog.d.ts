import { Animal } from "./animal";
import { Dialects } from "./dialect";
export declare class Dog extends Animal<"dog"> {
    constructor(term: Dialects["dog"]);
}
