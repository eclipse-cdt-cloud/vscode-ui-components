/**********************************************************************************
 * Copyright (c) 2025-2026 EclipseSource, Arm Limited and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License as outlined in the LICENSE File
 **********************************************************************************/

import eslint from '@eslint/js';
import headers from 'eslint-plugin-headers';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    {
        ignores: ['**/node_modules', '**/lib'],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                ...globals.node
            }
        },
        rules: {
            // ESLint Convention
            quotes: ['error', 'single'],
            semi: ['error', 'always'],

            'block-spacing': ['error', 'always'],
            'brace-style': [
                'error',
                '1tbs',
                {
                    allowSingleLine: true
                }
            ],
            'eol-last': ['error'],
            'linebreak-style': ['error', 'unix'],

            // ESLint Best Practices
            'no-console': ['warn'],
            'no-constant-condition': [
                'error',
                {
                    checkLoops: false
                }
            ],

            'no-trailing-spaces': ['error'],
            'object-curly-spacing': ['error', 'always']
        }
    },
    {
        name: 'typescript',
        files: ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.tsx'],
        plugins: {
            typescript: tseslint
        },
        rules: {
            '@typescript-eslint/explicit-member-accessibility': [
                'error',
                {
                    accessibility: 'explicit',
                    overrides: {
                        constructors: 'off'
                    }
                }
            ],
            '@typescript-eslint/no-this-alias': 'off',
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_'
                }
            ]
        }
    },
    {
        name: 'headers',
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'],
        plugins: {
            headers: headers
        },
        rules: {
            'headers/header-format': [
                'error',
                {
                    source: 'string',
                    style: 'jsdoc',
                    blockPrefix: '(line)\n',
                    blockSuffix: '\n (line)',
                    content: '(copyright)\n\nThis program and the accompanying materials are made available under the\nterms of the MIT License as outlined in the LICENSE (file)',
                    trailingNewlines: 2,
                    preservePragmas: true,
                    patterns: {
                        copyright: {
                            pattern: 'Copyright \\([cC]\\) \\d{4}(-\\d{4})? .* and others\\.?',
                            defaultValue: `Copyright (c) ${new Date().getFullYear()} Company and others.`
                        },
                        file: {
                            pattern: '[fF]ile\\.?',
                            defaultValue: 'File'
                        },
                        line: {
                            pattern: '\\*+',
                            defaultValue: '*******************************************************************************'
                        }
                    }
                }
            ]
        }
    }
];
