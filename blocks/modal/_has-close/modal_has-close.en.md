### modal_has-close

Modal dialog with close button (`has-close` boolean modifier)

Use case: `BEMJSON`.

Use the boolean `has-close` modifier to create a modal with a close button. Specify button's title via `close` special field object.

#### Example

```js
{
    block : 'modal',
    mods : { 'has-close' : true },
    close : {
        title : 'Close me!'
    },
    content : 'Close this dialog by press on the cross-view button in the top right corner'
}
```
