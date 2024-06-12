import React from 'react';
import ShowLaptop from "./ShowLaptop";

function Product(){
    let tvData = {
        name: 'Samsung TV',
        price: 12000,
        brand: 'Samsung'
    };
    let mobileData = {
        name: 'galaxy j7 pro',
        price: 17000,
        brand: ' Samsung'
    };
    let laptopData = {
        name: 'Hp new series',
        price: 90000,
        brand: ' HP'
    };


    return (
        <div>
            <h1>Product Details</h1>
            <hr/>
            <ShowTv data={tvData} />
            <ShowMobile data={mobileData} />
            <ShowLaptop data={laptopData}/>
        </div>
    )
    
}
// export default Product;

class NewMobile extends React.Component{
    render(){
        let newMobileData = {
            name: 'galaxy j7 pro',
            price: 17000,
            brand: ' Samsung'
        }

        return(
           <div>
            <ShowNewMobile  data={newMobileData}/>
           </div> 
        )
    }
}
// export default NewMobile;
export {NewMobile, Product};    // multiple exports

class ShowNewMobile extends React.Component{
    render(){
        return(
            <div>
                <h1>New Mobile Data</h1>
                <h3>Mobile Name: {this.props.data.name}</h3>
                <h3>Price: {this.props.data.price}</h3>
                <h3>Braand: {this.props.data.brand}</h3>
            </div>
        )
    }
}

function ShowTv(items){
    return (
        <div>
            <h1>Tv Data</h1>
            <h3>Tv name: {items.data.name}</h3>
            <h3>Price: {items.data.price}</h3>
            <h3>Brand: {items.data.brand}</h3>
        </div>
    )
}

function ShowMobile(items){
    return(
        <div>
            <h1>Mobile Data</h1>
            <h3>Mobile Name: {items.data.name}</h3>
            <h3>Price: {items.data.price}</h3>
            <h3>Braand: {items.data.brand}</h3>
        </div>
    )
}
