module.exports = function check(str, bracketsConfig) {
  const lenB = bracketsConfig.length;
  const lenS = str.length;
  var counter = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var breaker = [];
  var number = 0;
  var countNum = 0;
  var stArr = [];
  var helper = -1;
  for (var i = 0; i < lenS; i++){
    for (var j = 0; j < lenB; j++){
      if ( bracketsConfig[j][0] === str[i] ) { 
        if (bracketsConfig[j][0] === bracketsConfig[j][1] ){
          helper *= -1;
          if (helper === -1){
            
            stArr[i] = countNum-1;
            countNum--; 
          } 
          else {
            stArr[i] = countNum;
            countNum++;
         } 
          } else {
            stArr[i] = countNum;
            countNum++;
         }
      } else if ( bracketsConfig[j][1] === str[i]) {  
        --countNum; 
        stArr[i] = countNum;
      }
    }
  } 
 
  if (stArr.sort()[0]  < 0 || stArr.length % 2 === 1)
 return false;
 
  return str + '-> '+  stArr + '-> ' + stArr.length + ' ->' + stArr.sort()[0] + ' ' +stArr.length % 2  + ' ' + stArr[stArr.length];


  for (var i = 0; i < lenS; i++){
    for (var j = 0; j < lenB; j++){
      if ( bracketsConfig[j][0] === str[i] ) { 
        number++; 
        breaker[number] = new Array();  
        breaker[number][0] = bracketsConfig[j][1];
        breaker[number][1] = 1;
      } else if ( bracketsConfig[j][1] === str[i] && breaker[number] === str[i]) {  
        number--; 
        breaker.pop();
      }
    }
  } 
  return number;
  if (number === 0) return true; else return false;
}
