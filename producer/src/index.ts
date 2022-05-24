import { Cat } from "./lib/cat";
import { Dialects } from "./lib/dialect";
import { Dog } from "./lib/dog";

export type { Animal } from "./lib/animal";
export const dog = new Dog("bark");
export const cat = new Cat("hiss");
