module.exports = function (config) {
    config.includeConfig('enb-bem-specs');

    var examples = config
            .module('enb-bem-specs')
            .createConfigurator('specs');

    examples.configure({
        destPath : 'desktop.specs',
        levels : ['blocks'],
        sourceLevels : [
            { path : 'libs/bem-core/common.blocks', check : false },
            { path : 'libs/bem-core/desktop.blocks', check : false },
            { path : 'libs/bem-components/common.blocks', check : false },
            { path : 'libs/bem-components/desktop.blocks', check : false },
            { path : 'libs/bem-pr/spec.blocks', check : false },
            'blocks'
        ],
        jsSuffixes : ['js', 'vanilla.js'],
        depsTech : 'deps'
    });
};
