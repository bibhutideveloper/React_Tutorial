function ShowLaptop(items){
    return(
        <div>
            <h1>Laptop Data</h1>
            <h3>Laptop Name: {items.data.name}</h3>
            <h3>Price: {items.data.price}</h3>
            <h3>Brand: {items.data.brand}</h3>
        </div>
    )
}
export default ShowLaptop;