// a js file to remind me of callback functions

// callback used in forEach
function forEach(arr, callback) {
    for ( let i = 0; i < arr.length; i++){
        // invoke the callback function
        callback(arr[i], i, arr);
    }
}

// forEach([1,2,3,4,5], callback)

//-----------------2. findIndex function
//Return the index of the 1st element in the array, for which the callback return a truthy value. -1 is returned if the callback never returns a truthy value
var arr = [3, 4, 6, 2, 1]

// write the callback function here:
function findIndex(array, callback){
    for ( let i = 0; i < array.length; i++) {
        if (callback(arr[i], i, arr)){
        // return the index:
        return i;
        }
    // return -1 if callback is a falsy value
    return -1;
    }
}

console.log(findIndex(arr, function(num, index, array){
    // condition is customized here
    return num === 3;
}));

// ------------3. Use setTimeOut()

function countDown(seconds) {
    // write the setInterval function here
    var intervalId = setInterval(function() {
      seconds--;
      if (seconds > 0) {
        console.log("Timer:", seconds);
      } else {
        console.log("Ring Ring Ring!!!");
        clearInterval(intervalId);
      }
    }, 1000);
  }

// ---------------- 4. Promise
var counter = 0;
function incCounter(){
    counter ++;
    console.log("Counter:", counter);
}

function runLater(callback, timeInMs){
    // this function returns a Promise object, define what this object does here:
    var p = new Promise(function(resolve, reject){
        // chain in the setTimeout function
        setTimeout(function(){
            var res = callback();
            resolve(res);
        }, timeInMs);
    });

    return p
}

runLater(incCounter, 1000)
    .then(function(){
        return runLater(incCounter, 2000);
    })
    .then(function(){
        return runLater(incCounter, 3000);
    })
    .then(function(){
        // not necessary to write this function
        console.log("Function finished!")
    })
    .catch(function(){
        console.log("There is an error!")
    })




