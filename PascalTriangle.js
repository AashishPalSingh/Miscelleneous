/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result=[];
    for(let i=0;i<numRows;i++){
        let temp=[]
        let ans =1;
        temp.push(ans);
        //console.log("temp",temp)
        for(let j=1;j<=i;j++){
            ans = ans*((i-j)+1)
            ans = ans/j
            if(j==i){
                temp.push(1);
                continue;
            }
            temp.push(ans)
        }
        result.push(temp)
    }
    //console.log(result)
    return result;
};