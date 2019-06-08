'use strict';

const doChangeLearningRate = (slider) => {

    learningRate = slider.value;

    document.getElementById('learningRate').innerHTML = learningRate;
}

const doRemoveAllPointsOnCanvas = () => {

    xVals = [];
    yVals = [];
}