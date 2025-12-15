import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';
import alias from '@rollup/plugin-alias';
import { fileURLToPath } from 'url';
import { dirname, resolve as pathResolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  {
    input: 'src/lib/index.js',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins: [
      peerDepsExternal(),
      // Redirect icons/index.js to the generated static registry for library builds
      alias({
        entries: [
          {
            find: /^\.\.\/\.\.\/\.\.\/icons$/,
            replacement: pathResolve(__dirname, 'src/icons/iconRegistry.generated.js')
          },
          {
            find: /^\.\.\/icons$/,
            replacement: pathResolve(__dirname, 'src/icons/iconRegistry.generated.js')
          }
        ]
      }),
      resolve({
        extensions: ['.js', '.jsx'],
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx'],
        presets: ['@babel/preset-react'],
      }),
      commonjs(),
      svgr({
        svgo: false,
        exportType: 'default',
      }),
      postcss({
        extract: 'styles.css',
        minimize: true,
        sourceMap: true,
      }),
      terser(),
    ],
    external: ['react', 'react-dom'],
  },
];
