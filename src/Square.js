import './Square.css';
import Button from '@material-ui/core/Button';
//import { render } from 'react-dom';
import { Stage, Layer, Rect } from 'react-konva';
import { render } from '@testing-library/react';
import React from 'react';


var lado1 = 100;
var lado2 = 100;

console.log(lado1);
console.log(lado2);


export default function CreateSquare() {

    const stopHandler = () => {
        <div>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Rect
                        x={20}
                        y={50}
                        width={lado1}
                        height={lado2}
                        fill="red"
                        shadowBlur={10}
                    />
                </Layer>
            </Stage>
        </div >
    };


    return (
        <div>
        <Button variant="contained" color="primary" onClick={stopHandler}>Click to Make a Square</Button>
        </div>
    );

};