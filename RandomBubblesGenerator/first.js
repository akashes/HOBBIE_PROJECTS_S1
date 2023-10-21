// let num1=2
// let num2=5
// let result=num1+num2
// console.log(`The result of ${num1} and ${num2} is ${result}`);               //template literal
// console.log(`My name is
//  Akash es`);

// console.log(akash);            //can use variables without creating it earlier -- hoistingww

// let head = document.getElementById("head");

// let inputs = document.getElementsByName("text")[0].value; //why not working

// function message() {
// 	head.innerHTML = inputs;
// }

// let heads =document.getElementById('heads').value
// let heading=document.getElementById('heading')

// function show(){
// 	heading.innerHTML = heads

// document.querySelectorAll
// }

// let head=document.createElement('h1');
// 	document.body.appendChild(head)

// 	head.remove()

// let head=document.getElementById('head')
// let btn=document.getElementById('btn')

// head.addEventListener('mouseover',()=>{

// class bike{
// 	constructor(modelName,color,price){         //constructor method
// 		this.modelName=modelName;
// 		this.color=color;
// 		this.price=price;

// 	}

// 	bikeDetails(){                      //prototype method
// 		console.log(` ${this.modelName} bike with color ${this.color} and price ${this.price}`);

// 	}
// 	showPrice(){

// 		console.log(`price of ${this.modelName} is ${this.price}`);
// 	}

// 	static bike(){                      //static method
// 		console.log('have a safe journey ahead');
// 	}
// }

// class sportsBike extends bike{

// }
// let sb1=new sportsBike('cbr1000r','black',800000)

// sb1.bikeDetails()
// sb1.showPrice()
// sportsBike.bike()

// let bike1=new bike('hero cd dawn','black',100000);
// let bike2=new bike('fz','black',200000)

// bike1.bikeDetails();
// bike2.showPrice()
// bike.bike()

// function sum(a,b,...rest){
// 	let sum=0
// 	for( i of rest){

// 		sum=sum+i

// 	}
// 	console.log(a+b+sum);
// }

// sum(10,20,5,5)

// let a=3
// let b=34
// let sum=0;          //cool swap

// sum=a+b;
// b=sum-b;
// a=sum-a
// console.log(a,b);

// let a=5
// let b=12

// a=a+b
// b=a-b
// a=a-b

// console.log(a,b);

// num=408
// i=num
// cube=0
// lastDigit=0
// armstrong=0
// while(num>0 && i>100)
// {
// 	lastDigit=num%10
// 	cube=lastDigit ** 3
// 	armstrong=armstrong+cube
// 	num=parseInt(num/10)

// }
// if(i==armstrong){
// 	console.log(`The number ${i} is armstrong`);
// }else{
// 		console.log(`The number ${i} is not armstrong`);

// }

// input=3
// toadd=" "
// i=1
// while(i<=input){
// 	toadd+=input
// 	i++
// }
// console.log(toadd);

// input=4

// i=0
// toadd=" "
// sum=0
// while(i<input){
// 	toadd+=input
// 	sum+=(+toadd)

// 	i++

// }

// 	console.log(sum);

// var i =10
// var x=setInterval(() => {
//     document.getElementById('count').innerHTML=i
//     document.write(i)
//     i--
//     if(i==0){
//         clearInterval(x)
//     }

// }, 100);
// let sum=(a,b,...c)=>{
//     t=0
//     c.forEach(item=> t+=item)
//         return a + b+t;

// }
// console.log(sum(16,4,4,5,2));

// total=0
// function sum(a,b,...c){
//     c.forEach(item=>{
//         total+=item
//     })                               //this codd e is cool
//     return a+b+total
// }
// var arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(sum(...arr));

// num=17
// count=1
// isPrime=true
// for(var i=2;i<num;i++){
//     if(num%i==0){
//         isPrime=false
//         break
//     }else{
//         isPrime=true

//     }
// }
// console.log(isPrime ? "prime" : "not a prime");

// n1=6
// n2=12
// gcd=0

// for(var i=1;i<=n1;i++){
//     if(n1%i==0 && n2%i==0){
//         gcd=i
//     }
// }
//     console.log(gcd);

// let a=document.getElementsByTagName('h1')
// a[0].style.color='red'
// a[0].style.display="inline"
// a[0].style.backgroundColor='green'
// a[0].style.fontSize='4rem'

// const prompt = require('prompt-sync')({sigint:true})
// let num = prompt('enter a number: ')
// console.log(num);

// row=5;
// for(var i=1;i<=5;i++){
//     string=" "
//     for(space=1;space<=(row-i);space++)
//     {
//         string+="  "
//     }
//     for(var j=1;j<=(i*2-1);j++)
//     {
//         string+="* "
//     }
//     console.log(string);

// }

// for(var i=row-1;i>=1;i--){
//     string=" "

//     for(var space=1;space<=(row-i);space++){
//         string+="  "
//     }

//     for(var j=1;j<=(2*i-1);j++){
//         string+="* "
//     }
//     console.log(string);
// }

// row=9
// row1=parseInt(row/2)

// for(var i=1;i<=row1;i++){
//     string=''
//     for(var j=1;j<=i;j++){
//         string+="* "
//     }
//     console.log(string);
// }
// for(var i=1;i<=(row-row1);i++){
//     string=' '
//     for(var j=row1+1;j>=i;j++){
//         string+="* "
//     }
//     console.log(string);
// }

// let values=[4,5,44,23,45,42,34,56,41,78,9]
// values.sort((a,b)=>a-b)

// low=0
// high=values.length-1
// search=44
// flag=false
// count=0

// while(low<=high){
//     count++
//     mid = Math.floor((low + high) / 2);
//     if(search==values[mid]){
//         flag=true
//         console.log(values[mid] );
//         break

//     }else if(search<values[mid]){
//         high=mid-1
//     }else if(search>values[mid]){

//         low=mid+1
// }
// }

// console.log(count);

// num=3
// let values=[1,2,5,6,7,32,33,45,76,88,999]
// values.sort((a,b)=>a-b)
// l=0
// h=values.length-1
// m=0
// c=0
// flag=0
// while(l<=h){
//     m = Math.floor((l + h) / 2);

//     c++
//     if(num==values[m]){

//         console.log(`${num} found in ${m} index`);
//         flag=1
//         break
//     }else if(num>=values[m]){
//         l=m+1
//     }
//     else if(num<=values[m]){
//         h=m-1
//     }
// }
// if(flag==0){
//     console.log('num not present');
// }

// console.log(c);

// let values=[

//     [1,2],
//     [4,6],
//     [7,77]
// ]

// for( var i of values){
//     for(var j of i)
//     console.log(j);
// }
// for(var i=0;i<values.length;i++){
//     for(var j=0;j<values[i].length;j++){
//         console.log(values[i][j]);
//     }
// }
// num = 10;

// for(var i=0;i<values.length;i++){
//     for(var j=0;j<values[i].length;j++){
//         if(values[i][j]<num){
//             console.log(values[i][j]);
//         }
//     }
// }

// function abc(){
//     console.log("inside the fuction");
// }
// console.log("console 1");
// let a=10
// let b=20
// console.log("console 2");
// setTimeout(()=>{console.log("inside setTimeout")},0)
// console.log('console 3');
// setTimeout(() => {
// 	console.log("inside setTimeout 2");.

// }, 0);
// new Promise((resolve,reject)=>{

//     resolve();

// }).then(()=>{
//     console.log('inside promise');
// })

// abc()

// let car={
//     name:"maruthi",
//     year:2001,
//     color:'blue'
// }

// var object=JSON.stringify(car)

// let parse=JSON.parse(object)

// alert(parse.color)

employee = [
	[1000, "akash", "developer", "kochi", 55000, 3],
	[5000, "akshay", "tester", "tvm", 50000, 5],
	[1005, "noel", "qa", "kochi", 40000, 2],
	[6000, "jerin", "developer", "kochi", 45000, 3],
	[7000, "john", "tester", "alappey", 40000, 3],
	[8000, "obin", "developer", "kallupalam", 46500, 1],
	[1000, "alwin", "developer", "kochi", 40023, 3],
	[3400, "paul", "qa", "kochi", 40120, 3],
	[1050, "aswin", "developer", "america", 40000, 9],
];
highest=(employee.reduce((a, b) => a[4] > b[4] ? a : b));  //reduce is a little bit tricky
// highest=(employee.reduce((a, b) => a[4] > b[4] ? a[1] : b[1]));//to get emplotee name why not ithy use cheythukooda???
console.log(highest[1]);
lowest=(employee.reduce
    ((a, b) => a[4] < b[4] ? a : b));
console.log(lowest[1]);
x = employee.map((n) => n[4]);
console.log(x);
console.log(x.reduce((a, b) => a + b));
console.log(employee.map((emp) => emp[4]).reduce((a, b) => a + b));
// //names
// // for(var subArray of employee){
// //   // for(var i=0;i<subArray.length;i++){
// //     console.log(subArray[1]);

// // }

// employee.forEach((element) => console.log(element[1]));
// console.log("-------");

// //toral employee
// console.log(employee.length);
// console.log("-------");

// // for(var subArray of employee){
// //   // for(var i of subArray){
// //   //   if(i==='developer'){
// //   //     console.log(subArray);
// //   //   }
// //   // }
// //   if(subArray[2]==='developer'){
// //     console.log(subArray);
// //   }
// // }

// // employee.forEach((ele) => {
// // 	if (ele[2] === "developer") {
// // 		console.log(ele);
// // 	}
// // });
// console.log(employee.filter((ele) => ele[2] == "developer"));
// console.log("-------");

// employee.filter(n=>n[4]>30000)
// console.log("-------");

// // console.log(employee.filter((n) => n[1] === "alwin"));
// console.log(employee.find(emp=>emp[1]=='akash'));
// console.log("-------");

// employee.sort((emp1, emp2) => emp1[4] - emp2[4]);
// console.log(employee);

// let num = [1, 2, 5, 7, 4, 545, 45, 3465, 54, 3];
// console.log(num.filter((n) => n > 25)); //condition satisfy cheyyunna n's maathram print aavum
// console.log(num);


// console.log("-------");


// let a=[10,11,12,13,14,15,16]
// console.log(a.map((n) => n**3));   //will retyrn value as an array ; its the difference bw foreach
// console.log(a.map(n=>n>12?n-=1:n+=1));



//[ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]

]
//1. district having Highest +ve case 
a=covid_data.reduce((a, b) => a[2] > b[2] ? a : b);
console.log(a[1]);
//2. district having Highest 1st dose vaccine
a = covid_data.reduce((a, b) => (a[5] > b[5] ? a : b));
console.log(a[1]);
//3. district having lowest death rate
a = covid_data.reduce((a, b) => (a[3] < b[3] ? a : b));
console.log(a[1]);

//4. sort data with +ve case in descending order
console.log(covid_data.sort((a, b) => b[2] - a[2]).filter((a) => a[1]));
//5. is district with +ve cases > 15000
isPositive=false
count=0
covid_data.forEach(element => {
    if(element[2]>15000){
        
        isPositive=true
        
        count++
    }

});
console.log(isPositive===true?'yes':'no');
console.log(count);

console.log();
console.log(`is there any district with +ve cases > 15000:${covid_data.some((a) => a[2] > 15000)?'yes':'no'}`);

//6. sort data with 1st dose vaccine
console.log(covid_data.sort((a,b)=>b[5]-a[5]));
//7. Print Thrissur details
console.log(covid_data.find((item) => item[1] === "Thrissur"));
//8. Print total number of positive cases
let newarr=covid_data.map(item=>item[2]) //first mapping to get the values in 2nd index , because we cant perform reduce on array wit strings
console.log(newarr.reduce((a,b)=>a+b));
//9. Print total number of curred cases
console.log(covid_data.map((item) => item[4]).reduce((a, b) => a + b));

//10. Print curred cases in Idu

curred=covid_data.find(item=>item[1]==="Idukki")
console.log(curred[4]);
num=[10,11,12,13,14,15,16]
console.log(num.reduce((a, b) => a[2] + b[2]));     //reduce() //ee paranthasis inte akathulla a,b reduce inte arguments aano atho call bacckinte paraemeters oo atho randum aano....

