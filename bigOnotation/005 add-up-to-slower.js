// for loop 
//O(n)
// FOR NESTED LOOPS, O(N)INSIDE OF O(N) WHICH IS O(nSquare)


//auxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs
// most primitives (boolean, numbers, undefined, null) are constant space


function addUpTo(n) { 
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
// addUpTo(15);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)