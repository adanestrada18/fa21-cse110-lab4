for(let key in statistics){
  if(key == 'r'){
    console.log(statistics.key);
  }
  else{
    let num = statistics.key % 2;
    if(num == 1){
      console.log(statistics.key);
    }
  }
}
      
