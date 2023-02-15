import React from 'react'
import products from '../utils/products'

export default function ArrayMap() {
    return (
        <div>
        {products.map((product) => {
        const {name} = product
        return <div key={`${name}`} className="product">
                <p>{name}</p>
            </div>

    })}
        </div>
    )
}
