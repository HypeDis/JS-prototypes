
// mdn wasn't super clear on how to use entries

Array.prototype.myEntries = function () {
	//create an object with all the entries in it
	let step = 0;
  const entriesIterator = {
		next:  () => {
			step++;
			let result;
      if(step <= this.length) {
				result = {value: [step - 1, this[step - 1]], done: false};
				return result
			}
			return {value: undefined, done: true};
		}
	}
	return entriesIterator;
}




let arr = ['a', 'b', 'c', 'd'];

let iterator = arr.myEntries();

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// for...of not working. need to figure out how to make myEntries return an interable

// for(let val of iterator) {
// 	console.log(val)
// }