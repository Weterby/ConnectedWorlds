//load the rollup library
import typescript from 'rollup-plugin-typescript2'
import copy from 'rollup-plugin-copy'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import replace from '@rollup/plugin-replace'
import del from 'rollup-plugin-delete'
import { terser } from 'rollup-plugin-terser'

//check if the environment is chosen
const args = require('args-parser')(process.argv);
const environment = args.environment || 'development';

//plugins pool
const plugins = [];

//clear the dist directory if production
if(environment === 'production'){
    plugins.push(del({targets: 'dist/*'}));
}

//typescript to javascript compilation
plugins.push(typescript({
    lib: ["es5","es6","dom"],
    target: "es5"
}));

//replace variables in the code
plugins.push(replace({
    __buildEnv__: environment
}));

if(environment=== 'production'){
    plugins.push(terser())
}

//copy static resources
plugins.push(copy({
    targets: [
        { src: 'node_modules/phaser/dist/phaser.min.js', dest: 'dist'},
        { src: 'src/html/index.html', dest: 'dist'},
        { src: 'src/html/favicon.ico', dest: 'dist'},
        { src: 'src/assets', dest: 'dist'}
    ]
}));

//server launch on localhost with built project
plugins.push(serve({
    open: true,
    contentBase: 'dist',
    host: 'localhost',
    port:3000,
    headers: {
        'Access_Control_Allow_Origin': '*'
    }
}))

if(environment!=='production'){
    plugins.push(livereload('dist'));
}


// rollup.js configuration
export default {
    input: [
        './src/game.ts'
    ],
    output: {
        file: './dist/game.js',
        name: 'ConnectedWorlds',
        format: 'iife' ,
        sourcemap: environment === 'production' ? false : true
    },
    external: ['phaser'],
    plugins: plugins
}