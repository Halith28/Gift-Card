/**
 * @author Abdul Halith
 * @email abd.halith994@gmail.com
 * @create date 2021-03-20
 * @modify date 2021-03-20
 * @desc GraphQL client setup done here using the Apollo Client.
 */

import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloGQLClient from "./graphql";

const AppGQLClient = (props) => {
  return (
    <ApolloProvider client={ApolloGQLClient}>{props.children}</ApolloProvider>
  );
};

export default AppGQLClient;
