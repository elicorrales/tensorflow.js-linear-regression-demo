'use strict';

let tfSlope;      // m
let tfyOffset;    // b
let lastLineX0;
let lastLineY0;
let lastLineX1;
let lastLineY1;

let learningRate = document.getElementById('learningRateSlider').value;
let prevLearningRate = learningRate;

let optimizer = tf.train.sgd(learningRate);

const setupRegressionLineStuff = () => {

    // the regression line has to start somewhere
    tfSlope = tf.variable(tf.scalar(random(1)));
    tfyOffset = tf.variable(tf.scalar(random(1)));

}


const seeIfNewOptimizerRequiredBecauseLearningRateChanged = () => {
    if (prevLearningRate !== learningRate) {
        optimizer = tf.train.sgd(learningRate);
        prevLearningRate = learningRate;
    }
};

let newPointCount = 0;
const guessAndMinimizeLoss = () => {

    //if (xVals !== undefined && xVals.length > 0 && newPointCount < xVals.length) {
    if (xVals !== undefined && xVals.length > 0 ) {
        newPointCount++;
        tf.tidy(() => {
            const ys = tf.tensor1d(yVals);
            optimizer.minimize(() =>  loss(predictYs(xVals), ys));
        });

        //console.log('guessAndMinLos tensors: ' + tf.memory().numTensors);
        alreadyDrewRegressionLine = false;
    }

}



//predictions are the y values from the predict function
//labels are the REAL y values
const loss = (predictions, labels) => {
    return predictions.sub(labels).square().mean();
}



const predictYs = (xVals) => {
    const tfxs = tf.tensor1d(xVals);
    // y = m * x  + b  ; slope-intercept formula for a line
    return tfxs.mul(tfSlope).add(tfyOffset);
}


let alreadyDrewRegressionLine = false;
const drawRegressionLine = () => {

    if (xVals !== undefined && xVals.length >0 && !alreadyDrewRegressionLine) {
        alreadyDrewRegressionLine = true;
        stroke(255);
        let rgyVals;
        tf.tidy(() => {
            let tfRgYs = predictYs([0,1]);
            rgyVals = tfRgYs.dataSync();
        });


        let rgy0 = rgyVals[0];
        let rgy1 = rgyVals[1];

        let x0 = map(0, 0, 1, 0, width);
        let x1 = map(1, 0, 1, 0, width);
        let y0 = map(rgy0, 0, 1, height, 0);
        let y1 = map(rgy1, 0, 1, height, 0);
        //console.log(x0,':',y0,' - ',x1,':',y1);
        lastLineX0 = x0;
        lastLineX1 = x1;
        lastLineY0 = y0;
        lastLineY1 = y1;
    }

    line(lastLineX0,lastLineY0,lastLineX1,lastLineY1);
}