({
    block : 'page',
    title : 'bem-components: button',
    mods : { theme : 'islands' },
    styles : [{ elem : 'css', url : '_simple.css' }],
    scripts : [{ elem : 'js', url : '_simple.js' }],
    content : [
        {
            block : 'cover',
            content : {
                elem : 'content',
                content : 'Click anywhere!'
            }
        },
        {
            block : 'modal',
            mods : { theme : 'islands' },
            content : {
                block : 'button',
                mods : {
                    theme : 'islands',
                    size : 'xl',
                    action : 'mod'
                },
                js : {
                    target : 'modal',
                    modName : 'visible',
                    modVal : false
                },
                text : 'Close modal!'
            }
        }
    ]
});
