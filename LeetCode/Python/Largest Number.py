# import math
# arr = [4,30,34,5,9]
# result_arr = [arr[0]]
# j = 0
# i =0
# # print(str(arr[1])[0] <str(result_arr[0])[0])
# print(int(math.log10(arr[0])) + 1)


# Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

# Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.

# Clarification:

# Confused why the returned value is an integer, but your answer is an array?

# Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller.

# Internally you can think of this:

# // nums is passed in by reference. (i.e., without making a copy)
# int len = removeDuplicates(nums);

# // any modification to nums in your function would be known by the caller.
# // using the length returned by your function, it prints the first len elements.
# for (int i = 0; i < len; i++) {
#     print(nums[i]);
# }
class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if(len(nums) > 0):
            refElement = nums[0]
            i = 1
            while(i<len(nums)-1):
                if(refElement == nums[i]):
                    i += 1
                    
                    while(nums[i]==refElement):

                        del nums[i]
                        if(i>=len(nums)):
                            break

                    if(i<len(nums)):
                        refElement = nums[i]
                        i+=1
                    else:
                        break

                else:

                    refElement = nums[i]
                    i+=1
        return len(nums)
