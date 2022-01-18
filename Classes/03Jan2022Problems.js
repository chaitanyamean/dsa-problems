// Q1. Single Element in a Sorted Array
/* 
Given a sorted array of integers A where every element appears twice except for one element 
which appears once, find and return this single element that appears only once.

NOTE: Users are expected to solve this in O(log(N)) time.
*/

// Boundary checks
// Pair Index property
// Unique element property
// Partiotion property


function findSingleElementSorted(A) {
        // boundary checks
        let low = 0
        let high = A.length-1
        let mid;

        if(high == 0) return A[0]
         if(A[0] != A[1]) {
            return A[0]
        } 
         if(A[high] != A[high - 1]) {
            return A[high]
        }

        while(low <= high) {
            mid = low + (high-low) / 2
            // unique property
            if(A[mid] != A[mid + 1] && A[mid] != A[mid - 1]) {
                return A[mid]
            }

            // partition property
            else if((mid % 2 ==0 && A[mid] == A[mid + 1]) ||
                (mid % 2 == 1 && A[mid] == A[mid - 1])) {
                    low = mid + 1
                }
            else {
                high = mid - 1;
            } 
        }

        return -1



}

// console.log(findSingleElementSorted([1,1,2,3,3,4,4,8,8]))
// console.log(findSingleElementSorted([1, 1, 2, 4, 4, 5, 5, 6, 6]))
// console.log(findSingleElementSorted([13, 13, 21, 21, 27, 50, 50, 102, 102, 108, 108, 110, 110, 117, 117, 120, 120, 123, 123, 124, 124, 132, 132, 164, 164, 166, 166, 190, 190, 200, 200, 212, 212, 217, 217, 225, 225, 238, 238, 261, 261, 276, 276, 347, 347, 348, 348, 386, 386, 394, 394, 405, 405, 426, 426, 435, 435, 474, 474, 493, 493 ]))




function gfgsolution(nums) {
    if (nums.length === 1) return nums[0]
    
    let left = 0;
    let right = nums.length-1;
    let mid;
    
    while (left < right) {
        mid = ((right+left)/2) | 0;
        
        // to stopping our while loop from running infinitely.
        // when left and right will have a difference of 1
        // and we calculate the mid then it will always be the same and our loop will run infinitely 
        if (left === mid) {
            return nums[left] === nums[left-1] ? nums[right] : nums[left]
        }
        
        if (mid % 2 === 0) {
            
            nums[mid] === nums[mid+1] ? (left = mid) : (right = mid)
                        
        } else {
            
            nums[mid] === nums[mid-1] ? (left = mid) : (right = mid)
            
        }
    }
    return nums[mid]
}

// console.log(gfgsolution([1,1,2,3,3,4,4,8,8]))
// console.log(gfgsolution([1, 1, 2, 4, 4, 5, 5, 6, 6]))
// console.log(gfgsolution([13, 13, 21, 21, 27, 50, 50, 102, 102, 108, 108, 110, 110, 117, 117, 120, 120, 123, 123, 124, 124, 132, 132, 164, 164, 166, 166, 190, 190, 200, 200, 212, 212, 217, 217, 225, 225, 238, 238, 261, 261, 276, 276, 347, 347, 348, 348, 386, 386, 394, 394, 405, 405, 426, 426, 435, 435, 474, 474, 493, 493 ]))


function findIndexOfNumber(A, B) {
        let low = 0
        let high = A.length -1
        let mid;

        if(A[0] > B) return 0
        if(B > A[high]) return high+1
        while(low <= high) {
            mid = Math.floor((high+low)/2)

            if(A[mid] == B) {
                return mid
            }

            if(A[mid] < B) {
                low = mid + 1
            } else {
                high = mid - 1
            }

        }

        return low
}


// console.log(findIndexOfNumber([1,3,5,7], 7))


function firstOccurence(A, B) {
    let low =0
    let high = A.length-1
    let mid;
    let res=-1

    while(low <= high) {
        mid = Math.floor((high+low)/2)

        if(A[mid] < B) {
            low = mid + 1
        } else if(A[mid] > B) {
            high = mid -1
            // # If arr[mid] is same as x, we 
            // # update res and move to the left 
            // # half.
        } else {
            res = mid
            high = mid -1;
        }
    }
    return res;
}

function findSecondOccurence(A,B) {
    let low =0
    let high = A.length-1
    let mid;
    let res=-1
    while(low <= high) {
        mid = Math.floor((high+low)/2)

        if(A[mid] < B) {
            low = mid + 1
        } else if(A[mid] > B) {
            high = mid -1
        //     # If arr[mid] is same as x, we 
        // # update res and move to the Right
        // # half. 
        } else {
            res = mid
            low = mid + 1;
        }
    }
    return res;
}

function searchForARange(A, B) {

    let first = firstOccurence(A,B)
    console.log(first)
    let second = findSecondOccurence(A,B)

    console.log(second)
}


searchForARange([1, 2, 2, 2, 2, 3, 4, 7, 8, 8], 2)