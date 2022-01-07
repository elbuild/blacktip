import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonJS from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import pkg from './package.json';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: pkg.module,
                format: 'es',
                sourcemap: true
            },
            {
                file: pkg.main,
                format: 'cjs',
                sourcemap: true
            }
        ],
        external: [
            ...Object.keys(pkg.peerDependencies || {})
        ],
        plugins: [
            json(),
            resolve(),
            commonJS(),
            typescript({
                typescript: require('typescript')
            }),
            {
                buildEnd: () => {
                    const { exec } = require('child_process');
                    exec('tsc --outDir dist/lib --declarationDir dist/types --declaration true', (err) => {
                        if (err) console.error(err)
                        else {
                            console.log('tsc -> OK');
                        }
                    });
                }
            }
        ]
    }
]

