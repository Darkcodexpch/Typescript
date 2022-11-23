// const input1 = document.getElementById('num1')! as HTMLInputElement;
// const input2 = document.getElementById('num2')! as HTMLInputElement;
// const button = document.querySelector('button')!;
// function add(x:number, y:number):number {
//      return x + y
// }
// button?.addEventListener('click',function(){
//      console.log(add(+input1.value,+input2.value))
// })
// Data Types Typescript
// String
// let fullName : string = "Kamran Ali";
// let fullName = 'Kamran';
//  let fullName :string;
// Number
// let Age : number = "Kamran Ali";
// let Age = 20;
//  let Age :number;
/// boolean
// true 
// false
//  any
// in this type you can store anything in it
// Arrays
// Array of string
// const names : string[] = []
// Array Of Number
// const names : number[] = []
// Object
//  const person ={
//      name:"Nadir"
// }
// const person:{
//      name : string,
//      age:number,
//      hobbies:string[],
//      email:string
//  }={
//      name:'Kamran',
//      age:23,
//      hobbies:['Coding','music'],
//      email:'ikamihere@gmail.com'
//  }
// Object with optional values
// const person:{
//      name : string,
//      age:number,
//      hobbies:string[],
//      email?:string
//  }={
//      name:'Kamran',
//      age:23,
//      hobbies:['Coding','music'],
//      email:'ikamihere@gmail.com'
//  }
// create Object with type
// const customer : Person[] =[];
// type Person = {
//       name : string,
//       age:number,
//       hobbies:string[],
//       email:string
// }
// const kamran : Person={
//      name:"Kamran",
//      age:23,
//      hobbies:["gaming","coding"],
//      email:"ikamihere@gmail.com"}
//      const ajia : Person={
//           name:"saify",
//           age:23,
//           hobbies:["gaming","coding"],
//           email:"Saif@gmail.com"} 
//           customer.push(...customer,kamran)
//           console.log(customer)
// Tuple
//   in case we need limited size array like only two element exist in array
//   const roles:[number,string] =[0,"admin"];
// union type
// in case we don't know data is string else number so we assign union type
// let data : string | number;
// literal type
// in this type we add our custom value
// let cond : "value1"|1;
// function type
var myFunc;
var add = function (x, y) {
    return x + y;
};
myFunc = add;
console.log(myFunc(1, 3));
