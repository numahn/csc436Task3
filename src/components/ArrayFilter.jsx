import products from "../utils/products";
const ArrayFilter = () => {
    return <ol>
        {
            products.filter(( {onSale} ) => onSale ===true).map(({id, name}) => <li key={id}>{name}</li>)
        }
    </ol>
}

export default ArrayFilter;