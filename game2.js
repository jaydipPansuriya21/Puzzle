
var pair = [123 , 147 , 159 , 258 ,456 , 357 , 369 , 789];
var userX = [];
var userY = [];
var state = true;

var ComputerSelector ;


function reset(){
  //console.log(userX);
  userX = [];
  userY = [];

  //console.log(userY);
 enable();
document.getElementById('result').innerHTML = "";
document.getElementById('X').style.backgroundColor = "rgba(255,0,0,0.7)";
document.getElementById('Y').style.backgroundColor = " white";
document.getElementById('body').style.backgroundColor = " white";
state = true;
  }

function enable(){
   for(var i =1;i<10;i++){
  document.getElementById(i).disabled = false;
  document.getElementById(i).innerHTML = i;
}
}
function disable(){
   for(var i =1;i<10;i++){
  document.getElementById(i).disabled = true;
}
}



	function submit(value) {
if(state){
document.getElementById(value).innerHTML= " X ";		
document.getElementById(value).disabled = true;
getItem("x", value);
state = false;
document.getElementById('X').style.backgroundColor = " white";
document.getElementById('Y').style.backgroundColor = " rgba(255,0,0,0.7)";
}
else
{
document.getElementById(value).innerHTML= " O ";    
document.getElementById(value).disabled = true;
getItem("o", value);
state = true;
document.getElementById('Y').style.backgroundColor = " white";
document.getElementById('X').style.backgroundColor = "rgba(255,0,0,0.7)";

}

}
 
function getItem(player,value){

if(player=="x"){
userX.push(value);
userX.sort();
if(checkForResult(userX))
{
document.getElementById('Y').style.backgroundColor = " rgba(255,0,0,0.7)";
document.getElementById('X').style.backgroundColor = "rgba(255,0,0,0.7)";

  console.log("user X win..  ");
  disable();
  document.getElementById('result').innerHTML = "....  &nbsp;&nbsp;&nbsp;&nbsp; PLAYER   &nbsp;&nbsp;&nbsp;&nbsp;X &nbsp;&nbsp;&nbsp;&nbsp;  WIN &nbsp;&nbsp;&nbsp;&nbsp;  ....";
document.getElementById('body').style.backgroundColor = "black";

}
}
else {
userY.push(value);
userY.sort();
if(checkForResult(userY))
{

document.getElementById('Y').style.backgroundColor = " rgba(255,0,0,0.7)";
document.getElementById('X').style.backgroundColor = " rgba(255,0,0,0.7)";
  console.log("user Y win..  ");
  disable();
document.getElementById('result').innerHTML = "....  &nbsp;&nbsp;&nbsp;&nbsp; PLAYER   &nbsp;&nbsp;&nbsp;&nbsp;O &nbsp;&nbsp;&nbsp;&nbsp;  WIN &nbsp;&nbsp;&nbsp;&nbsp;  ....";
document.getElementById('body').style.backgroundColor = " black";
}
}
console.log(userX);
console.log(userY);
}
function checkForResult(player){
  var temp ;
     for(var i=0;i<player.length-2;i++){
          temp = player[i];
            for(var j=i+1;j<player.length-1;j++){
                       temp *=10; 
                       temp += player[j];
                     for(var l=j+1;l<player.length;l++){
                       temp *=10; 
                       temp += player[l];
                       for(var k = 0;k<pair.length;k++){
                        if(pair[k] == temp)
                          return true;
                       }

                      
                       temp -= player[l];
                      temp /=10; 

                     }
                        temp -= player[j];
                        temp /=10;
                     }
                       temp -= player[i];
                       temp /=10; 
                  }  
                  return false;

}




