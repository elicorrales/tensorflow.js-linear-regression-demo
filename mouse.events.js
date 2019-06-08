'use strict';

function mousePressed() {

    //console.log('pressed');

    if (mouseX>0 && mouseX<width && mouseY>0 && mouseY<height) {
        console.log('user clicked inside canvas');
        addPointIfUserClickedOnEmptyArea();
        //console.table(mathPoints);
    }
}


function mouseReleased() {
    //console.log('released');
}


function mouseDragged() {
    //console.log('dragged');

}

function mouseMoved() {

}

function mouseClicked()  {
/*
    //console.log('clicked');

    if (mouseX>0 && mouseX<width && mouseY>0 && mouseY<height) {
        console.log('user clicked inside canvas');
        removePointIfUserClickedOnIt();
        addPointIfUserClickedOnEmptyArea();
        console.table(mathPoints);
    }
*/
}
