let d = new Date();
let time = d.toLocaleTimeString();
while(1){
  setTimeout(() => {console.log(time)}, 1000);
}
