import React from "react";
import { ApolloProvider } from "@apollo/react-components";
import { Routes } from "@webiny/app/components/Routes";
import { BrowserRouter } from "@webiny/react-router";
import { createApolloClient } from "./apollo";

// An entrypoint for all SCSS styles your application might have.
import "./App.scss";
import "antd/dist/antd.css";

// The beginning of our React application, where we mount a couple of useful providers.
// If needed, feel free to add new or modify existing providers.
export const App = () => (
    <>
        {/* Sets up a new Apollo GraphQL client, pointed to an existing GraphQL API. */}
        <ApolloProvider client={createApolloClient({ uri: 'https://dfu7yhjigq155.cloudfront.net/graphql'})}> 
            {/* Enables routing in our application. */}
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes />
            </BrowserRouter>
        </ApolloProvider>
    </>
);
