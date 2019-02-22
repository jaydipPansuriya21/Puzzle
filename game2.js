
function start(){
  for(var i =1;i<10;i++)
  document.getElementById(i).disabled  = true;

}
start();









var pair = [123 , 147 , 159 , 258 ,456 , 357 , 369 , 789];
var userX = [];
var userY = [];
var state = true;

var ComputerSelector ;



	function submit(value) {
if(state){
document.getElementById(value).innerHTML= " X ";		
document.getElementById(value).disabled = true;
getItem("x", value);
state = false;
}
else
{
document.getElementById(value).innerHTML= " O ";    
document.getElementById(value).disabled = true;
getItem("o", value);
state = true;
}

}
 
function getItem(player,value){

if(player=="x"){
userX.push(value);
userX.sort();
if(checkForResult(userX))
{
  console.log("user X win..  ");
}
}
else {
userY.push(value);
userY.sort();
if(checkForResult(userY))
{
  console.log("user Y win..  ");
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




