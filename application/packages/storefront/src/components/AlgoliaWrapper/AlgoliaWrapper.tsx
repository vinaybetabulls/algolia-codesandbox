import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch";

type Props = {
  children: React.ReactNode;
  indexName: string;
};

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);

const AlgoliaWrapper = ({ children, indexName }: Props) => {
  const indexValue = `${indexName}`;
  return (
    <InstantSearch searchClient={searchClient} indexName={indexValue}>
      {children}
    </InstantSearch>
  );
};

export default AlgoliaWrapper;
