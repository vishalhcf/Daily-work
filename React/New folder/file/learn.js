// let  arr1=[21,12,13,4,5]

// // function double(item){
// //     return item%2==0;
// // }
// // const output=arr1.filter((item)=>item%2==0)
// // console.log(output)

// let r=arr1.reduce((acc,cur)=>{

//     // return acc+=cur;
//     if(cur>acc){
//         acc=cur;
//     }
//     return acc;

// }

// ,0 )
// console.log(r)

let arr1=[1,2,3,4,6];
function abc(x,y,...z){
    console.log(x);
    console.log(y);
    console.log(z);
    // console.log(a+b)
}
abc(...arr1)