// Q. Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

// Example


// Delete  from  and  from  so that the remaining strings are  and  which are anagrams. This takes  character deletions.

function makeAnagram(a, b) {
    let k = {s: "BOOM!!", l: "KABOOM!"}, str = "sl";
    if(str[0] in k){
        console.log("Yeah, it's here");
    }
    let a_arr = a.split("");
    let b_arr = b.split("");
    console.log("A array: ", a_arr," B array: ", b_arr);
    for(let i =0; i< a.length; i++){
        b_arr.forEach((ele, index) => {
            if(ele === a_arr[i]){
                a_arr.splice(i, 1);
                console.log("A array now",a_arr);
                i = i - 1;
                b_arr.splice(index, 1);
                console.log("B array now", b_arr);
            }
        })
    }
    return a_arr.length + b_arr.length;

}

console.log(makeAnagram("showman", "woman"));