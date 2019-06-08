'use strict';

let canvas;

function setup() {

    setupRegressionLineStuff();

    canvas = createCanvas(700,700);
    canvas.parent('canvasParent');
    background(0);
}

function draw() {

    seeIfNewOptimizerRequiredBecauseLearningRateChanged();

    background(0);

    drawPointsUserAdded();

    guessAndMinimizeLoss(); // 'train'

    drawRegressionLine();
}


