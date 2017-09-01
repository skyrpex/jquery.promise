# jquery.promise

Lighweight promise implementation using jQuery.

## Installation

Using a script tag:

```html
<script src="https://unpkg.com/jquery@3.2.1/dist/jquery.js"></script>
<script src="https://unpkg.com/jquery.promise@2.0.0/dist/jquery.promise.js"></script>
```

Using NPM:

```bash
$ npm install jquery.promise -S
```

> This package doesn't work in node due to jQuery not being able to run without a browser. You can still use webpack to compile your assets.

## Usage

Using a script tag:

```html
<script>
  const promise = $.Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
</script>
```

Using webpack:

```js
import Promise from 'jquery.promise';

const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000);
});

promise.then(() => console.log('resolved'));

// Static methods
Promise.resolve();
Promise.reject();
Promise.all([ /* ...promises */ ]);
```
