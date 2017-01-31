/**
 * Created by USER on 30.01.2017.
 */


function matrixArray(rows,columns){
    var arr = new Array();
    for(var i=0; i<columns; i++){
        arr[i] = new Array();
        var d = document.createElement('div');
        for(var j=0; j<rows; j++){
            arr[i][j] = i*j;
            d.innerHTML += arr[i][j]+' ' ;
        }
        document.body.appendChild(d);
    }
    return arr;
}
var myMatrix = matrixArray(5,10);

