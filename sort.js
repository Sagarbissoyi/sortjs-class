// sort()



// let arr=["mango","apple","banana","kiwi"];
// arr.sort();
// console.log(arr); // ["apple", "banana", "kiwi", "mango"]




// let arr1 = [12,100,56,233,34,9]
// arr1.sort()
// console.log(arr1) // [100, 12, 233, 34, 56, 9]




// let arr =["12","100","56","233","34","9"]
// arr.sort()
// console.log(arr) // ["100", "12", "233", "34", "56", "9"]   




// let arr =[12,100]
// arr.sort((a,b) => a-b)// if the sort is in ascending order then use (a,b) => a-b and if the sort is in descending order then use (a,b) => b-a
// console.log(arr)


//a-b is give positive value then it change the value in small to big or acending to decending
//b-a is give negative value then it change the value in big to small or decending to acending


// let arr=[12,100,56,233,34,9]
// arr.sort((a,b)=>b-a)
// console.log(arr)



// let arr=[12,100,56,233,34,9]
// arr.sort((a,b)=>-100)
// console.log(arr)  // 


// let arr=[10,9,11,1000]
// arr.sort()//it will not sorted and it will give the string in acending order
// console.log(arr)//  [10,1000,11,9]
// arr.sort((a,b) => a-b)//it will give you sorted array
// console.log(arr)//[9,10,11,1000]



// // a - b is +ve => a is bigger than b
// // a - b is -ve => a is smaller than b
// // a - b 0 => a and b are equal
//  negative means no change or positive menas change
// let arr = [12,100,56,233,34,9]




let arr = [10,9,11]
arr.sort((a,b)=>b-a)
console.log(arr)//[]