import React from "react";
import "./index.css";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <Todos />
    </div>
  );
}

<ApolloProvider client={client}>
  <App />
</ApolloProvider>;

const container = document.getElementById("app") as HTMLInputElement;
const root = createRoot(container);
root.render(<App />);

const TODOS = gql`
  query GetTodos {
    todos {
      id
      title
    }
  }
`;

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

function Todos() {
  const { loading, error, data } = useQuery(TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.todos.map(({ id }: { id: number }, title: { title: string }) => (
    <div key={id}>
      <>
        {id}: {title}
      </>
    </div>
  ));
}
