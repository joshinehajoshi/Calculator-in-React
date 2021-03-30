import React from 'react';
import {Add, Sub, Mult, Divi} from './Cal'
function App() {
    return (
        <div style={{textAlign:'center', fontSize:'45px'}}>
        
            <p>Sum of two numbers: {Add(2,4)}</p>
            <p>Substraction of two numbers: {Sub(4,2)}</p>
            <p>Multiplication of two numbers: {Mult(2,4)}</p>
            <p>Division of two numbers: {Divi(4,2)}</p>
        
        </div>
    )
}

export default App;