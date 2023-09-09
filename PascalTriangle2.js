/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {

    let result = [];

    let value = 1;
    //let i = rowIndex;

       for(let j = 0; j <= rowIndex; j++){
           if(j == 0){
               value = 1;
           }else{
               value = (value * (rowIndex-j+1)) / j;

           }
           result.push(value);
       }

return result;

};