Array.prototype.myConcat = function (...args) {
	let newArr = this.slice();
  for (let i = 0; i < args.length; i++) {
		if(!Array.isArray(args[i])) {
			newArr.push(args[i])
		} else {
      for (let j = 0; j < args[i].length; j++) {
				newArr.push(args[i][j])
			}
		}
	}
	return newArr;
}

let myArr = [1,2,3];
let anotherArr = [1, [1,2,3], 'a'];

console.log(myArr.concat(anotherArr, ['c', 'd', 'e'], {a:'first', b:'second'}));
console.log(myArr);