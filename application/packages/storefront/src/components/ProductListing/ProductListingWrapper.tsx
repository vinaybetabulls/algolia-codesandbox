import React from "react";
import { useHits } from "react-instantsearch";
import ProductListingUI from "@alg/ui-components/build/ProductListing/ProductListing";
const ProductListingWrapper = () => {
  const { hits } = useHits();
  console.log({ hits });
  return (
    <>
      <div>ProductListingWrapper</div>
      <ProductListingUI />
    </>
  );
};

export default ProductListingWrapper;
