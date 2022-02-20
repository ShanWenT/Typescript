var msg = "Hello world";
console.log(msg);
for (var i_1 = 0; i_1 < 2; i_1++) {
    console.log(i_1);
}
var i = 1;
while (i < 3) {
    console.log(i);
    i++;
}
// do{
//     console.log(i);
//     i++;
// } while (i<3);
var j = 1;
while (j < 11) {
    if (j % 5 == 0) {
        console.log(5);
        break;
    }
    j++;
}
function display() {
    console.log("Welcome ts");
}
display();
for (var n = 1; n < 11; n++) {
    if (n % 5 == 0) {
        if (n % 10 == 0) {
            continue;
        }
        console.log(n);
    }
}
var greeting = function () {
    console.log("Hello ts");
};
greeting();
// function pointer
var add = function (x, y) {
    return x + y;
};
console.log(add(10, 20));
// function overloading
// function add2(a:string,b:string)
// function add2(a:number,b:number)
// {
//     return a+b;
// }
// console.log(add2("hello","ts"));
// console.log(add2(1,2));
/////////////////////////////
var s = new String("Welcome");
console.log("Message:" + s);
console.log(s.length);
//Array
var arr = ["mango", "banana", "durian"]; // declare
arr.sort();
console.log(arr);
// //interface
// interface Employee{
//     empID: number;
//     empName: string;
//     getSalary: (number) => number;
//     getManagerName(string) => string;
// }
//class
// class Employee{
//     empID:number;
//     empName: string;
//     constructor(ID:number, name:string){
//         this.empID =ID;
//         this.empName = name;
//     }
//     getSalary(): number{
//         return 400000;
//     }
// }
