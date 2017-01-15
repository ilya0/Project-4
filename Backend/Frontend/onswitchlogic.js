var buttonstatus = "off";
var counter=0;
var testfunction = function(){

  if(counter%2===0){
    buttonstatus="on";
    changeiconwhite();
   runFullprogram();
  }else{
    buttonstatus="off";
    changeicontrans();
  }

counter++;

console.log(counter);
console.log(buttonstatus);
};


var changeiconwhite = function(){
$(".fa").css("color", "white");
};
var changeicontrans = function(){
$(".fa").css("color", "transparent");
};
