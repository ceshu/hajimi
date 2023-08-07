# hajimi

hajimi - A front-end communication library

## Installing

### Package manager

- Using npm:

```
npm install hajimi
```

- Using ES5 UMD browser module:

```HTML
<script src="./dist/hajimi.min.js"></script>
<script>
    const { Provider, Subscriber } = window.hajimi
</script>
```

Once the package is installed, you can import the library using import or require approach:

- import

```JavaScript
import { Provider, Subscriber } from "hajimi"
```

- require

```JavaScript
const { Provider, Subscriber } = require("hajimi")
```

## Example

Provider and Subscriber are associated by passing in the same string parameter

- Provider

```JavaScript
const provider = new Provider("THE_SAME_STRING");

provider.load({
    add(a, b) {
        return a + b;
    },
    // Support for the Async function
    async subtract(a, b) {
        return a - b;
    },
});
```

- Subscriber

```JavaScript
const foo = new Subscriber("THE_SAME_STRING");

foo.add(1, 2); // 3

(async () => {
    await foo.subtract(9, 5); // 4
})();
```

- In scenarios such as when components are destroyed, you need to destroy the provider.

```JavaScript
provider.destroy();
```
