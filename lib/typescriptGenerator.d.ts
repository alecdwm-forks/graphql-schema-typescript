import { GenerateTypescriptOptions } from './types';
import { IntrospectionQuery } from 'graphql';
export declare class TypeScriptGenerator {
    protected options: GenerateTypescriptOptions;
    protected introspectResult: IntrospectionQuery;
    protected outputPath: string;
    constructor(options: GenerateTypescriptOptions, introspectResult: IntrospectionQuery, outputPath: string);
    generate(): Promise<string[]>;
    private generateCustomScalarType;
    private isStringEnumSupported;
    private generateEnumType;
    private generateEnumValueName;
    private generateObjectType;
    private generateUnionType;
    /**
     * Create a union type e.g: type Color = 'Red' | 'Green' | 'Blue' | ...
     * Also, if the type is too long to fit in one line, split them info multiple lines
     * => type Color = 'Red'
     *      | 'Green'
     *      | 'Blue'
     *      | ...
     */
    private createUnionType;
}
//# sourceMappingURL=typescriptGenerator.d.ts.map