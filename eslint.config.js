import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      react: react,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'unused-imports/no-unused-imports': 'error',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Padding rules
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        { blankLine: 'always', prev: '*', next: 'return' },
      ],

      // TypeScript specific rules
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

      // General code quality rules
      'no-console': ['warn'],
      eqeqeq: ['error', 'always'],
      'no-duplicate-imports': 'error',
      'no-unused-expressions': 'error',
      'no-return-await': 'error',
      'prefer-const': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      curly: ['error', 'all'],

      // React specific rules
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/prop-types': 'off',
      'react/jsx-pascal-case': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'react/self-closing-comp': 'error',
      'react/hook-use-state': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
)
