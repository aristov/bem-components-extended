modules.define('button', function(provide, Button) {

provide(Button.decl({ modName : 'action', modVal : 'mod' }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this.on('click', this._onClick);
            }
        }
    },

    _onClick : function() {
        var params = this.params;

        this
            .findBlockOutside(params.target)
            .setMod(params.modName, params.modVal);
    }
}));

});
