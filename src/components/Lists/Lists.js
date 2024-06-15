import React from 'react';
import './Lists.css'

class Lists extends React.Component {
    render(){
        let fruits = ['mango', 'orange', 'apple', 'grapes', 'guava']
        let item = []

        // for loop
        for(let i=0; i<fruits.length; i++){
            item.push(<li className='fruit'>{fruits[i]}</li>)
            console.log(item)
        }
        
        //for each loop 1st way
        fruits.forEach((x, index) => {
            item.push(<li className='fruit'>{fruits[index]}</li>)
        })

        //for each loop 2nd way
        fruits.forEach((x) => {
            item.push(<li className='fruit'>{x}</li>)
        })

        // for of loop
        for(let x of fruits){
            item.push(<li className='fruit'>{x}</li>)
        }

        return(
            <div>
                <h1>Fruits List</h1>
                <ul>{item}</ul>
            </div>
        )
    }
    
}
export default Lists;

// for
// for each
// for of
// map
