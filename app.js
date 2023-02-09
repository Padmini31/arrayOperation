var a = ["Neha", "preity", "ashi", "priyal", "raj", "divya", "ashmita", "Vimala", "rakesh", "tina"];
console.log("Array with 10 names is :-" + "\n" + a);
var t = a.indexOf("Nehal");
var p = a.indexOf("preity");
if (t < 0) {
    console.log("searched name not present");
}
else {
    console.log("index position of the serached name is " + t);
}

if (p < 0) {
    console.log("searched name not present");
}
else {
    console.log("index position of the searched name is "+ p+" & the name is "+a[p]);
}
a.splice(4,0,"Rahul");
console.log("name added,new array is :-"+"\n"+a);
a.splice(5,1);
console.log("name is removed,new array is :-"+"\n"+a);

console.log("Array is-");
for(i in a)
console.log(a[i]);