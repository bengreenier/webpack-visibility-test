import { Animal } from "./animal";
import { Dialects } from "./dialect";

export class Dog extends Animal<"dog"> {
  constructor(term: Dialects["dog"]) {
    super("dog", term);
  }
}
