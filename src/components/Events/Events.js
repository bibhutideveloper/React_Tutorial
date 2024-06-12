import React from 'react';

class ShowMsg extends React.Component {
    render(){
        let ShowMsg = () => {document.write('<h1>hello world</h1>');}
        return(
            <div>
                <h1>Press button to display message</h1>
                <button onClick={ShowMsg}>Click here</button>
            </div>
        )
    }
}
export default ShowMsg;

// onclick = ShowMsg()
// function showMsg(){
//      console.log('hello world')
//}
// backgriund-color => backgroundColor
// onclick => onClick