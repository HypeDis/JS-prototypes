Array.prototype.myReverse = function (arr) {
	if (!arr) {
		arr = this;
	}

	let leftP = 0;
	let rightP = arr.length - 1;

	while (leftP < rightP) {
		let temp = arr[leftP];
		arr[leftP] = arr[rightP];
		arr[rightP] = temp;
		leftP += 1;
		rightP -=1;
	}
	
	return arr;
}



let myArray = [1,2,3,4,5];
Array.prototype.myReverse(myArray)

console.log(myArray)

let anotherArray = ['a', 'b', 'c', 'd', 'e', 'f'];
anotherArray.myReverse();

console.log(anotherArray)