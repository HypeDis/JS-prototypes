Array.prototype.myForEach = 
function (callback, thisArg = this) {
  for (let i = 0; i < thisArg.length; i++) {
		if(thisArg[i]) {
			callback(thisArg[i], i, thisArg)
		} else {
			continue
		}

	}

}


let myArr = [1,3]
myArr.myForEach(function(element, idx, arr){
	console.log(element, idx, arr);
})

Array.prototype.myForEach(function(elem) {
	console.log(elem);
}, [1,2,3,,4])