require('../css/home.css');

 // 非递归算法
function binary_search(arr, key) {
    var low = 0,
        high = arr.length - 1;
    while(low <= high){
        var mid = parseInt((high + low) / 2);
        if(key == arr[mid]){
            return  mid;
        }else if(key > arr[mid]){
            low = mid + 1;
        }else if(key < arr[mid]){
            high = mid -1;
        }else{
            return -1;
        }
    }
};
var arr2 = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
var result = binary_search(arr2, 10);
//console.log(result); // 9 返回目标元素的索引值


var quickSort = function(arr) {
　　if (arr.length <= 1) { return arr; }
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right));
};

var arr1 = [85,24,63,45,17,31,96,50];
console.log(quickSort(arr1));
console.log(Math.max(15,20));
console.log(Math.max.apply(Array, arr1));
console.log(Math.min.apply(Array, arr1));
console.log(Object.prototype.toString.call(arr1));

function Super(name) {
	this.name = name;
}
Super.prototype ={
	constructor: Super,
	getName: function() {
		return this.name;
	}
}
var newA = new Super();
function Sub() {
	Super.call(this, 'jxj2')
	this.age = 26;
}
Sub.prototype = new Super();
Sub.prototype.getAge = function() {
	return this.name + this.age;
}
// Sub.prototype = {
// 	constructor: Super.prototype,
// 	getAge: function() {
// 		return this.name + this.age
// 	}
// }
var newB = new Sub();
console.log(newB.getAge());

class Animal {
	constructor(name)  {
		this.name = name;
	}
	speak() {
		console.log(this.name);
	}
}

var animal = new Animal('jxj');
animal.speak();





