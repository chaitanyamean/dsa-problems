/**
 * Rain water trapped
 * We need to use 2 pointer technique to solve the problem
 * TC: O(N) SC: O(1)
 * 
 */

function rainWaterTrapped(A) {
    let n = A.length
    
    if(n <= 2) return 0;
    
    let left_max = A[0]
    let right_max = A[n-1]
    let trappedWater = 0;
    let left = 1
    let right = n-2

    while(left <= right) {
        if(left_max < right_max) {
            if(A[left] >= left_max) {
                left_max = A[left]
            } else {
                trappedWater += left_max - A[left]
            }
            left += 1
        } else {
            if(A[right] > right_max) {
                right_max = A[right]
            } else {
                trappedWater += right_max - A[right]
            }
            right -= 1
        }
    }
    return trappedWater
}


console.log(rainWaterTrapped([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ]))