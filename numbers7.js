let arr = [0,null,2,4,6, 3, 5, 7];

for(let i=0; i < arr.length; i++){
  
    if(typeof arr[i] === 'number'&& !isNaN(arr[i])){
        if(arr[i] === 0){
          
            console.log(arr[i] + " - ноль")
        }
      
    }else{
      
        console.log(arr[i]  + " - неопределенно")
        
    }
}

console.log(arr.filter(n => n%2 == 0).length + " - кол-во четных чисел");

console.log(arr.filter(n => n%2 == 1).length + "- кол-во нечетных чисел");