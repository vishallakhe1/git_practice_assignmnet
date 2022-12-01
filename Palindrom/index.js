
let str=1221;
let x=str.toString()
let bag=""
for(let i=x.length-1;i>=0;i--){
  bag+=x[i]
}
if(bag==x){
    console.log("Yes it is palindrome")
}else{
    console.log("No it is not a palindrome")
}

