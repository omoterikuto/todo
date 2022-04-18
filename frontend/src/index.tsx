import React from "react";
import ReactDom from "react-dom";
import { Router } from "react-router";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

// ここでApollo Clientの初期化
const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache(),
});

client.query({query: ).then(result => console.log(result));