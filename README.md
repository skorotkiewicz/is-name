# is-name

> Checks if the given string contains a human name

## Install

```sh
$ npm install is-name
// or
$ yarn add is-name
```

## Import

```javascript
const { isName, matchName } = require("is-name");
```

## Usage

```javascript
isName("Sebastian Peter Korotkiewicz"); // boolean: true
isName("Sebastian Korotkiewicz"); // boolean: true
isName("Apple"); // boolean: false

matchName("Hello I'm Sebastian Peter Korotkiewicz and you?");
// array: [ 'Sebastian Peter Korotkiewicz' ]

matchName("Hello I'm Sebastian Korotkiewicz and you?");
// array: [ 'Sebastian Korotkiewicz' ]
```
