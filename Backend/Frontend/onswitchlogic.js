var buttonstatus = "off";
var counter=0;
var testfunction = function(){

  if(counter%2===0){
    buttonstatus="on";
  }else{
    buttonstatus="off";
  }

counter++;

console.log(counter);
console.log(buttonstatus);
};
