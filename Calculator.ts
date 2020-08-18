/*function add(num1 : number, num2 : number)
{
    var result:number = num1 + num2;
    console.log("Sum of "+num1+'and'+num2+ ' = '+ result);
}

function  sub (num1 , num2 )
{
    console.log('Sub = '+(num1 - num2));
}
function mul (num1 , num2 )
{
    console.log('Mul = '+(num1*num2));
}
function div(num1 : number , num2 : number)
{
    console.log('Div = '+(num1/ num2));
}
 add(10,20);
 sub(30,20);
 div(50, 3);
 mul(23,10); */

 var arr = [10,20,'Aradhana',45.5,'South Extension'];
 console.log(arr);
 console.log('Total elements = '+arr.length);
 console.log('Value at 2nd index = '+arr[2]);
 arr[1] = 33;
 console.log(arr);
 arr.push(122)
 console.log('After Push = '+arr);
 console.log('After Pop = '+arr.pop());
 var newArr = arr;
 console.log('New Array = '+newArr);
 var i:number;
 for (i= 0; i<arr.length ; i++)
 {
     console.log(arr[i]);
 } 

 
 
 