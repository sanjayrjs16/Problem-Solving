// Q. Define a class of StaffMembers List
//     with foll functions
//     1. add(name, age) takes in name and age, if age>20, add staff to the HTMLAllCollection, otherwise throw and error saying too young
//     2. remove(name) takes in a name. Removes member, if present inide collection and returns true, else returns false
//     3. getSize() returns colection size
//Solution
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
  getSize(){
      return this.members.length
  }
}


let cityTigers = new StaffList();

cityTigers.add("San", 21);

cityTigers.add("Shroof", 22);


cityTigers.add("Lano", 21);


cityTigers.add("916", 20);
console.log(cityTigers.getMembers())

// Q. The message object has a level and text property. eg. msg1 = {level=10, text="foo"}. Define a function joinedLogger(level, sep), which takes in a level and a seperator.
//    This function returns another function, which takes in a variable number of parameters(all msg objects) , and checks if any of the them have level > level.
//    For all those msg objects, whose level > level, print text followed by sep. Eg foo;fing;fly 
    

    function joinedLogger(level, sep) {
        // write your code here
        return (...args) => {
            let arr = args.map((i) => {
                                      if(i.level>=level){
                                          return i.text
                                      }
                                      
                                  });
             return arr.filter((i) => i!= undefined).join(sep)
            
        }
      }
      let messages = [{ level: 2, text: "foo" },{ level: 10, text: "foo" },{ level: 20, text: "bar" }]
      const myLog = joinedLogger(5, ";");
      console.log(myLog(...messages));




