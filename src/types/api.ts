/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AuthToken {
  /**
   * Username
   * @minLength 1
   */
  username: string;
  /**
   * Password
   * @minLength 1
   */
  password: string;
  /**
   * Token
   * @minLength 1
   */
  token?: string;
}

export interface Quote {
  /** ID */
  id?: number;
  /**
   * Amount
   * @format decimal
   */
  amount: string;
  /**
   * Created
   * @format date-time
   */
  created?: string;
  /**
   * Title
   * @minLength 1
   * @maxLength 100
   */
  title: string;
  /** Supplier id */
  supplier_id?: string;
}

export interface Supplier {
  /** ID */
  id?: number;
  /**
   * Name
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /** Description */
  description?: string;
}

export interface CreateUser {
  /**
   * Id
   * @format uuid
   */
  id?: string;
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @minLength 1
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  /**
   * Password
   * @minLength 1
   * @maxLength 128
   */
  password: string;
  /**
   * First name
   * @maxLength 150
   */
  first_name?: string;
  /**
   * Last name
   * @maxLength 150
   */
  last_name?: string;
  /**
   * Email address
   * @format email
   * @maxLength 254
   */
  email?: string;
  /** Auth token */
  auth_token?: string;
}

export interface User {
  /**
   * Id
   * @format uuid
   */
  id?: string;
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @minLength 1
   */
  username?: string;
  /**
   * First name
   * @maxLength 150
   */
  first_name?: string;
  /**
   * Last name
   * @maxLength 150
   */
  last_name?: string;
}

export namespace ApiTokenAuth {
  /**
   * No description
   * @tags api-token-auth
   * @name ApiTokenAuthCreate
   * @request POST:/api-token-auth/
   * @secure
   */
  export namespace ApiTokenAuthCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AuthToken;
    export type RequestHeaders = {};
    export type ResponseBody = AuthToken;
  }
}

export namespace Api {
  /**
   * No description
   * @tags api
   * @name ApiV1QuotesList
   * @request GET:/api/v1/quotes/
   * @secure
   */
  export namespace ApiV1QuotesList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** A page number within the paginated result set. */
      page?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      count: number;
      /** @format uri */
      next?: string | null;
      /** @format uri */
      previous?: string | null;
      results: Quote[];
    };
  }
  /**
   * No description
   * @tags api
   * @name ApiV1SuppliersList
   * @request GET:/api/v1/suppliers/
   * @secure
   */
  export namespace ApiV1SuppliersList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** A page number within the paginated result set. */
      page?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      count: number;
      /** @format uri */
      next?: string | null;
      /** @format uri */
      previous?: string | null;
      results: Supplier[];
    };
  }
  /**
   * No description
   * @tags api
   * @name ApiV1SuppliersRead
   * @request GET:/api/v1/suppliers/{id}/
   * @secure
   */
  export namespace ApiV1SuppliersRead {
    export type RequestParams = {
      /** A unique integer value identifying this supplier. */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Supplier;
  }
  /**
   * @description Creates user accounts
   * @tags api
   * @name ApiV1UsersCreate
   * @request POST:/api/v1/users/
   * @secure
   */
  export namespace ApiV1UsersCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateUser;
    export type RequestHeaders = {};
    export type ResponseBody = CreateUser;
  }
  /**
   * @description Updates and retrieves user accounts
   * @tags api
   * @name ApiV1UsersRead
   * @request GET:/api/v1/users/{id}/
   * @secure
   */
  export namespace ApiV1UsersRead {
    export type RequestParams = {
      /**
       * A UUID string identifying this user.
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }
  /**
   * @description Updates and retrieves user accounts
   * @tags api
   * @name ApiV1UsersUpdate
   * @request PUT:/api/v1/users/{id}/
   * @secure
   */
  export namespace ApiV1UsersUpdate {
    export type RequestParams = {
      /**
       * A UUID string identifying this user.
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = User;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }
  /**
   * @description Updates and retrieves user accounts
   * @tags api
   * @name ApiV1UsersPartialUpdate
   * @request PATCH:/api/v1/users/{id}/
   * @secure
   */
  export namespace ApiV1UsersPartialUpdate {
    export type RequestParams = {
      /**
       * A UUID string identifying this user.
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = User;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }
}
