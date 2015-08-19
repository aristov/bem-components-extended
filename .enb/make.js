var fs = require('fs'),
    path = require('path');

module.exports = function (config) {
    config.includeConfig('enb-bem-specs');

    var specs = config
            .module('enb-bem-specs')
            .createConfigurator('specs');

    specs.configure({
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

    config.includeConfig('enb-bem-examples');

    var tests = config
            .module('enb-bem-examples')
            .createConfigurator('tests');

    tests.configure({
        destPath : 'desktop.tests',
        levels : ['blocks'],
        techSuffixes : 'tests'
    });

    config.nodes(['desktop.tests/*/*'], function(nodeConfig) {
        nodeConfig.addTechs([
            [ require('enb-bem-techs/techs/levels'), { levels : getLevels() } ],
            require('enb-bem-techs/techs/bemjson-to-bemdecl'),
            require('enb-bem-techs/techs/deps'),
            require('enb-bem-techs/techs/files'),

            [ require('enb-bemxjst/techs/bemhtml'), { devMode : true } ],
            require('enb-bemxjst/techs/html-from-bemjson'),

            [ require('enb-stylus/techs/css-stylus'), { target : '?.pre.css' } ],
            [ require('enb-autoprefixer/techs/css-autoprefixer'), { sourceTarget : '?.pre.css', destTarget : '?.css' } ],
            [ require('enb-borschik/techs/borschik'), { sourceTarget : '?.css', destTarget : '_?.css', minify : false } ],

            [ require('enb/techs/js'), { sourceSuffixes : ['vanilla.js', 'js'], target : '?.pre.js' } ],
            [ require('enb-modules/techs/prepend-modules'), { source : '?.pre.js', target : '?.js' } ],
            [ require('enb-borschik/techs/borschik'), { sourceTarget : '?.js', destTarget : '_?.js', minify : false } ]
        ]);
        nodeConfig.addTargets(['?.html', '_?.css', '_?.js']);

        function getLevels() {
            var nodeDir = nodeConfig.getNodePath(),
                sublevelDir = path.join(nodeDir, 'blocks'),
                levels = [
                    { path : 'libs/bem-core/common.blocks', check : false },
                    { path : 'libs/bem-core/desktop.blocks', check : false },
                    { path : 'libs/bem-components/common.blocks', check : false },
                    { path : 'libs/bem-components/common.blocks', check : false },
                    { path : 'libs/bem-components/design/common.blocks', check : false },
                    { path : 'libs/bem-components/design/desktop.blocks', check : false },
                    { path : 'blocks', check : true }/*,
                    { path : 'desktop.tests/button/simple/blocks', check : true }*/
                ];

            if(fs.existsSync(sublevelDir)) {
                levels.push(sublevelDir);
            }

            return levels.map(function(l) { return config.resolvePath(l); });
        }
    });
};
