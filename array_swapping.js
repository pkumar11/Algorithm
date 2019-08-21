var arr = [ 1, 2, 3, 4, 5 ];
var d = 3;
var n = arr.length;
var temp;
for (let i = 0; i < d; i++) {
	temp = arr[0];
	for (var j = 0; j < n; j++) {
		arr[j] = arr[j + 1];
	}
	arr[n - 1] = temp;
}
console.log(arr);
