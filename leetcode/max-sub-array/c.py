from typing import List
class Solution:
  def maxSubArray(self, nums: List[int]) -> int:
    # infinity
    maxNum = float("-inf")
    sum = 0
    for num in nums:
      if sum < 0:
        sum = 0
      sum += num
      maxNum = max(sum, maxNum)
    return maxNum

solution = Solution()
print(solution.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))