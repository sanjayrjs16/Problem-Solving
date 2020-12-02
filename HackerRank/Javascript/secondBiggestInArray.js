// Q. Program to find the second biggest number in an array, using JS. 

// Algorithm:
// step 1 : two variables big and secondbig both = 1st element of Array. Start traversing array from second element to the end
//      if num[i] > big means big becoms second big and nums[i] becomes big
//      elseif nums[i]<big, then need to check for secondbig. if secondbig == big, means it's the first encounter for secondbig, so swap. else if secondbig<nums[i], then secondbig becoms nums[i] 
//      else continue;
//at end if secondbig==big, means we have an array with all same elements, otherwise return secondbig

function getSecondLargest(nums) {
    // Complete the function
    let big = nums[0];
    let secondbig = nums[0];
   
    for(let i =1;i<nums.length;i++){
        if(nums[i] > big){
            //swaping the values
            secondbig = big;
            big = nums[i];
        }
        else if (nums[i] < big){
           if(secondbig === big){
               secondbig = nums[i]
           }
           else{
                if(nums[i] > secondbig){  
                    secondbig = nums[i];
                }
           }
        }
        else{
            continue;
        }

    }
    if(secondbig === big){
        return false
    }
   else{
    return `The second biggest is : ${secondbig} and biggest is ${big}`;
   }
}

let nums = [-2, 2, 8, 2]
console.log(getSecondLargest(nums))