#### button_action_mod

##### Parent blocks's modifier switch (`action` modifier with `mod` value)

Use case: `BEMJSON`.

Use the `action` modifier with the `mod` value to create a button that switches the parent block's modifier on click. Specify parent target, modifier name and value via `js` params field.

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
