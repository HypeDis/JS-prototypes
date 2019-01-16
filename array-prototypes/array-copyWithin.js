Array.prototype.myCopyWithin = function(target, start = 0, end = this.length) {
  if (target < 0) {
		target = this.length + target;
	}
	if (start < 0) {
		start = this.length + start;
	}
  if (end < 0) {
		end = this.length + end;
	}
	if (Array.isArray(this) && target >= this.length) {
		throw 'target out of range';
	}
  for (let i = start; i < end; i++) {
		this[target] = this[i];
		
		if (target + 1 > this.length - 1) {
			break;
		}
		target += 1;
	}
	return this;
}

let arr = [0,1,2,3,4,5];

console.log(arr.myCopyWithin(4));
console.log(arr.myCopyWithin(-3));
console.log(arr.myCopyWithin(4, 2, 3))
console.log(arr.myCopyWithin(-5, -3, -1))