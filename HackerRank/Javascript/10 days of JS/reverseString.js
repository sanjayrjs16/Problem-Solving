// Q. Complete the reverseString function; it has one parameter, . You must perform the following actions:

// Try to reverse string  using the split, reverse, and join methods.
// If an exception is thrown, catch it and print the contents of the exception's  on a new line.
// Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.


function reverseString(s) {
    let errorflag = false; 
    let reverseS = "";
    try{
        let sArray = s.split("");
        console.log("1.", sArray);
         sArray.reverse();
         console.log("2.", sArray);
         reverseS = sArray.join("");
         console.log("3.", reverseS);
        
    }catch(err){
        errorflag = true;
        console.log(err.message);
        
    }
    finally{
        if(errorflag){
            return s
        }
        else{
            return  reverseS;
        }
    }
}
const s = "boom";
console.log(reverseString(s))


