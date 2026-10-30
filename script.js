//1
console.log(typeof String(123));
console.log(typeof Number("42"));
console.log(typeof Boolean(1));
//2
console.log(Number("3.14"));
console.log(Number("25"));
console.log(Number("hello"));
//3
console.log(Number(""));
console.log(Number(true));
console.log(Number(false));
//4
Boolean(1)
Boolean(0)
Boolean("hello")
Boolean("")
//5
console.log(String(true));
console.log(String(100));
console.log(String(100) + 1);
//6
console.log("5" + 3);
console.log("5" - 3);
console.log("5" * 2);
//7
console.log("6" / "2");
console.log("abc" * 2);
console.log(true + 1);
//8
console.log(parseInt("42px"));
console.log(parseFloat("3.14abc"));
console.log(Number("42px"));
//ផ្នែក B៖ Arithmetic Operators 
10 + 5 //=15
10 - 5 //=5
10 * 5 //=50
10 / 5 //=2
10 % 3 //=3.33
2 ** 3 //=6
//10
console.log(7 / 2); //=3
console.log(7 % 2); //=3.5
console.log(2 ** 10); //=20
//11
console.log(10 / 4); //=2
console.log(10 % 4); //=2.5
console.log(2 ** 5); //=10
//12
let a = 3;
let b = 4;
console.log(a + b);//=7
console.log(a * b);//=12
console.log(b - a);//1
//13
 //15 % 2 =7.5
 // និង 20 % 2 =10.0
// 10.0 គឺជាលេខគូ
//14
console.log(2 + 3 * 4);//14
console.log((2 + 3) * 4);//20
console.log(10 - 4 - 3);//3

//ផ្នែក C៖ Assignment និង Unary Operators 
//1
let x = 10;
x += 5;
x -= 3;
x *= 2;
console.log(x);//Answer is 24
//2
let A = 5;
A++;
A++;
A--;
console.log(A);//Answer A=6
//3
let i = 5;
i++;
console.log(i);//Answer is 6
//4
let I = 5;
I--;
console.log(I);//Answer is 4
//5
let n = 10;
n += 5;
n--;
console.log(n);//Answer is 14
//6
console.log(+"3");//=3
console.log(-"5");//=-5
console.log(-(-4));//4
//ផ្នែក D៖ Comparison និង Logical
//1
5 == "5"
5 === "5"
5 != "5"
5 !== "5"
//the result is true
//2
5 == 5
5 != 3
10 > 20
4 <= 4
//the result is false
//3
(5 > 3) && (2 > 1) //true
(5 > 3) && (2 > 4)  //flase
(5 > 8) || (2 > 1) //true
//4
true && false //false
true || false // true
!true //false
!false //true
//ផ្នែក E៖ សរសេរកូដ 
let y = Number(prompt("បញ្ចូលលេខទី១"));
let z = Number(prompt("បញ្ចូលលេខទី២"));
console.log(z+y);

























