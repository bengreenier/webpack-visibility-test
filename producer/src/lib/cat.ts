import { Animal } from "./animal";
import { Dialects } from "./dialect";

export class Cat extends Animal<"cat"> {
  constructor(term: Dialects["cat"]) {
    super("cat", term);
  }
}
