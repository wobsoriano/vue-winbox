import typescript from 'rollup-plugin-typescript2'
import dts from "rollup-plugin-dts"
import pkg from './package.json'

export default [
  {
    plugins: [typescript()],
    external: [
      'vue-demi',
      'winbox',
      'nanoid'
    ],
    input: 'src/index.ts',
    output: [
      {
        format: 'esm',
        file: pkg.module,
        sourcemap: true,
      },
      {
        exports: 'named',
        format: 'cjs',
        file: pkg.main
      },
      {
        file: pkg.unpkg,
        format: 'umd',
        name: 'VueWinBox',
        sourcemap: true,
        globals: {
          'vue-demi': 'VueDemi',
          'nanoid': 'nanoid'
        },
      }
    ]
  },
  {
    input: "src/index.ts",
    plugins: [dts()],
    output: {
      file: "dist/index.d.ts",
      format: "es"
    }
  }
]