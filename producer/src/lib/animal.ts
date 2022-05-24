import { Dialects } from "./dialect";

export class Animal<TName extends keyof Dialects> {
  constructor(private name: TName, private term: Dialects[TName]) {}

  public speak() {
    console.log(`${this.name} says ${this.term}`);
  }
}
