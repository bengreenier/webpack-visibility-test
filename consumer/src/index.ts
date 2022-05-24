import { Animal, cat, dog } from "@webpack-visibility-test/producer";

// tsc error: 'Animal' cannot be used as a value because it was exported using 'export type'.ts(1362)
// const instance_cannot_exist = new Animal("dog", "woof");

dog.speak();
cat.speak();
