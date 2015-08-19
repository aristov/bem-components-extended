# button

Use this block for creating different types of buttons.

## Overview

### Modifiers of the block

| Modifier | Acceptable values | Use cases | Description |
| ----------- | ------------------- | -------------------- | -------- |
| <a href="#buttonaction">action</a> | <code>'mod'</code> | <code>BEMJSON</code> | Action on click. |

### Modifiers of the block

<a name="buttontype"></a>

#### `action` modifier

Acceptable values: `'mod'`.

Use case: `BEMJSON`.

<a name="action-mod"></a>

##### Parent blocks's modifier switch (`action` modifier with `mod` value)

Use the `action` modifier with the `mod` value to create a button that switches the parent block's modifier on click. Specify parent, modifier name and value via `js` params field.

Button inside popup closes it on click:

```js
{
    block : 'button',
    mods : { action : 'mod' },
    js : {
        target : 'popup',
        modName : 'visible',
        modVal : false
    },
    text : 'Close popup'
}
```
