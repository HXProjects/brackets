module.exports = function check(str, bracketsConfig) {
  // your solution
  //check if str.length is even
  //количество символов в строке четное
  let isBalanced=true;    
  if(str.length%2==0){
    //rearrange config to one array 
    function getCongig(bracketsConfig){
        let arrayBracket=[];
        for(let r=0; r<bracketsConfig.length; r++){
            for(let c=0; c<2;c++){
                arrayBracket.push(bracketsConfig[r][c]);
            }
        }
        console.log(`new array:${arrayBracket}, its length: ${arrayBracket.length}`);        
        
        return arrayBracket;
    }
    //function to check string
    function checkStr(arrayBracket){            
        ///  stack to store brackets to check        
        let storageArray = [];
        //check every char in the string 
        for(let strIndex=0;strIndex<str.length;strIndex++){
          //an opening bracket, add to storing array
          if((arrayBracket.indexOf(str[strIndex])%2==0)){                    
                storageArray.push(str[strIndex]);  
                // if there is an opening-closing brackets of the same char and the last char in sthorage is the same type            
               if((storageArray[storageArray.length-1]==storageArray[storageArray.length-2])&&(arrayBracket[arrayBracket.indexOf(str[strIndex])]==arrayBracket[arrayBracket.indexOf(str[strIndex])+1])){
                storageArray.pop()
                storageArray.pop()
               }          
            }
            // else==closing bracket
            else{ 
              //if in array the last sign is the openning brake and the same type of bracket               
               if(storageArray[storageArray.length-1]==arrayBracket[arrayBracket.indexOf(str[strIndex])-1]){
                   storageArray.pop()                   
               }  
               else{
                   isBalanced=false;
               }
            }
        }
        if (storageArray.length>0){
          isBalanced=false;
        }
        
        return isBalanced;
    }   
    
      let bracketSequence= getCongig(bracketsConfig);//call method to rearrange configArray
      checkStr(bracketSequence);//call method to check the srting
      }
    //количество символов в строке нечетное
    else{
        isBalanced=false;
    }
   
    return isBalanced;
  }
