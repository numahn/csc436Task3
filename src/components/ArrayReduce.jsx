import products from "../utils/products";
const ArrayReduce = () => {

    

    const totalCost = products.reduce((accumulator, item) => {
        return accumulator + item.price;
    }, 0);


    return  <div>
                <p className="text-center">Product total prices is {totalCost} dollars.</p>
            </div>
}

export default ArrayReduce;