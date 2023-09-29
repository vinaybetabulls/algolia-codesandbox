import React from 'react'
import { useInstantSearch } from 'react-instantsearch'

const ProductListing = () => {
    const { results } = useInstantSearch()
    console.log({ results })
    return (
        <div>ProductListing</div>
    )
}

export default ProductListing