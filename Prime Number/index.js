let prime=13;
let count=0
for(i=1;i<=prime;i++){
    if(prime%i==0){
        count++
    }
}
if(count==2){
    console.log("Yes it is the Prime Number")
}else{
    console.log("Its is not an Prime Number")
}
