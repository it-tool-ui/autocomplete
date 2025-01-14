# React Autocomplete UI component

This is a very light UI Autocomplete component library for ReactJS.
It's using TailwindCSS for styling.

You can also view the demo and get the source code directly for each component without installing this library.

- [Preview and get the code](https://it-tool.app/autocomplete)

## Installation

```sh
npm install @it-tool-ui/autocomplete
```

```js
import { Autocomplete } from "@it-tool-ui/autocomplete";

<Autocomplete
  placeholder="Input animal"
  disabled={false}
  value={animal}
  onChange={setAnimal}
  options={[
    "Cat",
    "Dog",
    "Zebra",
    "Bird",
    "Snake",
    "Frog",
    "Elephant",
    "Buffalo",
    "Mouse",
    "Tiger",
    "Lion",
  ]}
/>;
```
