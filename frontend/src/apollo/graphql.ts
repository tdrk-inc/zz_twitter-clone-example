import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Timestamp: { input: any; output: any };
};

export type Account = {
  __typename?: "Account";
  createdAt: Scalars["Timestamp"]["output"];
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  updatedAt: Scalars["Timestamp"]["output"];
};

export type CreatePostInput = {
  basePostId?: InputMaybe<Scalars["Int"]["input"]>;
  content: Scalars["String"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  createPost: Post;
  removePost: Post;
  signup: Scalars["String"]["output"];
  updatePost: Post;
};

export type MutationCreatePostArgs = {
  input: CreatePostInput;
};

export type MutationRemovePostArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationSignupArgs = {
  input: SignupAccountInput;
};

export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};

export type Post = {
  __typename?: "Post";
  account: Account;
  accountId: Scalars["String"]["output"];
  basePostId?: Maybe<Scalars["Int"]["output"]>;
  content: Scalars["String"]["output"];
  createdAt: Scalars["Timestamp"]["output"];
  id: Scalars["Int"]["output"];
  relatedPosts?: Maybe<Array<Post>>;
  updatedAt: Scalars["Timestamp"]["output"];
};

export type Query = {
  __typename?: "Query";
  account: Account;
  getHello: Scalars["String"]["output"];
  post: Post;
  posts: Array<Post>;
  signin: Scalars["String"]["output"];
};

export type QueryPostArgs = {
  id: Scalars["Int"]["input"];
};

export type QuerySigninArgs = {
  input: SigninAccountInput;
};

export type SigninAccountInput = {
  id: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type SignupAccountInput = {
  id: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type UpdatePostInput = {
  content: Scalars["String"]["input"];
  id: Scalars["Int"]["input"];
};

export type DisplayPostFragment = { __typename?: "Post" } & Pick<
  Post,
  "id" | "content"
> & { account: { __typename?: "Account" } & Pick<Account, "id" | "name"> };

export type UpdatePostFragment = { __typename?: "Post" } & Pick<
  Post,
  "id" | "content"
>;

export type GetAccountQueryVariables = Exact<{ [key: string]: never }>;

export type GetAccountQuery = { __typename?: "Query" } & {
  account: { __typename?: "Account" } & Pick<Account, "id" | "name">;
};

export type SignupMutationVariables = Exact<{
  input: SignupAccountInput;
}>;

export type SignupMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "signup"
>;

export type SigninQueryVariables = Exact<{
  input: SigninAccountInput;
}>;

export type SigninQuery = { __typename?: "Query" } & Pick<Query, "signin">;

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInput;
}>;

export type CreatePostMutation = { __typename?: "Mutation" } & {
  createPost: { __typename?: "Post" } & Pick<Post, "id">;
};

export type UpdatePostMutationVariables = Exact<{
  input: UpdatePostInput;
}>;

export type UpdatePostMutation = { __typename?: "Mutation" } & {
  updatePost: { __typename?: "Post" } & Pick<Post, "id">;
};

export type RemovePostMutationVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type RemovePostMutation = { __typename?: "Mutation" } & {
  removePost: { __typename?: "Post" } & Pick<Post, "id">;
};

export type GetPostsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPostsQuery = { __typename?: "Query" } & {
  posts: Array<
    { __typename?: "Post" } & Pick<Post, "id" | "content"> & {
        account: { __typename?: "Account" } & Pick<Account, "id" | "name">;
      }
  >;
};

export type GetPostQueryVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type GetPostQuery = { __typename?: "Query" } & {
  post: { __typename?: "Post" } & Pick<Post, "id" | "content" | "updatedAt"> & {
      account: { __typename?: "Account" } & Pick<Account, "id" | "name">;
      relatedPosts?: Maybe<
        Array<
          { __typename?: "Post" } & Pick<Post, "id" | "content"> & {
              account: { __typename?: "Account" } & Pick<
                Account,
                "id" | "name"
              >;
            }
        >
      >;
    };
};

export const DisplayPostFragmentDoc = gql`
  fragment DisplayPost on Post {
    id
    content
    account {
      id
      name
    }
  }
`;
export const UpdatePostFragmentDoc = gql`
  fragment UpdatePost on Post {
    id
    content
  }
`;
export const GetAccountDocument = gql`
  query GetAccount {
    account {
      id
    }
  }
`;

/**
 * __useGetAccountQuery__
 *
 * To run a query within a React component, call `useGetAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAccountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAccountQuery,
    GetAccountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAccountQuery, GetAccountQueryVariables>(
    GetAccountDocument,
    options
  );
}
export function useGetAccountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAccountQuery,
    GetAccountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAccountQuery, GetAccountQueryVariables>(
    GetAccountDocument,
    options
  );
}
export function useGetAccountSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAccountQuery,
    GetAccountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAccountQuery, GetAccountQueryVariables>(
    GetAccountDocument,
    options
  );
}
export type GetAccountQueryHookResult = ReturnType<typeof useGetAccountQuery>;
export type GetAccountLazyQueryHookResult = ReturnType<
  typeof useGetAccountLazyQuery
>;
export type GetAccountSuspenseQueryHookResult = ReturnType<
  typeof useGetAccountSuspenseQuery
>;
export type GetAccountQueryResult = Apollo.QueryResult<
  GetAccountQuery,
  GetAccountQueryVariables
>;
export const SignupDocument = gql`
  mutation Signup($input: SignupAccountInput!) {
    signup(input: $input)
  }
`;
export type SignupMutationFn = Apollo.MutationFunction<
  SignupMutation,
  SignupMutationVariables
>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignupMutation,
    SignupMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignupMutation, SignupMutationVariables>(
    SignupDocument,
    options
  );
}
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<
  SignupMutation,
  SignupMutationVariables
>;
export const SigninDocument = gql`
  query Signin($input: SigninAccountInput!) {
    signin(input: $input)
  }
`;

/**
 * __useSigninQuery__
 *
 * To run a query within a React component, call `useSigninQuery` and pass it any options that fit your needs.
 * When your component renders, `useSigninQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSigninQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSigninQuery(
  baseOptions: Apollo.QueryHookOptions<SigninQuery, SigninQueryVariables> &
    ({ variables: SigninQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SigninQuery, SigninQueryVariables>(
    SigninDocument,
    options
  );
}
export function useSigninLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SigninQuery, SigninQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SigninQuery, SigninQueryVariables>(
    SigninDocument,
    options
  );
}
export function useSigninSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    SigninQuery,
    SigninQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<SigninQuery, SigninQueryVariables>(
    SigninDocument,
    options
  );
}
export type SigninQueryHookResult = ReturnType<typeof useSigninQuery>;
export type SigninLazyQueryHookResult = ReturnType<typeof useSigninLazyQuery>;
export type SigninSuspenseQueryHookResult = ReturnType<
  typeof useSigninSuspenseQuery
>;
export type SigninQueryResult = Apollo.QueryResult<
  SigninQuery,
  SigninQueryVariables
>;
export const CreatePostDocument = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
    }
  }
`;
export type CreatePostMutationFn = Apollo.MutationFunction<
  CreatePostMutation,
  CreatePostMutationVariables
>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePostMutation,
    CreatePostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(
    CreatePostDocument,
    options
  );
}
export type CreatePostMutationHookResult = ReturnType<
  typeof useCreatePostMutation
>;
export type CreatePostMutationResult =
  Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<
  CreatePostMutation,
  CreatePostMutationVariables
>;
export const UpdatePostDocument = gql`
  mutation UpdatePost($input: UpdatePostInput!) {
    updatePost(input: $input) {
      id
    }
  }
`;
export type UpdatePostMutationFn = Apollo.MutationFunction<
  UpdatePostMutation,
  UpdatePostMutationVariables
>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(
    UpdatePostDocument,
    options
  );
}
export type UpdatePostMutationHookResult = ReturnType<
  typeof useUpdatePostMutation
>;
export type UpdatePostMutationResult =
  Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<
  UpdatePostMutation,
  UpdatePostMutationVariables
>;
export const RemovePostDocument = gql`
  mutation RemovePost($id: Int!) {
    removePost(id: $id) {
      id
    }
  }
`;
export type RemovePostMutationFn = Apollo.MutationFunction<
  RemovePostMutation,
  RemovePostMutationVariables
>;

/**
 * __useRemovePostMutation__
 *
 * To run a mutation, you first call `useRemovePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePostMutation, { data, loading, error }] = useRemovePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemovePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemovePostMutation,
    RemovePostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemovePostMutation, RemovePostMutationVariables>(
    RemovePostDocument,
    options
  );
}
export type RemovePostMutationHookResult = ReturnType<
  typeof useRemovePostMutation
>;
export type RemovePostMutationResult =
  Apollo.MutationResult<RemovePostMutation>;
export type RemovePostMutationOptions = Apollo.BaseMutationOptions<
  RemovePostMutation,
  RemovePostMutationVariables
>;
export const GetPostsDocument = gql`
  query GetPosts {
    posts {
      id
      content
      account {
        id
        name
      }
    }
  }
`;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    options
  );
}
export function useGetPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPostsQuery,
    GetPostsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    options
  );
}
export function useGetPostsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetPostsQuery,
    GetPostsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    options
  );
}
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<
  typeof useGetPostsLazyQuery
>;
export type GetPostsSuspenseQueryHookResult = ReturnType<
  typeof useGetPostsSuspenseQuery
>;
export type GetPostsQueryResult = Apollo.QueryResult<
  GetPostsQuery,
  GetPostsQueryVariables
>;
export const GetPostDocument = gql`
  query GetPost($id: Int!) {
    post(id: $id) {
      id
      content
      updatedAt
      account {
        id
        name
      }
      relatedPosts {
        id
        content
        account {
          id
          name
        }
      }
    }
  }
`;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(
  baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables> &
    ({ variables: GetPostQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    options
  );
}
export function useGetPostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    options
  );
}
export function useGetPostSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetPostQuery,
    GetPostQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    options
  );
}
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostSuspenseQueryHookResult = ReturnType<
  typeof useGetPostSuspenseQuery
>;
export type GetPostQueryResult = Apollo.QueryResult<
  GetPostQuery,
  GetPostQueryVariables
>;
