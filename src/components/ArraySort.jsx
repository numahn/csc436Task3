import { useEffect } from "react";
import products from "../utils/products";

const ArraySort = () => {

    const priceArr = products.map(products => products.price)
    priceArr.sort((a,b) => a - b);


    return <div>
        <h3>Numbers:</h3>
        <p>{priceArr.join(', ')}</p>
    </div>
}

export default ArraySort;