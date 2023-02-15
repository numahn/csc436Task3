import { useState, useEffect } from "react";

const ArraySort = () => {

    const [numbers, setNumbers] = useState([5,2,7,1,8,4,9,3,6]);
    const [direction, setDirection] = useState('asc');

    // useEffect listens for changes and fires when a change is made

    useEffect(() => {
        sortNumbers();
    }, [])

    const sortNumbers = () => {
        // take the numbers variable and sort them desc if current direction is asc and vice versa
        // change direction to desc if it was asc and vice versa
        // and set that sorted array into the numbers variable(piece of state)

        const sortedNumbers = [...numbers];
        if(direction === 'asc') {
            sortedNumbers.sort((a,b) => b - a);
            setDirection('desc');
        } else {
            sortedNumbers.sort((a,b) => a - b);
            setDirection('asc');
        }
        setNumbers(sortedNumbers);
    }

    return <div>
        <h3>Numbers:</h3>
        <p>{numbers.join(', ')}</p>
        <button onClick={sortNumbers}>ReSort</button> <small>{direction}</small>
    </div>
}

export default ArraySort;