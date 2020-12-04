//Left rotate an array Complete the rotLeft function below.
function rotLeft(a, d) {
    let temp =0, i =0, j =0;
    if(d==0 || d==a.length){
        return a;
    }
    else{
        // for(i =0;i<d;i++){
        //     temp = a[0];
        //     for(j =0; j<a.length-1;j++){
        //         a[j] =a[j+1];
        //     }
        //     a[a.length-1] = temp
        // }
        // return a;
        return a.slice(d).concat(a.slice(0, d));
    }

}
