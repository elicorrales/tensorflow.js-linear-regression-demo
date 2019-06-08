'use strict';

let xVals = [];
let yVals = [];

const addPointIfUserClickedOnEmptyArea = () => {
        let x = map(mouseX, 0, width, 0, 1);
        let y = map(mouseY, 0, width, 1, 0);
        xVals.push(x);
        yVals.push(y);

}

const drawPointsUserAdded = () => {

    stroke(255);
    strokeWeight(10);
    for (let i=0; i<xVals.length; i++) {

        let x = map(xVals[i], 0, 1, 0, width);
        let y = map(yVals[i], 0, 1, height, 0);
        point(x, y);
    }
}
