import { FlatCompat } from '@eslint/eslintrc'
import path from 'path'
import { fileURLToPath } from 'url'

import globals from 'globals'
import js from '@eslint/js'

// https://eslint.org/docs/latest/use/configure/migration-guide#predefined-and-shareable-configs
// flat config 관련 문서
// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  // mimic ESLintRC-style extends
  //...compat.extends('eslint-config-airbnb-base'),
  ...compat.extends('eslint-config-prettier'),
  {
    rules: {
      'no-console': 'warn', // console 메서드 사용 시 경고 표시
      'no-underscore-dangle': 'warn', // 밑줄 사용 시 경고 표시
    },
  },
  {
    languageOptions: {
      ecmaVersion: 2022, // 최신 ECMAScript 버전 사용
      sourceType: 'module', // ESM 지원
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ignores: [
      'node_modules/',
      'package.json',
      'package-lock.json',
      'yarn-error.json',
      'yarn.lock',
      '*.md',
      '*.log',
      'eslint.config.js', // config file 제외
    ],
  },
]
