modules.define(
    'spec',
    ['button', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Button, BEMDOM, $, BEMHTML) {

describe('button_action_mod', function() {
    it('should switch mod of target block on click', function() {
        var container = BEMDOM.init($(BEMHTML.apply({
                block : 'container',
                content : {
                    block : 'button',
                    mods : { action: 'mod' },
                    js : {
                        target : 'container',
                        modName : 'foo',
                        modVal : true
                    },
                    text : 'mod-switcher'
                }
            })).appendTo('body')),
            button = container.find('.button');

        container.hasClass('container_foo').should.be.false;
        button.trigger('pointerpress').trigger('pointerrelease');
        container.bem('container').hasMod('foo').should.be.true;

        BEMDOM.destruct(container);
    });
});

provide();

});
