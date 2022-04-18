import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};


export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  createUser: User;
};


export type MutationCreateTodoArgs = {
  input: NewTodo;
};


export type MutationCreateUserArgs = {
  input: NewUser;
};

export type NewTodo = {
  title: Scalars['String'];
  userID: Scalars['Int'];
};

export type NewUser = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  todos: Array<Todo>;
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['Int'];
  title: Scalars['String'];
  done: Scalars['Boolean'];
  user: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TodoFieldsFragment = (
  { __typename?: 'Todo' }
  & Pick<Todo, 'id' | 'title' | 'done'>
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  ) }
);

export type TodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosQuery = (
  { __typename?: 'Query' }
  & { todos: Array<(
    { __typename?: 'Todo' }
    & TodoFieldsFragment
  )> }
);

export type CreateTodoMutationVariables = Exact<{
  title: Scalars['String'];
  userID: Scalars['Int'];
}>;


export type CreateTodoMutation = (
  { __typename?: 'Mutation' }
  & { createTodo: (
    { __typename?: 'Todo' }
    & TodoFieldsFragment
  ) }
);

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  ) }
);

export const TodoFieldsFragmentDoc = gql`
    fragment todoFields on Todo {
  id
  title
  done
  user {
    id
    name
  }
}
    `;
export const TodosDocument = gql`
    query todos {
  todos {
    ...todoFields
  }
}
    ${TodoFieldsFragmentDoc}`;

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TodosQuery, TodosQueryVariables>) {
        return ApolloReactHooks.useQuery<TodosQuery, TodosQueryVariables>(TodosDocument, baseOptions);
      }
export function useTodosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TodosQuery, TodosQueryVariables>(TodosDocument, baseOptions);
        }
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = ApolloReactCommon.QueryResult<TodosQuery, TodosQueryVariables>;
export const CreateTodoDocument = gql`
    mutation createTodo($title: String!, $userID: Int!) {
  createTodo(input: {title: $title, userID: $userID}) {
    ...todoFields
  }
}
    ${TodoFieldsFragmentDoc}`;
export type CreateTodoMutationFn = ApolloReactCommon.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *      userID: // value for 'userID'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, baseOptions);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = ApolloReactCommon.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($name: String!) {
  createUser(input: {name: $name}) {
    id
    name
  }
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;