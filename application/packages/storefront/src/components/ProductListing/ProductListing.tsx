import AlgoliaWrapper from "components/AlgoliaWrapper/AlgoliaWrapper";
import React from "react";

import { Configure } from "react-instantsearch";
import ProductListingWrapper from "./ProductListingWrapper";

const ProductListing = () => {
  return (
    <AlgoliaWrapper indexName={"instant_search"}>
      <Configure clickAnalytics hitsPerPage={12} distinct={true} page={0} />
      <ProductListingWrapper />
    </AlgoliaWrapper>
  );
};

export default ProductListing;
