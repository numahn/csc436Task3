const ArrayFilter = () => {

    const items = [
        {
            id: 1,
            name: 'Item 1',
        },
        {
            id: 2,
            name: 'Item 2',
        },
        {
            id: 3,
            name: 'Item 3',
        },
    ];

  


    return <ol>
        {
            items.filter(( {id} ) => id !== 3).map(({id, name}) => <li key={id}>{name}</li>)
        }
    </ol>
}

export default ArrayFilter;