// //Assignment 24
// //Q1
// var int = +prompt("Enter a positive number : ");
// while(int < 0)
// {
//     int = +prompt("Enter a positive value : ");
// }
// document.write("NUMBER : " + int);
// document.write("Round off value : " + Math.round(int));
// document.write("Floor Value : " + Math.floor(int));
// document.write("Ceil value : " + Math.ceil(int));

// //Q2

// var int = +prompt("Enter a positive number : ");
// while(int > 0)
// {
//     int = +prompt("Enter a positive value : ");
// }

// document.write("NUMBER : " + int);
// document.write("Round off value : " + Math.round(int));
// document.write("Floor Value : " + Math.floor(int));
// document.write("Ceil value : " + Math.ceil(int));

//Q3
// var inp = +prompt("Enter a value ");
// document.write("The absolute value of " + inp + " is " + Math.abs(inp));

//Q4
// var dice = Math.ceil(Math.random() * 6); // 1 - 6
// document.write("Random dice value : " + dice);

//Q5
// var coin = Math.ceil(Math.random() * 2); // 1 -2;
// if (coin === 2)
// {
//     document.write("coin : " + coin + "<br>" + "Random coin value : Heads");
// }
// else if(coin === 1) {

//     document.write("coin : " + coin + "<br>" + "Random coin value : Tails ");
// }
//Q6
//document.write("A random number between 1 and 100 : " + Math.ceil(Math.random() * 100));

//Q7
// var user = parseFloat(prompt("Enter your weight in kilograms : "));
// document.write(user)
//Q8
// var secret = Math.ceil(Math.random() * 10);
// var inp = +prompt("Enter a number : ");
// while(inp !== secret)
// {
//     alert("Your answer is wrong! Try again");
//     inp = +prompt("Enter a number : ");
// }
// alert("Congrats");

//Chapter 31 - 34
// var date = new Date();
// document.write(date);
//Q2

// var date = new Date();
// var month= ["January","February","March","April","May","June","July",
//             "August","September","October","November","December"];
// //document.write("current month : " + month[date.getMonth()]) //month[3]
// var day = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
// var nday = date.getDay();
// document.write(day[nday]);
//Q4
// var date = new Date();
// if(date.getDay() === 0 || date.getDay() === 6)
// {
//     alert("Its a FUN DAY");
// }
// else {
//     alert("Not a fun day");
// }
//Q5
// var pr = new Date();
// if(pr.getDate() <= 15)
// {
//     alert("First 15 days of this month");
// }
// else {
//     alert("Last 15 days of this month");
// }

//Q6
// var date = new Date();
// var time = date.getTime(); // 1 Jan 1970
// document.write("Elapsed milliseconds since 1st January, 1970 : " + time);
// var mtime = time / (1000 * 60);
// document.write("<br>Elapsed minutes since January 1, 1970 : " + mtime);
//Q7
// var date = new Date();
// var hours = date.getHours();
// if (hours < 12) {
//     alert("It's AM");
// }
// else {
//     alert("It's PM");
// }
// var lastD = new Date('Dec 31, 2020');
// document.write("Later date : " + lastD);
//Q9
// var firstD = new Date('April 14, 2021');
// var cday = new Date();
// var a = Math.floor((cday - firstD)/(1000 * 60 * 60 * 24));
// alert(a);
//Q10
// var firstD = new Date('January 01, 2015');
// var cday = new Date();
// var a = Math.floor((cday - firstD)/(1000 * 60 * 60 * 24));
// alert(a);

//FUNCTION
//Q1
// var lew = () => {
//     document.write(new Date());
// };

// lew();

//Q2
// function greet(fname, lname)
// {
//     alert("Hi! " + fname + " " + lname);
// }
// greet("sherry", "dhokeybaaz");

//Q3
// var inp = +prompt("Enter num");
// var inp2 = +prompt("Enter another num :");
// function add(inp, inp2)
// {
//     document.write(`${inp} + ${inp2} = ${inp + inp2}`);
// }
// add(inp, inp2);

//Q5
// function square(num)
// {
//     return num*num;
// }
// document.write(square(5));
//Q6
// function fact(n)
// {
//     if (n <= 0)
//     {
//         return 1;
//     }
//     else {
//         return fact(n-1)*n;
//     }
// }

// document.write(fact(5));

// function fact(n)
// {
//    var factorial = 1;
//     // 4! = 4 * 3 * 2 * 1
//     for (var i = 1; i <=  n; i++)
//     {
//        factorial = factorial * i;
//     }
//     return factorial;
// }
// document.write(fact(4));

//Q7
// function count(s, e)
// {
//   s = Math.floor(s); e = Math.ceil(e);

//     for (var i = s; i <=e ; i++)
//     {
//         document.write("<br> " + i);
//     }
// }
// count(10.65, 15.98);
//Q8
// function add(a, b)
// {
//     var sum = a + b;
//     return sum;
// }
// document.write(add(1,2));

//function definition

// function hyp(base, perp) {
//   function square(b) {
//     return b * b;
//   }
//square(6);
//   return Math.sqrt(square(base) + square(perp));
// }
// document.write(hyp(3, 4));

//Q9
// function area(w, h)
// {
//     return w * h;
// }

// document.write(area(2,3));
// var a = 2; var b = 3;
// document.write(area(a,b));
//Q10
// function palindrome(a)
// {
//     b = a.split("").reverse().join("");
//     if (a === b)
//         return true;

//     return false;
// }

// document.write(palindrome("maaz"));
//Q11
// var capital = string => {
//     var s = string.split(" ");

//     for (let i in s)
//     {

//         s[i] = s[i][0].toUpperCase() + s[i].slice(1,s[i].length).toLowerCase();

//     }
//     s = s.join(" ");
//     document.write(s);
// }
// capital("hello yar kese ho");
//Q12
// var string = (a) => {
//     a = a.split(" ");
//     var max = "" ;
//     for (let i in a)
//     {
//        if (a[i].length > max.length)
//        {
//           max = a[i];
//        }
//     }
//     return max;
// }
// console.log(string("Web Development Tutorial"));
//Q13
// function strcount (str, occ)
// {
//   var freq = 0;
//     for (let i = 0; i < str.length; i++ )
//     {
//        if(str[i] === occ)
//        {
//            freq++;
//        }
//     }
//     return freq;
// }
// console.log(strcount("Ahmed kese ho yar", "e"));
// //Q14
// function calcCircumference(rad)
// {
//     return 2 * 3.1412 * rad;
// }
// function calcArea(radius)
// {
//     return radius * radius * 3.1412;
// }

//Chapter 38 - chapter 42
//Q1
// function power(a, b) {
//   if (b > 1) {
//     var j = 1;
//     for (var i = 0; i < b; i++) {
//       j = j * a;
//     }
//     return j;
//   } else if (b < 1) {
//     return Math.pow(a, b);
//   }
// }
// console.log(power(2, 2));
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//     if(answer % 4 === 0)
//     {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
//   rl.close();
// });
// // if (year % 4 === 0)
// // {
// //     console.log(true);
// // }
// // else {
// //     console.log(false);
// // }
//Q3
// function area(a, b, c) {
//   function S(a, b, c) {
//       return (a + b + c) /2;
//   }
//   return S(a,b,c)*(S(a,b,c) -a)*(S(a,b,c) - b)*(S(a,b,c) - c);
// }
// console.log(area(3,4,5));

// function marks(a,b,c)
// {
//     return (a+b+c)/3
// }
// function marksp(a,b,c)
// {
//     return (a+b+c)/3 * 100;
// }
// function main()
// {
//     console.log(marks);
// }

