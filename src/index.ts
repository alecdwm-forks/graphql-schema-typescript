import * as fs from 'fs';
import * as path from 'path';
import { GraphQLSchema } from 'graphql';
import { GenerateTypescriptOptions, defaultOptions } from './types';
import { TSResolverGenerator } from './typescriptResolverGenerator';
import { TypeScriptGenerator } from './typescriptGenerator';
import { formatTabSpace } from './utils';

const packageJson = require(path.join(__dirname, '../package.json'));

const jsDoc = 
`/**
 * This file is auto-generated by ${packageJson.name}
 * Please note that any changes in this file may be overwritten
 */`;

const typeDefsDecoration = [
    '/*******************************',
    ' *                             *',
    ' *          TYPE DEFS          *',
    ' *                             *',
    ' *******************************/'
];

const typeResolversDecoration = [
    '/*********************************',
    ' *                               *',
    ' *         TYPE RESOLVERS        *',
    ' *                               *',
    ' *********************************/'
];

export const generateTypeScriptTypes = async (schema: GraphQLSchema, outputPath: string, options: GenerateTypescriptOptions = defaultOptions) => {
    const mergedOptions = { ...defaultOptions, ...options };
    const tsGenerator = new TypeScriptGenerator(mergedOptions);
    const tsResolverGenerator = new TSResolverGenerator(mergedOptions);

    const typeDefs = await tsGenerator.generate(schema);
    const typeResolvers  = await tsResolverGenerator.generate(schema);

    let header = [...typeResolvers.importHeader, jsDoc];

    let body: string[] = [
        ...typeDefsDecoration, 
        ...typeDefs, 
        ...typeResolversDecoration, 
        ...typeResolvers.body
    ];

    if (mergedOptions.namespace) {
        body = [
            `namespace ${options.namespace} {`,
            ...body,
            '}'
        ];
    }

    if (mergedOptions.global) {
        body = [
            'export { };',
            '',
            'declare global {',
            ...body,
            '}'
        ];
    }

    const formatted = formatTabSpace([...header, ...body], mergedOptions.tabSpaces);

    fs.writeFileSync(outputPath, formatted.join('\n'), 'utf-8');
};