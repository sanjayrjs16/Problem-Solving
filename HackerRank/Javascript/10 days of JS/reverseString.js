// // Q. Complete the reverseString function; it has one parameter, . You must perform the following actions:

// // Try to reverse string  using the split, reverse, and join methods.
// // If an exception is thrown, catch it and print the contents of the exception's  on a new line.
// // Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.


// function reverseString(s) {
//     let errorflag = false; 
//     let reverseS = "";
//     try{
//         let sArray = s.split("");
//         console.log("1.", sArray);
//          sArray.reverse();
//          console.log("2.", sArray);
//          reverseS = sArray.join("");
//          console.log("3.", reverseS);
        
//     }catch(err){
//         errorflag = true;
//         console.log(err.message);
        
//     }
//     finally{
//         if(errorflag){
//             return s
//         }
//         else{
//             return  reverseS;
//         }
//     }
// }
// const s = "boom";
// console.log(reverseString(s))


class StaffList {
    //add your code here
     constructor(name, age) {
         this.members = []
  }
  add(name, age){
     try{
         if(age>20){
          this.members.push({"name" : name, "age": age})
        
      }
      else {
           console.log("Staff member age must be greater than 20")
      } 
     }
     catch(err){
        console.log(err.message)
     }
  }
  remove(name){
      let element = -1;
      if(this.members.filter((i) => { if(i.name === name){
          element = i;
          return i
      }}).length > 0){
          const index = this.members.indexOf(element);
                if (index > -1) {
                this.members.splice(index, 1);
                }
                return true
      }
      else{
          return false
      }
  }
  getMembers(){
      return this.members
  }
}

let cityTigers = new StaffList();

cityTigers.add("San", 21);

cityTigers.add("Shroof", 22);


cityTigers.add("Lano", 21);


cityTigers.add("916", 20);
console.log(cityTigers.getMembers())