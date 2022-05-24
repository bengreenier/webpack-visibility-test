# webpack-visibility-test

This repo provides an example of how one might choose to create a webpack library that exposes only types and immutable data. Using webpack `5+`.

## Getting Started

This repository is structured into two sub-projects:

- `producer` - exposes the produced library and it's typed
- `consumer` - consumes `producer` as a library

### Building producer

- `cd producer`
- `npm i`
- `npm run build`

That's it! Webpack output should indicate a build was produced.
In fact, you can inspect `dist` to be sure.
Note that `dist` also contains the types (`.d.ts`) files for your library.

### Building consumer

> Note: This sub-project uses a dev server so that the code changes can be tested an immediately applied to your browser.

- `cd consumer`
- `npm i`
- `npm run dev`

This should open your browser to the URL shown in the Webpack output.
This is handy for testing changes, which we be automatically re-transpiled and loaded on the fly.

Open the browser DevTools, and look at the output under the `Console` tab. You should see:

```
[HMR] Waiting for update signal from WDS...
index.jss:1 dog says bark
index.jss:551 [webpack-dev-server] Hot Module Replacement enabled.
index.jss:551 [webpack-dev-server] Live Reloading enabled.
```

> Note that `dog says bark` is the result of running `dog.speak()` in our `index.ts`.

You can now open and edit `index.ts`, uncommenting line 4:

```
import { Animal, dog } from "@webpack-visibility-test/producer";

// tsc error: 'Animal' cannot be used as a value because it was exported using 'export type'.ts(1362)
const instance_cannot_exist = new Animal("dog", "woof");

dog.speak();
```

Save the file - this should produce a compiler error which will be prominently displayed:

```
Compiled with problems:X

ERROR in ./src/index.ts (G:\src\js\webpack-visibility-test\consumer\src\index.ts) 4:34-40

[tsl] ERROR in G:\src\js\webpack-visibility-test\consumer\src\index.ts(4,35)
      TS1362: 'Animal' cannot be used as a value because it was exported using 'export type'.
```

This is because while we export the type `Animal`, we don't export the whole class from our `producer` sub-project, so it isn't possible for the `consumer` to create any old animal.

If you open and edit `index.ts` once again, we can also test the cat instance:

```
import { Animal, cat, dog } from "@webpack-visibility-test/producer";

// tsc error: 'Animal' cannot be used as a value because it was exported using 'export type'.ts(1362)
// const instance_cannot_exist = new Animal("dog", "woof");

dog.speak();
cat.speak();
```

Note that we've re-commented the compiler error line, and added `cat.speak()`. When you save the file, you should see the cat output shown in the browser as well.

Yay! Science!
