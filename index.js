// let date = new Date();

// // console.log(date, typeof date);
// // time : hour, minutes , second

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());


// // date : day, month, year

// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());

//day of the week
// console.log("week",date.getDay()) 
// 0 - 6 , 0 => sunday, 1 => monday, 2 =>tuesday .....






function currentTime(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
     console.log(`Current Time is ${hour}:${minute}:${second}`)
}

// currentTime()

// for(let i=1;i<=10000;i++){
//     currentTime()

// }


setInterval(currentTime, 1000)//1000 means 1000 mili second


