# import math
# arr = [4,30,34,5,9]
# result_arr = [arr[0]]
# j = 0
# i =0
# # print(str(arr[1])[0] <str(result_arr[0])[0])
# print(int(math.log10(arr[0])) + 1)

nums = [1, 1, 2, 2, 2, 2, 3,4, 4, 4,5, 5,6, 6,7]
refElement = nums[0];

for i in range(1, len(nums)):
    if(refElement == nums[i] and i<len(nums) -1):
        i += 1
        print("Before Delete", nums)
        while(nums[i]==refElement and i<len(nums)):
            del nums[i]
            i += 1
            print("After delete", nums, nums[i])
        refElement = nums[i]
            
    else:
        refElement = nums[i+1]



print(nums)