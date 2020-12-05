/* tslint:disable */
/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType } from 'graphql';
/**
 * This file is auto-generated by graphql-schema-typescript
 * Please note that any changes in this file may be overwritten
 */
 

/*******************************
 *                             *
 *          TYPE DEFS          *
 *                             *
 *******************************/
export interface GQLRootQuery {
  Users: Array<GQLUser>;
  User: GQLUser | null;
  Products: Array<GQLIProduct> | null;
  Search: GQLSearchResult | null;
}

export interface GQLUserFilter {
  username: Array<string | null> | null;
}

/**
 * A user of the system
 */
export interface GQLUser {
  firstName: string;
  lastName: string;
  
  /**
   * 
   * @deprecated Email will replace username. If you are still using username please change it
   */
  username: string;
  email: string;
  role: GQLUserRole;
  
  /**
   * Url to the image
   */
  profilePicture: string | null;
  
  /**
   * Account must be activated before using
   */
  activated: boolean;
}

/**
 * Different role will have different access to our functionality
 * In the future, this will be changed by having User as interface
 * and implementing multiple User
 */
export enum GQLUserRole {
  
  /**
   * System Administrator
   */
  SYS_ADMIN = 'SYS_ADMIN',
  
  /**
   * Manager - Have access to manage functions
   */
  MANAGER = 'MANAGER',
  
  /**
   * General Staff
   */
  CLERK = 'CLERK',
  
  /**
   * 
   * @deprecated Use 'clerk' instead
   */
  EMPLOYEE = 'EMPLOYEE'
}

export interface GQLIProduct {
  id: string;
  name: string;
  
  /**
   * Customers who buy this will also buy these
   */
  relatedProducts: Array<GQLIProduct>;
}

/** Use this to resolve interface type IProduct */
export type GQLPossibleIProductTypeNames = 'ProductA' | 'ProductB';

export interface GQLIProductNameMap {
  IProduct: GQLIProduct;
  ProductA: GQLProductA;
  ProductB: GQLProductB;
}

export type GQLSearchResult = GQLUser | GQLProductA | GQLProductB;

/** Use this to resolve union type SearchResult */
export type GQLPossibleSearchResultTypeNames = 'User' | 'ProductA' | 'ProductB';

export interface GQLSearchResultNameMap {
  SearchResult: GQLSearchResult;
  User: GQLUser;
  ProductA: GQLProductA;
  ProductB: GQLProductB;
}

/**
 * Try to cover List/Non-null List/Non-null list of non-null items
 */
export interface GQLProductA extends GQLIProduct {
  id: string;
  name: string;
  
  /**
   * Customers who buy this will also buy these
   */
  relatedProducts: Array<GQLIProduct>;
  ProductA1: GQLProductScalar | null;
  ProductA2: GQLProductScalar;
  ProductA3: Array<GQLProductScalar | null> | null;
  ProductA4: Array<GQLProductScalar | null>;
  ProductA5: Array<GQLProductScalar> | null;
  ProductA6: Array<GQLProductScalar>;
}

/**
 * Test with all scalar field
 */
export interface GQLProductScalar {
  scalarString1: string | null;
  scalarString2: string;
  scalarInt1: number | null;
  scalarInt2: number;
  scalarFloat1: number | null;
  scalarFloat2: number;
  scalarID1: string | null;
  scalarID2: string;
  scalarBoolean1: boolean | null;
  scalarBoolean2: boolean;
}

export interface GQLProductB extends GQLIProduct {
  id: string;
  name: string;
  
  /**
   * Customers who buy this will also buy these
   */
  relatedProducts: Array<GQLIProduct>;
  ProductB1: GQLProductListScalar | null;
  ProductB2: GQLProductListScalar;
  ProductB3: Array<GQLProductListScalar | null> | null;
  ProductB4: Array<GQLProductListScalar | null>;
  ProductB5: Array<GQLProductListScalar> | null;
  ProductB6: Array<GQLProductListScalar>;
}

export interface GQLProductListScalar {
  listString1: Array<string | null> | null;
  listString2: Array<string | null>;
  listString3: Array<string> | null;
  listString4: Array<string>;
  listInt1: Array<number | null> | null;
  listInt2: Array<number | null>;
  listInt3: Array<number> | null;
  listInt4: Array<number>;
  listFloat1: Array<number | null> | null;
  listFloat2: Array<number | null>;
  listFloat3: Array<number> | null;
  listFloat4: Array<number>;
  listID1: Array<string | null> | null;
  listID2: Array<string | null>;
  listID3: Array<string> | null;
  listID4: Array<string>;
  listBoolean1: Array<boolean | null> | null;
  listBoolean2: Array<boolean | null>;
  listBoolean3: Array<boolean> | null;
  listBoolean4: Array<boolean>;
}

export interface GQLRootMutation {
  createUser: GQLUser | null;
}

export interface GQLCreateUserInput {
  username: string;
  email: string;
  password: string;
  createdAt: GQLDate;
}

/**
 * Custom scalar type
 */
export type GQLDate = any;

export interface GQLRootSubscription {
  userLoggedIn: GQLUser;
  saleMade: string;
}

/*********************************
 *                               *
 *         TYPE RESOLVERS        *
 *                               *
 *********************************/
/**
 * This interface define the shape of your resolver
 * Note that this type is designed to be compatible with graphql-tools resolvers
 * However, you can still use other generated interfaces to make your resolver type-safed
 */
export interface GQLResolver {
  RootQuery?: GQLRootQueryTypeResolver;
  User?: GQLUserTypeResolver;
  IProduct?: {
    __resolveType: GQLIProductTypeResolver
  };
  
  SearchResult?: {
    __resolveType: GQLSearchResultTypeResolver
  };
  
  ProductA?: GQLProductATypeResolver;
  ProductScalar?: GQLProductScalarTypeResolver;
  ProductB?: GQLProductBTypeResolver;
  ProductListScalar?: GQLProductListScalarTypeResolver;
  RootMutation?: GQLRootMutationTypeResolver;
  Date?: GraphQLScalarType;
  RootSubscription?: GQLRootSubscriptionTypeResolver;
}
export interface GQLRootQueryTypeResolver<TParent = any> {
  Users?: RootQueryToUsersResolver<TParent>;
  User?: RootQueryToUserResolver<TParent>;
  Products?: RootQueryToProductsResolver<TParent>;
  Search?: RootQueryToSearchResolver<TParent>;
}

export interface RootQueryToUsersArgs {
  input?: GQLUserFilter;
}
export interface RootQueryToUsersResolver<TParent = any, TResult = any> {
  (parent: TParent, args: RootQueryToUsersArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RootQueryToUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RootQueryToProductsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RootQueryToSearchArgs {
  key?: string;
}
export interface RootQueryToSearchResolver<TParent = any, TResult = any> {
  (parent: TParent, args: RootQueryToSearchArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLUserTypeResolver<TParent = any> {
  firstName?: UserToFirstNameResolver<TParent>;
  lastName?: UserToLastNameResolver<TParent>;
  username?: UserToUsernameResolver<TParent>;
  email?: UserToEmailResolver<TParent>;
  role?: UserToRoleResolver<TParent>;
  profilePicture?: UserToProfilePictureResolver<TParent>;
  activated?: UserToActivatedResolver<TParent>;
}

export interface UserToFirstNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToLastNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToUsernameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToEmailResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToRoleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToProfilePictureResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToActivatedResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLIProductTypeResolver<TParent = any> {
  (parent: TParent, context: any, info: GraphQLResolveInfo): 'ProductA' | 'ProductB' | Promise<'ProductA' | 'ProductB'>;
}
export interface GQLSearchResultTypeResolver<TParent = any> {
  (parent: TParent, context: any, info: GraphQLResolveInfo): 'User' | 'ProductA' | 'ProductB' | Promise<'User' | 'ProductA' | 'ProductB'>;
}
export interface GQLProductATypeResolver<TParent = any> {
  id?: ProductAToIdResolver<TParent>;
  name?: ProductAToNameResolver<TParent>;
  relatedProducts?: ProductAToRelatedProductsResolver<TParent>;
  ProductA1?: ProductAToProductA1Resolver<TParent>;
  ProductA2?: ProductAToProductA2Resolver<TParent>;
  ProductA3?: ProductAToProductA3Resolver<TParent>;
  ProductA4?: ProductAToProductA4Resolver<TParent>;
  ProductA5?: ProductAToProductA5Resolver<TParent>;
  ProductA6?: ProductAToProductA6Resolver<TParent>;
}

export interface ProductAToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductAToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductAToRelatedProductsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductAToProductA1Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductAToProductA2Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductAToProductA3Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductAToProductA4Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductAToProductA5Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductAToProductA6Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLProductScalarTypeResolver<TParent = any> {
  scalarString1?: ProductScalarToScalarString1Resolver<TParent>;
  scalarString2?: ProductScalarToScalarString2Resolver<TParent>;
  scalarInt1?: ProductScalarToScalarInt1Resolver<TParent>;
  scalarInt2?: ProductScalarToScalarInt2Resolver<TParent>;
  scalarFloat1?: ProductScalarToScalarFloat1Resolver<TParent>;
  scalarFloat2?: ProductScalarToScalarFloat2Resolver<TParent>;
  scalarID1?: ProductScalarToScalarID1Resolver<TParent>;
  scalarID2?: ProductScalarToScalarID2Resolver<TParent>;
  scalarBoolean1?: ProductScalarToScalarBoolean1Resolver<TParent>;
  scalarBoolean2?: ProductScalarToScalarBoolean2Resolver<TParent>;
}

export interface ProductScalarToScalarString1Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductScalarToScalarString2Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductScalarToScalarInt1Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductScalarToScalarInt2Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductScalarToScalarFloat1Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductScalarToScalarFloat2Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductScalarToScalarID1Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductScalarToScalarID2Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductScalarToScalarBoolean1Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductScalarToScalarBoolean2Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLProductBTypeResolver<TParent = any> {
  id?: ProductBToIdResolver<TParent>;
  name?: ProductBToNameResolver<TParent>;
  relatedProducts?: ProductBToRelatedProductsResolver<TParent>;
  ProductB1?: ProductBToProductB1Resolver<TParent>;
  ProductB2?: ProductBToProductB2Resolver<TParent>;
  ProductB3?: ProductBToProductB3Resolver<TParent>;
  ProductB4?: ProductBToProductB4Resolver<TParent>;
  ProductB5?: ProductBToProductB5Resolver<TParent>;
  ProductB6?: ProductBToProductB6Resolver<TParent>;
}

export interface ProductBToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductBToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductBToRelatedProductsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductBToProductB1Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductBToProductB2Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductBToProductB3Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductBToProductB4Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductBToProductB5Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductBToProductB6Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLProductListScalarTypeResolver<TParent = any> {
  listString1?: ProductListScalarToListString1Resolver<TParent>;
  listString2?: ProductListScalarToListString2Resolver<TParent>;
  listString3?: ProductListScalarToListString3Resolver<TParent>;
  listString4?: ProductListScalarToListString4Resolver<TParent>;
  listInt1?: ProductListScalarToListInt1Resolver<TParent>;
  listInt2?: ProductListScalarToListInt2Resolver<TParent>;
  listInt3?: ProductListScalarToListInt3Resolver<TParent>;
  listInt4?: ProductListScalarToListInt4Resolver<TParent>;
  listFloat1?: ProductListScalarToListFloat1Resolver<TParent>;
  listFloat2?: ProductListScalarToListFloat2Resolver<TParent>;
  listFloat3?: ProductListScalarToListFloat3Resolver<TParent>;
  listFloat4?: ProductListScalarToListFloat4Resolver<TParent>;
  listID1?: ProductListScalarToListID1Resolver<TParent>;
  listID2?: ProductListScalarToListID2Resolver<TParent>;
  listID3?: ProductListScalarToListID3Resolver<TParent>;
  listID4?: ProductListScalarToListID4Resolver<TParent>;
  listBoolean1?: ProductListScalarToListBoolean1Resolver<TParent>;
  listBoolean2?: ProductListScalarToListBoolean2Resolver<TParent>;
  listBoolean3?: ProductListScalarToListBoolean3Resolver<TParent>;
  listBoolean4?: ProductListScalarToListBoolean4Resolver<TParent>;
}

export interface ProductListScalarToListString1Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductListScalarToListString2Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductListScalarToListString3Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductListScalarToListString4Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductListScalarToListInt1Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductListScalarToListInt2Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductListScalarToListInt3Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductListScalarToListInt4Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductListScalarToListFloat1Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductListScalarToListFloat2Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductListScalarToListFloat3Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductListScalarToListFloat4Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductListScalarToListID1Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductListScalarToListID2Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductListScalarToListID3Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductListScalarToListID4Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductListScalarToListBoolean1Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductListScalarToListBoolean2Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductListScalarToListBoolean3Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProductListScalarToListBoolean4Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLRootMutationTypeResolver<TParent = any> {
  createUser?: RootMutationToCreateUserResolver<TParent>;
}

export interface RootMutationToCreateUserArgs {
  input?: GQLCreateUserInput;
}
export interface RootMutationToCreateUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: RootMutationToCreateUserArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLRootSubscriptionTypeResolver<TParent = any> {
  userLoggedIn?: RootSubscriptionToUserLoggedInResolver<TParent>;
  saleMade?: RootSubscriptionToSaleMadeResolver<TParent>;
}

export interface RootSubscriptionToUserLoggedInArgs {
  filter?: string;
}
export interface RootSubscriptionToUserLoggedInResolver<TParent = any, TResult = any> {
  resolve?: (parent: TParent, args: RootSubscriptionToUserLoggedInArgs, context: any, info: GraphQLResolveInfo) => TResult;
  subscribe: (parent: TParent, args: RootSubscriptionToUserLoggedInArgs, context: any, info: GraphQLResolveInfo) => AsyncIterator<TResult>;
}

export interface RootSubscriptionToSaleMadeResolver<TParent = any, TResult = any> {
  resolve?: (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo) => TResult;
  subscribe: (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo) => AsyncIterator<TResult>;
}
