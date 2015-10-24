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
            mods : { theme : 'islands', 'has-close' : true },
            close : {
                title : 'Close this fucking dialog!'
            },
            content : 'Modal with close button'
        }
    ]
});
